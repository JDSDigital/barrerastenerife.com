import { Button, Container, Grid, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Link, Trans } from "gatsby-plugin-react-i18next";
import { useTranslation } from "hooks/useTranslation";
import React from "react";

export const ExpertRepresentation = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "home/expert.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            breakpoints: [400, 600, 960, 1280, 1920]
          )
        }
      }
    }
  `);

  const image = getImage(data.image)!;

  const { t } = useTranslation();

  return (
    <>
      <Typography
        variant="h3"
        component="p"
        className="section-title"
        data-aos="fade-up"
      >
        {t("expertRepresentation.title")}
      </Typography>

      <Container className="expert-representation">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={5} data-aos="fade-right" data-aos-delay="400">
            <div className="expert-text-container">
              <Typography>
                <Trans i18nKey="expertRepresentation.description" />
              </Typography>
              <div className="button-container">
                <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
                  <Link to="/promotion" className="color-white">
                    {t("header.link.promotion")}
                  </Link>
                </div>
                <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
                  <Link to="/properties/luxury" className="color-white">
                    {t("header.link.luxury")}
                  </Link>
                </div>
                <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
                  <Link to="/properties/buy" className="color-white">
                    {t("header.link.properties")}
                  </Link>
                </div>
                <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
                  <Link to="/properties/investment" className="color-white">
                    {t("header.link.investment")}
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={7} data-aos="fade-left" data-aos-delay="400">
            <div className="expert-image-container">
              <GatsbyImage image={image} alt="" className="expert-image" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
