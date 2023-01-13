import { PageProps, graphql } from "gatsby";

import Block from "components/contact/Block";
import EmailIcon from "@material-ui/icons/Email";
import Form from "components/contact/Form";
import { Grid } from "@material-ui/core";
import Img from "gatsby-image";
import Layout from "components/layout";
import MapView from "components/maps/MapView";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

type ContactPageProps = {
  placeholderImage: any; // TODO: Get image type
};

const ContactPage: React.FC<PageProps<ContactPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("header.link.contact")} />
      <Grid container style={{ display: "flex" }}>
        <Grid item xs={12} sm={5} className="contact-section">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt=""
            className="img-responsive crop-center"
          />
          <div className="contact-data">
            <Grid container spacing={2}>
              <Block
                icon={<RoomIcon fontSize="large" />}
                title={t("contact.address")}
                text="Av. Los Abrigos, 32. Los Abrigos. Santa Cruz de Tenerife."
              />
              <Block
                icon={<PhoneIcon fontSize="large" />}
                title={t("contact.phone")}
                text="+34 822 29 81 28 / +34 638 41 89 17"
              />
              <Block
                icon={<EmailIcon fontSize="large" />}
                title={t("contact.email")}
                text="info@barrerastenerife.com"
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
    placeholderImage: file(relativePath: { eq: "bg/1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
