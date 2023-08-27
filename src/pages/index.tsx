import { PageProps, graphql } from "gatsby";

import SEO from "components/SEO";
import { ExpertRepresentation } from "components/home/ExpertRepresentation";
import { FeaturedPropertiesSection } from "components/home/FeaturedPropertiesSection";
import MainSlider from "components/home/MainSlider";
import { NewProperties } from "components/home/NewProperties";
import { ThinkingOfBuying } from "components/home/ThinkingOfBuying";
import { WorkWithUs } from "components/home/WorkWithUs";
import Layout from "components/layout";
import { useTranslation } from "hooks/useTranslation";
import React from "react";
import { Typography } from "@material-ui/core";

type IndexPageProps = {
  background1: any; // TODO: Get image type
};

const IndexPage: React.FC<PageProps<IndexPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("home")} />

      <MainSlider />

      <p className="text-display" data-aos="fade-in">
        {t("welcome")}
      </p>

      <ExpertRepresentation />

      <FeaturedPropertiesSection />

      <NewProperties />

      <ThinkingOfBuying />

      <WorkWithUs />
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
