import { Container, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { ParallaxBanner } from "react-scroll-parallax";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

const AboutBanner = () => {
  const { t } = useTranslation();

  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bg/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ParallaxBanner
      className="about-container"
      layers={[
        {
          image: image.banner.childImageSharp.fluid.src,
          speed: -20,
        },
      ]}
    >
      <div className="about-overlay" />
      <div className="about-text">
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            {t("about.banner.p1")}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {t("about.banner.p2")}
          </Typography>
        </Container>
      </div>
    </ParallaxBanner>
  );
};

export default AboutBanner;
