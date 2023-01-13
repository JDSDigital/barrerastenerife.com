import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

const InvestProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.invest");

  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bg/invest.jpg" }) {
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
        title={t("header.link.invest")}
      />
      <Properties kind="building" disableKind />
    </Layout>
  );
};

export default InvestProperties;
