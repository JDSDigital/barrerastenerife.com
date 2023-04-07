import { PageProps, graphql } from "gatsby";

import { ExpertRepresentation } from "components/home/ExpertRepresentation";
import { FeaturedPropertiesSection } from "components/home/FeaturedPropertiesSection";
import Layout from "components/layout";
import MainSlider from "components/home/MainSlider";
import { NewProperties } from "components/home/NewProperties";
import { PropertyFoldersSection } from "components/home/PropertyFoldersSection";
import React from "react";
import SEO from "components/SEO";
import Testimonials from "components/home/Testimonials";
import { ThinkingOfBuying } from "components/home/ThinkingOfBuying";
import { WorkWithUs } from "components/home/WorkWithUs";
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

      <NewProperties />

      <ThinkingOfBuying />

      <WorkWithUs />

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
