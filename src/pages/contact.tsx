import { Container, Grid, Typography } from "@material-ui/core";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import SEO from "components/SEO";
import Block from "components/contact/Block";
import ContactBanner from "components/contact/ContactBanner";
import Form from "components/contact/Form";
import Layout from "components/layout";
import MapView from "components/maps/MapView";
import { Trans } from "gatsby-plugin-react-i18next";
import { useTranslation } from "hooks/useTranslation";
import React from "react";

type ContactPageProps = {
  team: any; // TODO: Get image type
  ocean: any;
};

const ContactPage: React.FC<PageProps<ContactPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  const teamImage = getImage(data.team);
  const oceanImage = getImage(data.ocean);

  return (
    <Layout>
      <SEO title={t("header.link.contact")} />

      <ContactBanner />

      {/* <Container className="text-center">
        <Typography
          variant="h4"
          className="text-blastyes"
          align="center"
          gutterBottom
        >
          {t("welcome")}
        </Typography>
      </Container> */}

      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          className="about-section"
        >
          <Grid item xs={12} sm={4} data-aos="fade-right">
            <Typography gutterBottom>
              <Trans i18nKey="contact.description.body" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} data-aos="fade-left">
            {teamImage && (
              <GatsbyImage
                image={teamImage}
                alt="Team image"
                className="img-responsive crop-center"
              />
            )}
          </Grid>
        </Grid>
      </Container>

      <Grid container className="contact-container" data-aos="fade-in">
        <Grid item xs={12} sm={5} className="contact-section">
          {oceanImage && (
            <GatsbyImage
              image={oceanImage}
              alt="Oceag image"
              className="img-responsive crop-center"
            />
          )}
          <div className="contact-data">
            <Grid container spacing={2}>
              <Block
                icon={<RoomIcon fontSize="large" />}
                title={t("contact.address")}
                text="Av. Los Abrigos, 32. Los Abrigos. Santa Cruz de Tenerife."
                data-aos="fade-right"
                data-aos-delay="400"
              />
              <Block
                icon={<PhoneIcon fontSize="large" />}
                title={t("contact.phone")}
                text="+34 822 29 81 28 / +34 638 41 89 17"
                data-aos="fade-right"
                data-aos-delay="600"
              />
              <Block
                icon={<EmailIcon fontSize="large" />}
                title={t("contact.email")}
                text="info@barrerastenerife.com"
                data-aos="fade-right"
                data-aos-delay="800"
              />
            </Grid>
          </div>
        </Grid>
        <Grid container item xs={12} sm={7}>
          <Form />
        </Grid>
      </Grid>
      <MapView />
    </Layout>
  );
};

export default ContactPage;

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
    team: file(relativePath: { eq: "home/6.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    ocean: file(relativePath: { eq: "contact/3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
