import { Container, Grid, Typography } from "@material-ui/core";
import { PageProps, graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

const Tyco: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.services.tyco");

  const image = useStaticQuery(graphql`
    query {
      service: file(relativePath: { eq: "services/tyco.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
            <Img fluid={image.service.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Tyco;
