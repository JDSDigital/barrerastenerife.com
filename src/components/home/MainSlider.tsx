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
      image1: file(relativePath: { eq: "home/1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image2: file(relativePath: { eq: "home/2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image3: file(relativePath: { eq: "home/3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image4: file(relativePath: { eq: "home/4.png" }) {
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

  const queryImages = [data.image1, data.image2, data.image3, data.image4];

  const parsedImages = queryImages.map(image => getImage(image));

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
        <Grid item xs={12} sm={6}>
          <TownSearch
            value={town}
            onChange={handleChange}
            onSubmit={handleSearch}
          />
        </Grid>
      </Grid>
    );
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      setIndex(oldIndex =>
        oldIndex === parsedImages.length - 1 ? 0 : oldIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-slider">
      {parsedImages.map((image, i) => (
        <GatsbyImage
          key={`slider-image-${i}`}
          image={image!}
          alt="slider image"
          className="slider-image crop-center"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}

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
    </div>
  );
};

export default MainSlider;
