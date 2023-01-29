import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

type RentPropertiesProps = {
  banner: any; // TODO: Get image type
};

const RentProperties: React.FC<PageProps<RentPropertiesProps>> = ({ data }) => {
  const { t } = useTranslation();
  const title = t("header.link.rent");

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesBanner image={data.banner} title={t("properties.rent")} />
      <Properties contract={1} disableContract={true} />
    </Layout>
  );
};

export default RentProperties;

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
    banner: file(relativePath: { eq: "bg/rent.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
