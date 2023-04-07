import { Container, Typography, styled } from "@material-ui/core";
import { PageProps, graphql } from "gatsby";

import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

type BuyersPageProps = {
  background1: any; // TODO: Get image type
};

const BuyersPage: React.FC<PageProps<BuyersPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("home")} />
      <RootContainer>
        <Typography variant="h3">For buyers</Typography>
      </RootContainer>
    </Layout>
  );
};

export default BuyersPage;

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

const RootContainer = styled(Container)({
  marginTop: "100px",
});
