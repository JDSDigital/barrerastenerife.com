import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import { promotions } from "../../constants";
import { useTranslation } from "hooks/useTranslation";

type NewPropertiesListProps = {
  banner: any; // TODO: Get image type
};

const NewPropertiesList: React.FC<PageProps<NewPropertiesListProps>> = ({
  location,
  data,
}) => {
  const { t } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get("tag");

  const title = promotions.find(promotion => promotion.type === tag);

  return (
    <Layout>
      <SEO title={t("header.link.promotion")} />
      <PropertiesBanner image={data.banner} title={title?.name} />
      <Properties tags={["promotion", tag!]} search={false} />
    </Layout>
  );
};

export default NewPropertiesList;

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
