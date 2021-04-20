import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import Layout from "components/layout";
import SEO from "components/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Container, Grid, Typography } from "@material-ui/core";
import Img from "gatsby-image";

const Iberdrola: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.services.iberdrola");

  const image = useStaticQuery(graphql`
    query {
      service: file(relativePath: { eq: "services/iberdrola.jpg" }) {
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
            {t("header.link.services.iberdrola")}
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          justify="space-around"
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
            <Img fluid={image.service.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Iberdrola;
