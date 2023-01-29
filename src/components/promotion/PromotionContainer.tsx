import { Container, Grid, Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { promotions } from "../../constants";

export const PromotionContainer = () => {
  const images = useStaticQuery(graphql`
    query {
      amarilla: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      sanblas: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      tejita: file(relativePath: { eq: "promotions/tejita.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      medano: file(relativePath: { eq: "promotions/medano.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      abrigos: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      adeje: file(relativePath: { eq: "promotions/adeje.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      abama: file(relativePath: { eq: "promotions/abama.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      sanjuan: file(relativePath: { eq: "promotions/sanjuan.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      isora: file(relativePath: { eq: "promotions/isora.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      saneugenio: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      puerto: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center">
        {promotions.map(promotion => (
          <Grid key={promotion.type} item xs={12} sm={6} md={4}>
            <Link to={`/promotion/list/?tag=${promotion.type}`}>
              <div className="promotion-container">
                <div className="promotion-overlay" />
                <GatsbyImage
                  image={getImage(images[promotion.type])!}
                  alt={promotion.name}
                  className="promotion-image crop-center"
                />
                <Typography
                  className="promotion-title"
                  variant="h5"
                  align="center"
                >
                  {promotion.name}
                </Typography>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
