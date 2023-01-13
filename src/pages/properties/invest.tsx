import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

type InvestPropertiesProps = {
  banner: any; // TODO: Get image type
};

const InvestProperties: React.FC<PageProps<InvestPropertiesProps>> = ({
  data,
}) => {
  const { t } = useTranslation();
  const title = t("header.link.invest");

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesBanner
        image={data.banner.childImageSharp.fluid}
        title={t("header.link.invest")}
      />
      <Properties kind="building" disableKind />
    </Layout>
  );
};

export default InvestProperties;

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
    banner: file(relativePath: { eq: "bg/invest.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
