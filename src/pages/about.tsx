import { Container, Grid, Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import AboutBanner from "components/about/AboutBanner";
import { Banner } from "components/Banner";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { Service } from "components/Service";
import ServicesSection from "components/about/ServicesSection";
import TeamSection from "components/about/TeamSection";
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

      <Banner image={data.banner}>
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
              image={data.time}
              title={t("about.time.p1")}
              description={[t("about.time.p2"), t("about.time.p3")]}
            />
            <Service
              circle
              to="/about#"
              image={data.languages}
              title={t("about.comunication.p1")}
              description={[
                t("about.comunication.p2"),
                t("about.comunication.p3"),
              ]}
            />
            <Service
              circle
              to="/about#"
              image={data.reviews}
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
            <GatsbyImage
              image={getImage(data.founder)!}
              alt="Barreras founder"
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
            <GatsbyImage
              image={getImage(data.mission)!}
              alt="Barreras mission"
              className="img-responsive about-image"
            />
          </Grid>
        </Grid>

        <Grid container justifyContent="space-around" className="about-section">
          <Grid item xs={12} sm={6}>
            <GatsbyImage
              image={getImage(data.service)!}
              alt="barreras service"
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
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    time: file(relativePath: { eq: "time.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    languages: file(relativePath: { eq: "languages.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    reviews: file(relativePath: { eq: "reviews.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    mission: file(relativePath: { eq: "mission.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    service: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    banner: file(relativePath: { eq: "properties/property3.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
