import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import List from "../../components/properties/List";
import SearchForm from "../../components/properties/SearchForm";
import { useRepository } from "../../context/repository";
import { type } from "../../constants";

const Properties: React.FC<PageProps> = () => {
  const title = "Lujo";
  const { getPropertyList } = useRepository();
  const properties = getPropertyList({
    kind: "country_house",
  });

  return (
    <Layout>
      <SEO title={title} />
      <SearchForm type={type.indexOf(title)} />
      <List title={title} properties={properties} />
    </Layout>
  );
};

export default Properties;
