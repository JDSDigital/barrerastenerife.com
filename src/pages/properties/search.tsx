import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";
import { useTranslation } from "gatsby-plugin-react-i18next";

type Props = {
  location: {
    state: {
      types: number;
      contract: number;
      cities: number;
      zones: number;
    };
  };
};

const SearchProperties: React.FC<Props> = ({ location }) => {
  const { t } = useTranslation();
  const title = t("properties.title");

  return (
    <Layout>
      <SEO title={title} />
      <Properties
        title={t("properties.title")}
        type={location?.state?.types}
        contract={location?.state?.contract}
        city={location?.state?.cities}
        zone={location?.state?.zones}
      />
    </Layout>
  );
};

export default SearchProperties;