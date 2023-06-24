import { Container, Grid, Typography, styled } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import { Banner } from "components/info/Banner";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

type BuyersPageProps = {
  banner: any; // TODO: Get image type
  home: any;
};

const BuyersPage: React.FC<PageProps<BuyersPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  const bannerImage = getImage(data.banner)!;
  const homeImage = getImage(data.home)!;

  return (
    <Layout>
      <SEO title={t("home")} />
      <div className="info">
        <Banner image={bannerImage} type="buyers" />

        <InfoContainer>
          <Grid container spacing={10}>
            <Grid item xs={12} data-aos="fade-up">
              <div className="text-center">
                <Typography
                  variant="h3"
                  component="p"
                  className="section-title"
                >
                  {t("buyers.title")}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <GatsbyImage image={homeImage} alt="" />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Typography component="p" className="mb-5">
                {t("buyers.description1")}
              </Typography>
              <Typography component="p">{t("buyers.description2")}</Typography>
            </Grid>

            <Grid item xs={12} data-aos="fade-up">
              <ol>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process1")}
                  </Typography>
                </li>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process2")}
                  </Typography>
                </li>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process3")}
                  </Typography>
                </li>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process4")}
                  </Typography>
                </li>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process5")}
                  </Typography>
                </li>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process6")}
                  </Typography>
                </li>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process7")}
                  </Typography>
                </li>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process8")}
                  </Typography>
                </li>
                <li>
                  <Typography component="p" className="mb-5">
                    {t("buyers.process9")}
                  </Typography>
                </li>
              </ol>
            </Grid>
          </Grid>
        </InfoContainer>
      </div>
    </Layout>
  );
};

const InfoContainer = styled(Container)({
  marginTop: "56px",
  marginBottom: "56px",
});

export default BuyersPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          data
          language
        }
      }
    }
    banner: file(relativePath: { eq: "random/buyers.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    home: file(relativePath: { eq: "random/home_large.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
