import { Button, Container, Hidden, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

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
      <div className="main-search-form MuiPaper-elevation3">
        <form>
          <TownSearch value={town} onChange={handleChange} />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className="color-white"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            {t("search")}
          </Button>
        </form>
      </div>
    );
  };

  const PropertyData = () => {
    return (
      <div className="main-slider-property-data">
        <h2 className="">Where Dreams Come Home</h2>
      </div>
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
      <Container className="main-slider-container">
        {/* @ts-ignore TODO: Fix react children type error */}
        <Hidden xsDown>
          <SearchForm />
        </Hidden>
        <PropertyData />
      </Container>
    </ParallaxBanner>
  );
};

export default MainSlider;
