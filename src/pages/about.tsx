import { Container, Grid, Typography } from "@material-ui/core";

import AboutBanner from "components/about/AboutBanner";
import { Banner } from "components/Banner";
import Img from "gatsby-image";
import Layout from "components/layout";
import { PageProps } from "gatsby";
import React from "react";
import SEO from "components/SEO";
import { Service } from "components/Service";
import ServicesSection from "components/about/ServicesSection";
import TeamSection from "components/about/TeamSection";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

//TODO: Get image type
type AboutPageProps = {
  founder: any;
  time: any;
  languages: any;
  reviews: any;
  mission: any;
  service: any;
  banner: any;
};

const AboutPage: React.FC<PageProps<AboutPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("header.link.about")} />
      <AboutBanner />

      <Container className="text-center about-section--small">
        <Typography variant="h4" component="p" className="section-title">
          {t("about.title")}
        </Typography>
        <Typography gutterBottom>{t("about.p1")}</Typography>
        <Typography gutterBottom>{t("about.p2")}</Typography>
      </Container>

      <Banner image={data.banner.childImageSharp.fluid}>
        <Container>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="stretch"
          >
            <Service
              circle
              to="/about#"
              image={data.time.childImageSharp.fluid}
              title={t("about.time.p1")}
              description={[t("about.time.p2"), t("about.time.p3")]}
            />
            <Service
              circle
              to="/about#"
              image={data.languages.childImageSharp.fluid}
              title={t("about.comunication.p1")}
              description={[
                t("about.comunication.p2"),
                t("about.comunication.p3"),
              ]}
            />
            <Service
              circle
              to="/about#"
              image={data.reviews.childImageSharp.fluid}
              title={t("about.rating.p1")}
              description={[t("about.rating.p2"), t("about.rating.p3")]}
            />
          </Grid>
        </Container>
      </Banner>

      <TeamSection />

      <Container>
        <Grid container justifyContent="space-around" className="about-section">
          <Grid item xs={12} sm={6}>
            <Img
              fluid={data.founder.childImageSharp.fluid}
              alt=""
              className="img-responsive about-image"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              component="p"
              className="section-title-secondary left"
            >
              {t("header.link.about")}
            </Typography>
            <Typography gutterBottom>{t("about.p3")}</Typography>
            <Typography gutterBottom>{t("about.p4")}</Typography>
            <Typography gutterBottom>{t("about.p5")}</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="space-around"
          className="text-right reverse-xs about-section"
        >
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              component="p"
              className="section-title-secondary right"
            >
              {t("about.services.mission")}
            </Typography>
            <Typography gutterBottom>{t("about.services.p4")}</Typography>
            <Typography gutterBottom>{t("about.services.p5")}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Img
              fluid={data.mission.childImageSharp.fluid}
              alt=""
              className="img-responsive about-image"
            />
          </Grid>
        </Grid>

        <Grid container justifyContent="space-around" className="about-section">
          <Grid item xs={12} sm={6}>
            <Img
              fluid={data.service.childImageSharp.fluid}
              alt=""
              className="img-responsive about-image"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              id="services"
              variant="h4"
              component="p"
              className="section-title-secondary left"
            >
              {t("about.services.title")}
            </Typography>
            <Typography gutterBottom>{t("about.services.p1")}</Typography>
            <Typography gutterBottom>{t("about.services.p2")}</Typography>
            <Typography gutterBottom>{t("about.services.p3")}</Typography>
          </Grid>
        </Grid>
      </Container>

      <ServicesSection />
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
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    time: file(relativePath: { eq: "time.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    languages: file(relativePath: { eq: "languages.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reviews: file(relativePath: { eq: "reviews.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mission: file(relativePath: { eq: "mission.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    service: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    banner: file(relativePath: { eq: "properties/property3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
