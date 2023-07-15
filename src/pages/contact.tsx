import { Container, Grid, Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import Block from "components/contact/Block";
import ContactBanner from "components/contact/ContactBanner";
import EmailIcon from "@material-ui/icons/Email";
import Form from "components/contact/Form";
import Img from "gatsby-image";
import Layout from "components/layout";
import MapView from "components/maps/MapView";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

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

      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          className="about-section"
        >
          <Grid item xs={12} sm={5} data-aos="fade-right">
            <Typography
              variant="h4"
              color="primary"
              className="about-section--text-shadow"
              gutterBottom
            >
              Inmobiliaria Barreras
            </Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              luctus orci at nunc lacinia, condimentum molestie lectus
              hendrerit. Praesent fringilla massa a semper aliquam.
            </Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              luctus orci at nunc lacinia, condimentum molestie lectus
              hendrerit. Praesent fringilla massa a semper aliquam.
            </Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              luctus orci at nunc lacinia, condimentum molestie lectus
              hendrerit. Praesent fringilla massa a semper aliquam.
            </Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              luctus orci at nunc lacinia, condimentum molestie lectus
              hendrerit. Praesent fringilla massa a semper aliquam.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} data-aos="fade-left">
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
    team: file(relativePath: { eq: "contact/2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    ocean: file(relativePath: { eq: "contact/3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
