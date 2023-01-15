import { Container, Grid, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { promotions } from "../../constants";

export const PromotionContainer = () => {
  const images = useStaticQuery(graphql`
    query {
      amarilla: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sanblas: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tejita: file(relativePath: { eq: "promotions/tejita.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medano: file(relativePath: { eq: "promotions/medano.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      abrigos: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adeje: file(relativePath: { eq: "promotions/adeje.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      abama: file(relativePath: { eq: "promotions/abama.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sanjuan: file(relativePath: { eq: "promotions/sanjuan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      isora: file(relativePath: { eq: "promotions/isora.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saneugenio: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      puerto: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
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
                <Img
                  fluid={images[promotion.type].childImageSharp.fluid}
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
