import React from "react";
import { PageProps } from "gatsby";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Banner } from "components/Banner";
import { Service } from "components/Service";
import AboutBanner from "components/about/AboutBanner";
import TeamSection from "components/about/TeamSection";
import ServicesSection from "components/about/ServicesSection";

const AboutPage: React.FC<PageProps> = () => {
  const images = useStaticQuery(graphql`
    query {
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
  `);

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

      <Banner image={images.banner.childImageSharp.fluid}>
        <Container>
          <Grid container spacing={2} justify="center" alignItems="stretch">
            <Service
              circle
              to="/about#"
              image={images.time.childImageSharp.fluid}
              title={t("about.time.p1")}
              description={[t("about.time.p2"), t("about.time.p3")]}
            />
            <Service
              circle
              to="/about#"
              image={images.languages.childImageSharp.fluid}
              title={t("about.comunication.p1")}
              description={[
                t("about.comunication.p2"),
                t("about.comunication.p3"),
              ]}
            />
            <Service
              circle
              to="/about#"
              image={images.reviews.childImageSharp.fluid}
              title={t("about.rating.p1")}
              description={[t("about.rating.p2"), t("about.rating.p3")]}
            />
          </Grid>
        </Container>
      </Banner>

      <TeamSection />

      <Container>
        <Grid container justify="space-around" className="about-section">
          <Grid item xs={12} sm={6}>
            <Img
              fluid={images.founder.childImageSharp.fluid}
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
          justify="space-around"
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
              fluid={images.mission.childImageSharp.fluid}
              alt=""
              className="img-responsive about-image"
            />
          </Grid>
        </Grid>

        <Grid container justify="space-around" className="about-section">
          <Grid item xs={12} sm={6}>
            <Img
              fluid={images.service.childImageSharp.fluid}
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
