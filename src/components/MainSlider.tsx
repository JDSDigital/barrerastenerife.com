import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ParallaxBanner } from "react-scroll-parallax";
import SearchIcon from "@material-ui/icons/Search";
import { TownSearch } from "./TownSearch";
import { getImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useTranslation } from "hooks/useTranslation";

const MainSlider: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "properties/property5.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.image);

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

  return (
    <ParallaxBanner
      className="main-slider"
      layers={[
        {
          image: image?.images.fallback?.src,
          speed: -20,
        },
      ]}
    >
      <div className="main-slider-overlay">
        <Container className="main-slider-container">
          <Typography
            component="h1"
            variant="h3"
            className="main-slider-title mb-3"
            align="center"
          >
            BARRERAS
          </Typography>
          <Typography
            component="p"
            variant="h1"
            className="main-slider-subtitle mb-4"
            align="center"
          >
            Where Dreams Come Home
          </Typography>

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
