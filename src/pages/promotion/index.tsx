import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/layout";
import { PageProps } from "gatsby";
import { PromotionContainer } from "components/promotion/PromotionContainer";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

const NewProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.promotion");

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

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesBanner
        image={image.banner.childImageSharp.fluid}
        title={t("folders.promotion.title")}
      />
      <PromotionContainer />
    </Layout>
  );
};

export default NewProperties;
