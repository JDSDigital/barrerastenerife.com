import Layout from "components/layout";
import { PageProps } from "gatsby";
import { PromotionContainer } from "components/promotion/PromotionContainer";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

type NewPropertiesProps = {
  banner: any; // TODO: Get image type
};

const NewProperties: React.FC<PageProps<NewPropertiesProps>> = ({ data }) => {
  const { t } = useTranslation();
  const title = t("header.link.promotion");

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesBanner
        image={data.banner}
        title={t("folders.promotion.title")}
      />
      <PromotionContainer />
    </Layout>
  );
};

export default NewProperties;

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
    banner: file(relativePath: { eq: "bg/developments.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
