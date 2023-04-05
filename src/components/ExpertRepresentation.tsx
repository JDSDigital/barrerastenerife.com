import { Button, Container, Grid, Typography } from "@material-ui/core";
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
        <Typography variant="h3" component="p" className="section-title">
          Expert Representation
        </Typography>
      </div>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
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
            <Link to="promotion">
              <Button
                variant="contained"
                color="primary"
                className="color-white"
                size="large"
              >
                <Typography>{t("header.link.promotion")}</Typography>
              </Button>
            </Link>
            <Link to="/properties/luxury">
              <Button
                variant="contained"
                color="primary"
                className="color-white"
                size="large"
              >
                <Typography>{t("header.link.luxury")}</Typography>
              </Button>
            </Link>
            <Link to="/properties/buy">
              <Button
                variant="contained"
                color="primary"
                className="color-white"
                size="large"
              >
                <Typography>{t("search")}</Typography>
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ height: "600px" }}>
            <GatsbyImage image={image} alt="" className="crop-center" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
