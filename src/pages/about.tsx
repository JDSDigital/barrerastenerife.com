import { Container, Grid, Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import AboutBanner from "components/about/AboutBanner";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import TeamSection from "components/about/TeamSection";
import { useTranslation } from "hooks/useTranslation";

//TODO: Get image type
type AboutPageProps = {
  team: any;
  languages: any;
};

const AboutPage: React.FC<PageProps<AboutPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("header.link.about")} />

      <AboutBanner />

      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          className="about-section"
        >
          <Grid item xs={12} sm={5} data-aos="fade-right">
            <GatsbyImage
              image={getImage(data.team)!}
              alt="Barreras founder"
              className="img-responsive about-image"
            />
          </Grid>
          <Grid item xs={12} sm={5} data-aos="fade-left">
            <Typography gutterBottom>{t("about.description")}</Typography>
          </Grid>
        </Grid>
      </Container>

      <TeamSection />
    </Layout>
  );
};

export default AboutPage;

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
    team: file(relativePath: { eq: "about/team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    languages: file(relativePath: { eq: "languages.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
