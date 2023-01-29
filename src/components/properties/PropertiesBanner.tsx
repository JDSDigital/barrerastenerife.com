import { Container, Typography } from "@material-ui/core";
import { IGatsbyImageData, getSrc } from "gatsby-plugin-image";
import React, { FC } from "react";

import { ParallaxBanner } from "react-scroll-parallax";

type Props = {
  image: IGatsbyImageData;
  title?: string;
  subtitle?: string;
};

const PropertiesBanner: FC<Props> = ({ image, title, subtitle }) => {
  const bannerImage = getSrc(image);

  return (
    <ParallaxBanner
      className="about-container"
      layers={[{ image: bannerImage, speed: -20 }]}
    >
      <div className="about-overlay" />
      <div className="about-text">
        <Container maxWidth="md">
          {title && (
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="h4" gutterBottom>
              {subtitle}
            </Typography>
          )}
        </Container>
      </div>
    </ParallaxBanner>
  );
};

export default PropertiesBanner;
