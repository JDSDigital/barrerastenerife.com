import { Container, Grid, Typography, styled } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import { Banner } from "components/info/Banner";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";
import { Trans } from "gatsby-plugin-react-i18next";

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
          <Grid container>
            <Grid item xs={12}>
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
            {/* <Grid container spacing={10}>
              <Grid item xs={12} md={6} data-aos="fade-up">
                <GatsbyImage image={homeImage} alt="" />
              </Grid>
            </Grid> */}

            <Grid item xs={12}>
              <Typography component="p">
                <Trans i18nKey={"buyers.description"} />
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
    banner: file(relativePath: { eq: "buyers/1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    home: file(relativePath: { eq: "buyers/2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
