import { Container, Grid, Typography } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby-plugin-react-i18next";
import { useTranslation } from "hooks/useTranslation";

type Props = {
  image: FluidObject;
  title: string;
  description: string;
  to: string;
};

const HomePropertiesContainer: FC<Props> = ({
  image,
  title,
  description,
  to,
}) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Link to={to} className="home-properties-container">
        <Img fluid={image} className="crop-center crop-folder" />
        <div className="home-properties-container--title">
          <Typography variant="h5" align="center">
            {title}
          </Typography>
        </div>
        <div className="home-properties-container--description">
          <div className="home-properties-container--description-text">
            <Typography>{description}</Typography>
          </div>
          <div className="home-properties-container--link">
            <Typography align="right">{t("folders.more")}</Typography>
          </div>
        </div>
        <div className="home-properties-container--square"></div>
      </Link>
    </Grid>
  );
};

export const PropertiesSection = () => {
  const { t } = useTranslation();
  const images = useStaticQuery(graphql`
    query {
      buy: file(relativePath: { eq: "services/buy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rent: file(relativePath: { eq: "services/rent.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      invest: file(relativePath: { eq: "services/invest.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      local: file(relativePath: { eq: "services/local.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      promotion: file(relativePath: { eq: "properties/promotion.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      services: file(relativePath: { eq: "properties/services.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container className="mt-10 mb-10">
      <Grid container spacing={5} justifyContent="center">
        <HomePropertiesContainer
          to="/properties/buy"
          image={images.buy.childImageSharp.fluid}
          title={t("folders.buy.title")}
          description={t("folders.buy.description")}
        />
        <HomePropertiesContainer
          to="/properties/rent"
          image={images.rent.childImageSharp.fluid}
          title={t("folders.rent.title")}
          description={t("folders.rent.description")}
        />
        <HomePropertiesContainer
          to="/properties/invest"
          image={images.invest.childImageSharp.fluid}
          title={t("folders.invest.title")}
          description={t("folders.invest.description")}
        />
        <HomePropertiesContainer
          to="/properties/local"
          image={images.local.childImageSharp.fluid}
          title={t("folders.local.title")}
          description={t("folders.local.description")}
        />
        <HomePropertiesContainer
          to="/promotion"
          image={images.promotion.childImageSharp.fluid}
          title={t("folders.promotion.title")}
          description={t("folders.promotion.description")}
        />
        <HomePropertiesContainer
          to="/about#services"
          image={images.services.childImageSharp.fluid}
          title={t("folders.services.title")}
          description={t("folders.services.description")}
        />
      </Grid>
    </Container>
  );
};
