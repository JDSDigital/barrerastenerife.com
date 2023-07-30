import { Container, Grid, Typography, styled } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import { Banner } from "components/info/Banner";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";
import { Trans } from "gatsby-plugin-react-i18next";

type SellersPageProps = {
  banner: any; // TODO: Get image type
  home: any;
};

const SellersPage: React.FC<PageProps<SellersPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  const bannerImage = getImage(data.banner)!;
  const homeImage = getImage(data.home)!;

  return (
    <Layout>
      <SEO title={t("home")} />
      <div className="info">
        <Banner image={bannerImage} type="sellers" />

        <InfoContainer>
          <Grid container>
            <Grid item xs={12} data-aos="fade-up">
              <div className="text-center">
                <Typography
                  variant="h3"
                  component="p"
                  className="section-title"
                >
                  {t("sellers.title")}
                </Typography>
              </div>
            </Grid>
            {/* <Grid container spacing={10}>
              <Grid item xs={12} md={6} data-aos="fade-right">
                <GatsbyImage image={homeImage} alt="" />
              </Grid>
            </Grid> */}

            <Grid item xs={12}>
              <Typography component="p">
                <Trans i18nKey={"sellers.description"} />
              </Typography>
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

export default SellersPage;

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
    banner: file(relativePath: { eq: "sellers/1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    home: file(relativePath: { eq: "sellers/2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
