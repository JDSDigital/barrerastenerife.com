import Layout from "components/layout";
import { Properties } from "components/properties/Properties";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { useTranslation } from "hooks/useTranslation";

type Props = {
  location: {
    state: {
      town: string;
    };
  };
};

const SearchProperties: React.FC<Props> = ({ location }) => {
  const { t } = useTranslation();
  const title = t("properties.title");

  return (
    <Layout>
      <SEO title={title} />
      <Properties title={t("properties.title")} town={location?.state?.town} />
    </Layout>
  );
};

export default SearchProperties;

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
