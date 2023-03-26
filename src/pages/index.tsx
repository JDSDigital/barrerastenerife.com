import { Container, Typography } from "@material-ui/core";
import { PageProps, graphql } from "gatsby";

import { Banner } from "components/Banner";
import Layout from "components/layout";
import MainSlider from "components/MainSlider";
import Partnerships from "components/Partnerships";
import { PropertiesSection } from "components/PropertiesSection";
import React from "react";
import SEO from "components/SEO";
import { ServicesSection } from "components/ServicesSection";
import Testimonials from "components/testimonials/Testimonials";
import { useTranslation } from "hooks/useTranslation";

type IndexPageProps = {
  background1: any; // TODO: Get image type
};

const IndexPage: React.FC<PageProps<IndexPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("home")} />
      <MainSlider />

      <Banner image={data.background1}>
        <ServicesSection />
      </Banner>

      <PropertiesSection />

      <Partnerships />

      <Testimonials />
    </Layout>
  );
};

export default IndexPage;

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
    background1: file(relativePath: { eq: "bg/2.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
