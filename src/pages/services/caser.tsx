import { Container, Grid, Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

type CaserPageProps = {
  service: any; // TODO: Get image type
};

const Caser: React.FC<PageProps<CaserPageProps>> = ({ data }) => {
  const { t } = useTranslation();
  const title = t("header.link.services.caser");

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <div className="text-center">
          <Typography variant="h4" component="p" className="section-title">
            {t("header.link.services.caser")}
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          className="service-page reverse-xs"
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">{t("services.caser.p1")}</Typography>
            <Typography variant="body1">{t("services.caser.p2")}</Typography>
            <Typography variant="body1">{t("services.caser.p3")}</Typography>
            <Typography variant="body1">{t("services.caser.p4")}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <GatsbyImage image={getImage(data.service)!} alt="Service image" />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Caser;

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
    service: file(relativePath: { eq: "services/caser.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
