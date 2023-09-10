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
};

const BuyersPage: React.FC<PageProps<BuyersPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  const bannerImage = getImage(data.banner)!;

  return (
    <Layout>
      <SEO title={t("home")} />
      <div className="info">
        <Banner image={bannerImage} type="buyers" />

        <Typography variant="h3" component="p" className="section-title">
          {t("buyers.title")}
        </Typography>

        <InfoContainer>
          <Grid container>
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
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
