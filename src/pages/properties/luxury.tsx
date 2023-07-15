import { LUXURY_PROPERTIES_PRICE_RANGE } from "witeiConstants";
import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

type LuxuryPropertiesProps = {
  banner: any; // TODO: Get image type
};

const LuxuryProperties: React.FC<PageProps<LuxuryPropertiesProps>> = ({
  data,
}) => {
  const { t } = useTranslation();
  const title = t("header.link.luxury");

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesBanner image={data.banner} title={t("header.link.luxury")} />
      <Properties
        contract={2}
        price={LUXURY_PROPERTIES_PRICE_RANGE}
        disableContract
      />
    </Layout>
  );
};

export default LuxuryProperties;

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
    banner: file(relativePath: { eq: "luxury/1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
