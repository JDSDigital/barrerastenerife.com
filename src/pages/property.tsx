import { PageProps, graphql } from "gatsby";

import Detail from "components/properties/Detail";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { getProperty } from "../utils";
import { useTranslation } from "hooks/useTranslation";

const PropertyPage: React.FC<PageProps> = ({ location }) => {
  const { t } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const identifier = searchParams.get("id");
  const property = getProperty({ identifier });

  return (
    <Layout>
      <SEO title={t("property")} />
      <Detail property={property} />
    </Layout>
  );
};

export default PropertyPage;

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
