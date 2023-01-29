import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

type LocalPropertiesProps = {
  banner: any; // TODO: Get image type
};

const LocalProperties: React.FC<PageProps<LocalPropertiesProps>> = ({
  data,
}) => {
  const { t } = useTranslation();
  const title = t("header.link.local");

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesBanner image={data.banner} title={t("header.link.local")} />
      <Properties search={false} tags={["commercial"]} />
    </Layout>
  );
};

export default LocalProperties;

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
    banner: file(relativePath: { eq: "bg/7.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
