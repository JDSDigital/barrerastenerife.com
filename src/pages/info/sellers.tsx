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
  team: any;
};

const SellersPage: React.FC<PageProps<SellersPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  const teamImage = getImage(data.team)!;
  const bannerImage = data.banner;

  return (
    <Layout>
      <SEO title={t("home")} />
      <div className="info">
        <Banner image={bannerImage} type="sellers" />

        <Typography variant="h3" component="p" className="section-title">
          {t("sellers.title")}
        </Typography>

        <InfoContainer>
          <Grid container>
            <Grid item xs={12}>
              <Typography component="p" align="center" className="italic">
                <Trans i18nKey={"sellers.intro"} />
              </Typography>
            </Grid>

            <Grid container spacing={5}>
              <Grid item xs={12} md={5}>
                <GatsbyImage image={teamImage} alt="" />
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography component="p">
                  <Trans i18nKey={"sellers.p1"} />
                </Typography>

                <Typography component="p">
                  <Trans i18nKey={"sellers.p2"} />
                </Typography>

                <Typography component="p">
                  <Trans i18nKey={"sellers.p3"} />
                </Typography>

                <Typography component="p">
                  <Trans i18nKey={"sellers.p4"} />
                </Typography>

                <ol>
                  <li>
                    <Typography component="p">
                      <Trans i18nKey={"sellers.p41"} />
                    </Typography>
                  </li>

                  <li>
                    <Typography component="p">
                      <Trans i18nKey={"sellers.p42"} />
                    </Typography>
                  </li>

                  <li>
                    <Typography component="p">
                      <Trans i18nKey={"sellers.p43"} />
                    </Typography>
                  </li>
                </ol>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography component="p">
                <Trans i18nKey={"sellers.p5"} />
              </Typography>

              <ol>
                <li>
                  <Typography component="p">
                    <Trans i18nKey={"sellers.p51"} />
                  </Typography>
                </li>

                <li>
                  <Typography component="p">
                    <Trans i18nKey={"sellers.p52"} />
                  </Typography>
                </li>

                <li>
                  <Typography component="p">
                    <Trans i18nKey={"sellers.p53"} />
                  </Typography>
                </li>

                <li>
                  <Typography component="p">
                    <Trans i18nKey={"sellers.p54"} />
                  </Typography>
                </li>

                <li>
                  <Typography component="p">
                    <Trans i18nKey={"sellers.p55"} />
                  </Typography>
                </li>
              </ol>

              <Typography component="p">
                <Trans i18nKey={"sellers.p6"} />
              </Typography>

              <Typography component="p">
                <Trans i18nKey={"sellers.p7"} />
              </Typography>

              <Typography component="p">
                <Trans i18nKey={"sellers.p8"} />
              </Typography>

              <Typography component="p" align="center" className="italic">
                <Trans i18nKey={"sellers.conclusion"} />
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
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    team: file(relativePath: { eq: "sellers/4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
