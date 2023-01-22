import { Container, Grid, Typography } from "@material-ui/core";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby-plugin-react-i18next";
import { useTranslation } from "hooks/useTranslation";

type Props = {
  image: ImageDataLike;
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

  const propertyImage = getImage(image);

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Link to={to} className="home-properties-container">
        {propertyImage && (
          <GatsbyImage
            image={propertyImage}
            alt={title}
            className="crop-center crop-folder"
          />
        )}
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
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      rent: file(relativePath: { eq: "services/rent.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      invest: file(relativePath: { eq: "services/invest.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      local: file(relativePath: { eq: "services/local.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      promotion: file(relativePath: { eq: "properties/promotion.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      services: file(relativePath: { eq: "properties/services.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Container className="mt-10 mb-10">
      <Grid container spacing={5} justifyContent="center">
        <HomePropertiesContainer
          to="/properties/buy"
          image={images.buy}
          title={t("folders.buy.title")}
          description={t("folders.buy.description")}
        />
        <HomePropertiesContainer
          to="/properties/rent"
          image={images.rent}
          title={t("folders.rent.title")}
          description={t("folders.rent.description")}
        />
        <HomePropertiesContainer
          to="/properties/invest"
          image={images.invest}
          title={t("folders.invest.title")}
          description={t("folders.invest.description")}
        />
        <HomePropertiesContainer
          to="/properties/local"
          image={images.local}
          title={t("folders.local.title")}
          description={t("folders.local.description")}
        />
        <HomePropertiesContainer
          to="/promotion"
          image={images.promotion}
          title={t("folders.promotion.title")}
          description={t("folders.promotion.description")}
        />
        <HomePropertiesContainer
          to="/about#services"
          image={images.services}
          title={t("folders.services.title")}
          description={t("folders.services.description")}
        />
      </Grid>
    </Container>
  );
};
