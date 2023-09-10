import { Container, Grid } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React, { useCallback, useEffect, useState } from "react";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";
import { TownSearch } from "../TownSearch";

const MainSlider: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "home/1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
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
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      team: file(relativePath: { eq: "about/team.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      logo: file(relativePath: { eq: "logo/dreams.png" }) {
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

  const SearchForm = useCallback(() => {
    const { navigate } = useI18next();

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
          <TownSearch
            value={town}
            onChange={handleChange}
            onSubmit={handleSearch}
          />
        </Grid>
      </Grid>
    );
  }, []);

  const [, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      setIndex(oldIndex => {
        const newIndex = oldIndex === images.length - 1 ? 0 : oldIndex + 1;

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
