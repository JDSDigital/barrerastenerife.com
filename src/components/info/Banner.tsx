import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Typography, styled } from "@material-ui/core";

import React from "react";
import { useTranslation } from "hooks/useTranslation";

type BannerType = {
  type: "buyers" | "sellers";
  image: IGatsbyImageData;
};

export const Banner: React.FC<BannerType> = ({ type, image }) => {
  const { t } = useTranslation();

  return (
    <RootContainer>
      <GatsbyImage
        image={image}
        alt=""
        objectFit="cover"
        className="info-banner-container"
      />
      <Overlay>
        <Typography component="p" variant="h2">
          {t(`info.${type}.title`)}
        </Typography>
        <Typography component="p" variant="h3">
          {t(`info.${type}.subtitle1`)}
        </Typography>
        <Typography component="p" variant="h5" className="mb-5">
          {t(`info.${type}.subtitle2`)}
        </Typography>
        <Typography component="p" variant="body1">
          {t(`info.${type}.description1`)}
        </Typography>
        <Typography component="p" variant="body1">
          {t(`info.${type}.description2`)}
        </Typography>
      </Overlay>
    </RootContainer>
  );
};

const RootContainer = styled("div")({
  position: "relative",
});

const Overlay = styled("div")({
  "position": "absolute",
  // "backgroundColor": "rgba(29, 177, 184, 0.4)",
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

  "& p": {
    textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
  },
});
