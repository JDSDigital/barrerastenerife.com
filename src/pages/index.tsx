import { PageProps, graphql } from "gatsby";

import { ExpertRepresentation } from "components/ExpertRepresentation";
import { FeaturedPropertiesSection } from "components/FeaturedPropertiesSection";
import Layout from "components/layout";
import MainSlider from "components/MainSlider";
import { PropertyFoldersSection } from "components/PropertyFoldersSection";
import React from "react";
import SEO from "components/SEO";
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

      <ExpertRepresentation />

      <FeaturedPropertiesSection />

      <PropertyFoldersSection />

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
  }
`;
