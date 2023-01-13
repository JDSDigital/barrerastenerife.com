import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/layout";
import { PageProps } from "gatsby";
import { Properties } from "components/properties/Properties";
import PropertiesBanner from "components/properties/PropertiesBanner";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

const RentProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.rent");

  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bg/rent.jpg" }) {
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
        title={t("properties.rent")}
      />
      <Properties contract={1} disableContract={true} />
    </Layout>
  );
};

export default RentProperties;
