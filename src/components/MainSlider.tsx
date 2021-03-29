import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Button, Container, Hidden } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "./Select";
import * as constants from "../constants";
import { useI18next } from "gatsby-plugin-react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";

const MainSlider: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg/9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const SearchForm = () => {
    const { t, navigate } = useI18next();

    const [state, setState] = React.useState({
      types: 0,
      contract: 0,
      zones: 0,
    });

    const handleChange = (event: any) => {
      setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSearch = () => {
      navigate("/properties/search", { state });
    };

    return (
      <div className="main-search-form MuiPaper-elevation3">
        <form>
          <Select
            tKey="types"
            label={t("constants.fields.type")}
            items={constants.types}
            value={state.types}
            onChange={handleChange}
          />
          <Select
            tKey="contract"
            label={t("constants.fields.contract")}
            items={constants.contract}
            value={state.contract}
            onChange={handleChange}
          />
          <Select
            tKey="zones"
            label={t("constants.fields.zone")}
            items={constants.zones}
            value={state.zones}
            onChange={handleChange}
          />
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
      layers={[{ image: data.image.childImageSharp.fluid.src, amount: 0.3 }]}
    >
      <Container className="main-slider-container">
        <Hidden xsDown>
          <SearchForm />
        </Hidden>
        <PropertyData />
      </Container>
    </ParallaxBanner>
  );
};

export default MainSlider;
