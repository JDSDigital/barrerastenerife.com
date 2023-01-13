import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { promotions } from "../../constants";
import { useTranslation } from "hooks/useTranslation";

const NewPropertiesList: React.FC<PageProps> = ({ location }) => {
  const { t } = useTranslation();

  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bg/developments.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get("tag");

  const title = promotions.find(promotion => promotion.type === tag);

  return (
    <Layout>
      <SEO title={t("header.link.promotion")} />
      <PropertiesBanner
        image={image.banner.childImageSharp.fluid}
        title={title?.name}
      />
      <Properties tags={["promotion", tag!]} search={false} />
    </Layout>
  );
};

export default NewPropertiesList;
