import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import { FluidObject } from "gatsby-image";
import { ParallaxBanner } from "react-scroll-parallax";

type Props = {
  color?: boolean;
  image?: FluidObject;
  children?: any;
  size?: "small" | "medium" | "large" | "xlarge";
};

export const Banner: FC<Props> = ({
  color = true,
  image,
  children,
  size = "large",
}) => {
  return (
    <Grid
      container
      className={`banner-root banner-${size} ${
        color ? "banner-primary-color" : ""
      }`}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        {image ? (
          <ParallaxBanner
            className={`banner-container banner-${size}`}
            layers={[{ image: image.src, amount: 0.4 }]}
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
