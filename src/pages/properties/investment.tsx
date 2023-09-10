import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

type InvestmentProps = {
  banner: any; // TODO: Get image type
};

const Investment: React.FC<PageProps<InvestmentProps>> = ({ data }) => {
  const { t } = useTranslation();
  const title = t("header.link.investment");

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesBanner image={data.banner} title={title} />
      <Properties tags={["investment"]} />
    </Layout>
  );
};

export default Investment;

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
    banner: file(relativePath: { eq: "properties/investment.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
