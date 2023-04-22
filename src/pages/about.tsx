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
  founder: any;
  languages: any;
};

const AboutPage: React.FC<PageProps<AboutPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("header.link.about")} />

      <AboutBanner />

      <Container className="about-section about-section--text-shadow">
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          data-aos="fade-up"
        >
          {t("about.p1")}
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("about.p2")}
        </Typography>
      </Container>

      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          className="about-section"
        >
          <Grid item xs={12} sm={5} data-aos="fade-right">
            <GatsbyImage
              image={getImage(data.founder)!}
              alt="Barreras founder"
              className="img-responsive about-image"
            />
          </Grid>
          <Grid item xs={12} sm={5} data-aos="fade-left">
            <Typography gutterBottom>{t("about.p3")}</Typography>
            <Typography gutterBottom>{t("about.p4")}</Typography>
            <Typography gutterBottom>{t("about.p5")}</Typography>
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
    founder: file(relativePath: { eq: "team/founder.jpg" }) {
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
