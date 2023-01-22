import { ImageDataLike, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";

import { FluidObject } from "gatsby-image";
import { Grid } from "@material-ui/core";
import { ParallaxBanner } from "react-scroll-parallax";

type Props = {
  color?: boolean;
  image?: ImageDataLike;
  children?: any;
  size?: "small" | "medium" | "large" | "xlarge";
};

export const Banner: FC<Props> = ({
  color = true,
  image,
  children,
  size = "large",
}) => {
  const bannerImage = image && getImage(image);

  return (
    <Grid
      container
      className={`banner-root banner-${size} ${
        color ? "banner-primary-color" : ""
      }`}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        {bannerImage ? (
          <ParallaxBanner
            className={`banner-container banner-${size}`}
            layers={[{ image: bannerImage.images.fallback?.src, speed: -20 }]}
          >
            <div
              className={`mobile-padding banner-container banner-${size} ${
                color ? "banner-primary-color" : ""
              }`}
            >
              {children}
            </div>
          </ParallaxBanner>
        ) : (
          <div
            className={`mobile-padding banner-container banner-${size} ${
              color ? "banner-primary-color" : ""
            }`}
          >
            {children}
          </div>
        )}
      </Grid>
    </Grid>
  );
};
