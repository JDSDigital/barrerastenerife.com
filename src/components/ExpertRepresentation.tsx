import { Button, Container, Grid, Typography, styled } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

export const ExpertRepresentation = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "random/living-room.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.image)!;

  const { t } = useTranslation();

  return (
    <Container className="expert-representation">
      <div className="text-center">
        <Typography
          variant="h3"
          component="p"
          className="section-title"
          data-aos="fade-up"
        >
          {t("expertRepresentation.title")}
        </Typography>
      </div>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} data-aos="fade-right" data-aos-delay="400">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            luctus orci at nunc lacinia, condimentum molestie lectus hendrerit.
            Praesent fringilla massa a semper aliquam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Fusce sit amet elementum nulla.
            Nunc sagittis lacinia tempus. Praesent mollis non quam in rhoncus.
            In sodales lacus mattis luctus semper. Sed vehicula nibh at quam
            porta elementum. Aliquam sagittis tempor metus at consequat.
            Curabitur quis sem quis velit mattis eleifend eget eget enim.
            Praesent orci ex, congue malesuada porttitor ac, viverra eget velit.
            Vivamus at quam nec nulla hendrerit malesuada. Pellentesque bibendum
            tincidunt orci, id tincidunt elit mollis quis. Sed iaculis lacinia
            consectetur. Nulla feugiat tincidunt convallis. Integer at porta
            est, in blandit enim.
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
                {t("search")}
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-left" data-aos-delay="400">
          <ImageContainer>
            <GatsbyImage image={image} alt="" className="crop-center" />
          </ImageContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

const ImageContainer = styled("div")({
  height: "600px",
});
