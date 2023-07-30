import { Typography } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
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
      <div className="about-overlay">
        <div className="about-text" data-aos="fade-in" data-aos-delay="500">
          <Typography variant="h3" component="p">
            {subtitle}
          </Typography>
          <Typography variant="h1" component="h1" className="banner-title">
            {title}
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

export default PropertiesBanner;
