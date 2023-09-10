import { graphql, useStaticQuery } from "gatsby";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ParallaxBanner } from "react-scroll-parallax";
import React from "react";
import { Typography } from "@material-ui/core";
import { getSrc } from "gatsby-plugin-image";
import { useTranslation } from "hooks/useTranslation";

const ContactBanner = () => {
  const { t } = useTranslation();

  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "contact/1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <ParallaxBanner
      className="about-container"
      layers={[
        {
          image: getSrc(image.banner),
          speed: -20,
        },
      ]}
    >
      <div className="about-overlay">
        <div className="about-text" data-aos="fade-in" data-aos-delay="500">
          <Typography variant="h1" component="h1" className="banner-title">
            {t("header.link.contact")}
          </Typography>
          <div className="arrows-container">
            <div className="arrows-box">
              <ArrowRightAltIcon className="arrow color-white" />
              <ArrowRightAltIcon className="arrow color-white" />
            </div>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default ContactBanner;
