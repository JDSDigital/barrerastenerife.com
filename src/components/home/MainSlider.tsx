import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ParallaxBanner } from "react-scroll-parallax";
import SearchIcon from "@material-ui/icons/Search";
import { TownSearch } from "../TownSearch";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useTranslation } from "hooks/useTranslation";

const MainSlider: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "home/1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image4: file(relativePath: { eq: "home/4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image5: file(relativePath: { eq: "home/5.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image6: file(relativePath: { eq: "home/6.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      team: file(relativePath: { eq: "about/team.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      logo: file(relativePath: { eq: "logo/logo-vertical-full-text.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const queryImages = [
    data.image1,
    data.image4,
    data.image5,
    data.image6,
    data.team,
  ];

  const parsedImages = queryImages.map(image => getImage(image));

  const images = parsedImages.map(image => image?.images.fallback?.src);

  const [layers, setLayers] = useState([
    {
      image: images[0],
      speed: -5,
    },
  ]);

  const SearchForm = () => {
    const { navigate } = useI18next();
    const { t } = useTranslation();

    const [town, setTown] = useState<string>("");

    const handleChange = (town: string) => {
      setTown(town);
    };

    const handleSearch = () => {
      navigate("/properties/search", { state: { town } });
    };

    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={8}>
          <TownSearch value={town} onChange={handleChange} />
          <div className="text-center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="color-white mt-5"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
            >
              {t("search")}
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  };

  const [, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      setIndex(oldIndex => {
        const newIndex = oldIndex === images.length - 1 ? 0 : oldIndex + 1;

        console.log({ newIndex });

        setLayers(oldLayers => [
          {
            image: images[newIndex],
            speed: -5,
          },
          ...oldLayers,
        ]);

        return oldIndex === images.length - 1 ? 0 : oldIndex + 1;
      });

      const promise = new Promise(resolve => {
        setTimeout(resolve, 300);
      });

      await promise;

      setLayers(oldLayers => {
        const newLayers = [...oldLayers];
        newLayers.pop();
        return newLayers;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ParallaxBanner className="main-slider" layers={layers}>
      <div className="main-slider-overlay">
        <Container
          className="main-slider-container"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          <GatsbyImage
            image={getImage(data.logo)!}
            alt="logo"
            className="main-slider-logo"
          />

          <SearchForm />

          <div className="arrows-container">
            <div className="arrows-box">
              <ArrowRightAltIcon className="arrow color-white" />
              <ArrowRightAltIcon className="arrow color-white" />
            </div>
          </div>
        </Container>
      </div>
    </ParallaxBanner>
  );
};

export default MainSlider;
