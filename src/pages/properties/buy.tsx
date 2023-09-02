import Layout from "components/layout";
import { PROPERTIES_PRICE_RANGE } from "witeiConstants";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

type BuyPropertiesProps = {
  banner: any; // TODO: Get image type
};

const BuyProperties: React.FC<PageProps<BuyPropertiesProps>> = ({ data }) => {
  const { t } = useTranslation();
  const title = t("header.link.buy");

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesBanner image={data.banner} title={t("properties.sell")} />
      <Properties contract={2} price={PROPERTIES_PRICE_RANGE} disableContract />
    </Layout>
  );
};

export default BuyProperties;

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
    banner: file(relativePath: { eq: "properties/2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
