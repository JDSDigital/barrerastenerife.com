import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Hidden, Typography, styled } from "@material-ui/core";

import React from "react";
import { useTranslation } from "hooks/useTranslation";

type BannerType = {
  type: "buyers" | "sellers";
  image: IGatsbyImageData;
};

export const Banner: React.FC<BannerType> = ({ type, image }) => {
  const { t } = useTranslation();

  return (
    <RootContainer className="info-banner-container">
      <GatsbyImage image={image} alt="" objectFit="cover" />
      <Overlay>
        <Typography
          component="p"
          variant="h2"
          data-aos="fade-right"
          className="info-banner-title"
        >
          {t(`info.${type}.title`)}
        </Typography>
        <Typography
          component="p"
          variant="h3"
          data-aos="fade-left"
          className="info-banner-subtitle text-lato"
        >
          {t(`info.${type}.subtitle1`)}
        </Typography>
        <Typography
          component="p"
          variant="h5"
          className="mb-5 info-banner-subtitle2 text-lato"
          data-aos="fade-up"
        >
          {t(`info.${type}.subtitle2`)}
        </Typography>
        {/* @ts-ignore TODO: Fix react children type error */}
        <Hidden smDown>
          <Typography
            component="p"
            variant="body1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t(`info.${type}.description1`)}
          </Typography>
          <Typography
            component="p"
            variant="body1"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {t(`info.${type}.description2`)}
          </Typography>
        </Hidden>
      </Overlay>
    </RootContainer>
  );
};

const RootContainer = styled("div")({
  position: "relative",
});

const Overlay = styled("div")({
  "position": "absolute",
  "backgroundColor": "rgba(0, 0, 0, 0.4)",
  "width": "100%",
  "height": "100%",
  "top": 0,
  "left": 0,
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "center",
  "color": "white",
  "textAlign": "center",
  "padding": "70px 16px 0",

  "& p": {
    textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
  },
});
