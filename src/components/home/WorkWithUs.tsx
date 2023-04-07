import { Container, Typography, styled } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby-plugin-react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";
import React from "react";
import { getImage } from "gatsby-plugin-image";
import { useTranslation } from "hooks/useTranslation";

export const WorkWithUs = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "random/work-with-us.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const { t } = useTranslation();

  const image = getImage(data.image)?.images.fallback?.src;

  return (
    <ParallaxContainer
      className="work-with-us"
      layers={[{ image, speed: -20 }]}
      data-aos="fade-up"
    >
      <RootContainer>
        <Content>
          <Typography component="p" variant="h3">
            {t("workWithUs.title")}
          </Typography>

          <ItemContainer className="item-container">
            <Item>
              <Typography component="p" variant="h3">
                {t("workWithUs.experience.title")}
              </Typography>
              <Typography component="p" variant="body1">
                {t("workWithUs.experience.subtitle")}
              </Typography>
            </Item>
            <Item>
              <Typography component="p" variant="h3">
                {t("workWithUs.knowledge.title")}
              </Typography>
              <Typography component="p" variant="body1">
                {t("workWithUs.knowledge.subtitle")}
              </Typography>
            </Item>
            <Item>
              <Typography component="p" variant="h3">
                {t("workWithUs.guidance.title")}
              </Typography>
              <Typography component="p" variant="body1">
                {t("workWithUs.guidance.subtitle")}
              </Typography>
            </Item>
          </ItemContainer>

          <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge mt-5">
            <Link to="/contact" className="color-white">
              {t("workWithUs.button")}
            </Link>
          </div>
        </Content>
      </RootContainer>
    </ParallaxContainer>
  );
};

const ParallaxContainer = styled(ParallaxBanner)({
  minHeight: "100vh",
});

const RootContainer = styled(ParallaxBanner)({
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "rgba(29, 177, 184, 0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  padding: "48px 24px",
  textAlign: "center",
});

const Content = styled(Container)({
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "center",
  "gap": "48px",

  "& p": {
    textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
  },
});

const ItemContainer = styled("div")({
  display: "flex",
});

const Item = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "24px",
  padding: "48px 24px",
});
