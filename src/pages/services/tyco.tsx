import { Container, Grid, Typography } from "@material-ui/core";
import { PageProps, graphql } from "gatsby";

import Img from "gatsby-image";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

type TycoPageProps = {
  service: any; // TODO: Get image type
};

const Tyco: React.FC<PageProps<TycoPageProps>> = ({ data }) => {
  const { t } = useTranslation();
  const title = t("header.link.services.tyco");

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <div className="text-center">
          <Typography variant="h4" component="p" className="section-title">
            {t("header.link.services.tyco")}
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          justify="space-around"
          className="service-page reverse-xs"
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">{t("services.tyco.p1")}</Typography>
            <Typography variant="body1">{t("services.tyco.p2")}</Typography>
            <Typography variant="body1">{t("services.tyco.p3")}</Typography>
            <Typography variant="body1">{t("services.tyco.p4")}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img fluid={data.service.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Tyco;

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
    service: file(relativePath: { eq: "services/tyco.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
