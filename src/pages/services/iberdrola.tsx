import { Container, Grid, Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

type IberdrolaPageProps = {
  service: any; // TODO: Get image type
};

const Iberdrola: React.FC<PageProps<IberdrolaPageProps>> = ({ data }) => {
  const { t } = useTranslation();
  const title = t("header.link.services.iberdrola");

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <div className="text-center">
          <Typography variant="h4" component="p" className="section-title">
            {t("header.link.services.iberdrola")}
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          className="service-page reverse-xs"
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              {t("services.iberdrola.p1")}
            </Typography>
            <Typography variant="body1">
              {t("services.iberdrola.p2")}
            </Typography>
            <Typography variant="body1">
              {t("services.iberdrola.p3")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <GatsbyImage image={getImage(data.service)!} alt="Service image" />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Iberdrola;

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
    service: file(relativePath: { eq: "services/iberdrola.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
