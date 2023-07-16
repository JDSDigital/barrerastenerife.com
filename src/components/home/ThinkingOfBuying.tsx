import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Grid, Typography, styled } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

export const ThinkingOfBuying = () => {
  const data = useStaticQuery(graphql`
    query {
      buying: file(relativePath: { eq: "home/4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      selling: file(relativePath: { eq: "home/5.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const { t } = useTranslation();

  const buyingImage = getImage(data.buying)!;
  const sellingImage = getImage(data.selling)!;

  return (
    <RootContainer container>
      <Grid item xs={12} md={6} data-aos="fade-right">
        <ImageContainer>
          <GatsbyImage
            image={buyingImage}
            alt="Thinking of buying image"
            className="crop-center"
          />
          <Overlay>
            <div>
              <Typography
                component="p"
                variant="h4"
                className="color-white"
                align="center"
              >
                {t("thinkingOfBuying.buying.title")}
              </Typography>
              <Typography
                component="p"
                variant="h4"
                className="color-white"
                align="center"
              >
                {t("thinkingOfBuying.buying.subtitle")}
              </Typography>
            </div>
            <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
              <Link to="/info/buyers" className="color-white">
                {t("thinkingOfBuying.details")}
              </Link>
            </div>
          </Overlay>
        </ImageContainer>
      </Grid>
      <Grid item xs={12} md={6} data-aos="fade-left">
        <ImageContainer>
          <GatsbyImage
            image={sellingImage}
            alt="Thinking of selling image"
            className="crop-center"
          />
          <Overlay>
            <div>
              <Typography
                component="p"
                variant="h4"
                className="color-white"
                align="center"
              >
                {t("thinkingOfBuying.selling.title")}
              </Typography>
              <Typography
                component="p"
                variant="h4"
                className="color-white"
                align="center"
              >
                {t("thinkingOfBuying.selling.subtitle")}
              </Typography>
            </div>
            <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
              <Link to="/info/sellers" className="color-white">
                {t("thinkingOfBuying.details")}
              </Link>
            </div>
          </Overlay>
        </ImageContainer>
      </Grid>
    </RootContainer>
  );
};

const RootContainer = styled(Grid)({
  marginTop: "48px",
});

const ImageContainer = styled(Grid)({
  position: "relative",
  height: "calc(100vh - 90px)",
});

const Overlay = styled("div")({
  "position": "absolute",
  "backgroundColor": "rgba(29, 177, 184, 0.4)",
  "width": "100%",
  "height": "100%",
  "top": 0,
  "left": 0,
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "center",
  "gap": "56px",
  "transition": "all 0.3s ease",

  "& p": {
    textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
  },

  "& p:not(:first-child)": {
    fontWeight: "bold",
  },

  "&:hover": {
    backgroundColor: "rgba(29, 177, 184, 0.7)",
    gap: "24px",
  },
});
