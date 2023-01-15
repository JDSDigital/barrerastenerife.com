import { Container, Grid, Typography } from "@material-ui/core";
import { PageProps, graphql } from "gatsby";

import Img from "gatsby-image";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

type ManagePageProps = {
  service: any; // TODO: Get image type
};

const Manage: React.FC<PageProps<ManagePageProps>> = ({ data }) => {
  const { t } = useTranslation();
  const title = t("header.link.services.manage");

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <div className="text-center">
          <Typography variant="h4" component="p" className="section-title">
            {t("header.link.services.manage")}
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          className="service-page reverse-xs"
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">{t("services.manage.p1")}</Typography>
            <Typography variant="body1">{t("services.manage.p2")}</Typography>
            <ol>
              <li>
                <Typography variant="body1">
                  {t("services.manage.p3")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.manage.p4")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.manage.p5")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.manage.p6")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.manage.p7")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.manage.p8")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.manage.p9")}
                </Typography>
              </li>
            </ol>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img fluid={data.service.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Manage;

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
    service: file(relativePath: { eq: "services/manage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
