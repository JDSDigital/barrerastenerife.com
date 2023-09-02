import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Grid, Typography, styled } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

export const ThinkingOfBuying = () => {
  const data = useStaticQuery(graphql`
    query {
      buying: file(relativePath: { eq: "buyers/4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      selling: file(relativePath: { eq: "sellers/4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const { t } = useTranslation();

  const buyingImage = getImage(data.buying)!;
  const sellingImage = getImage(data.selling)!;

  return (
    <Grid container className="thinking-of-buying-container">
      <Grid item xs={12} md={6} data-aos="fade-right">
        <Grid className="thinking-image-container">
          <GatsbyImage
            image={buyingImage}
            alt="Thinking of buying image"
            className="crop-top"
          />
          <div className="thinking-image-overlay">
            <div>
              <Typography
                component="p"
                variant="h5"
                className="color-white"
                align="center"
              >
                {t("thinkingOfBuying.buying.title")}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                className="color-white"
                align="center"
              >
                {t("thinkingOfBuying.buying.subtitle")}
              </Typography>
            </div>
            <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
              <Link to="/info/buyers" className="color-white">
                {t("thinkingOfBuying.details")}
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} data-aos="fade-left">
        <Grid className="thinking-image-container">
          <GatsbyImage
            image={sellingImage}
            alt="Thinking of selling image"
            className="crop-top"
          />
          <div className="thinking-image-overlay">
            <div>
              <Typography
                component="p"
                variant="h5"
                className="color-white"
                align="center"
              >
                {t("thinkingOfBuying.selling.title")}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                className="color-white"
                align="center"
              >
                {t("thinkingOfBuying.selling.subtitle")}
              </Typography>
            </div>
            <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
              <Link to="/info/sellers" className="color-white">
                {t("thinkingOfBuying.details")}
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
