import { Container, Grid, Typography } from "@material-ui/core";
import { PageProps, graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

const Assistance: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.services.assistance");

  const image = useStaticQuery(graphql`
    query {
      service: file(relativePath: { eq: "services/assistance.jpg" }) {
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
            {t("header.link.services.assistance")}
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
              {t("services.assistance.p1")}
            </Typography>
            <Typography variant="body1">
              {t("services.assistance.p2")}
            </Typography>
            <Typography variant="body1">
              {t("services.assistance.p3")}
            </Typography>
            <ol>
              <li>
                <Typography variant="body1">
                  {t("services.assistance.p4")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.assistance.p5")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.assistance.p6")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.assistance.p7")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.assistance.p8")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.assistance.p9")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.assistance.p10")}
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  {t("services.assistance.p11")}
                </Typography>
              </li>
            </ol>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Img fluid={image.service.childImageSharp.fluid} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Assistance;
