import { Container, Grid, Typography, styled } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

import { Banner } from "components/info/Banner";
import Layout from "components/layout";
import React from "react";
import SEO from "components/SEO";
import { useTranslation } from "hooks/useTranslation";

type SellersPageProps = {
  banner: any; // TODO: Get image type
  home: any;
};

const SellersPage: React.FC<PageProps<SellersPageProps>> = ({ data }) => {
  const { t } = useTranslation();

  const bannerImage = getImage(data.banner)!;
  const homeImage = getImage(data.home)!;

  return (
    <Layout>
      <SEO title={t("home")} />
      <div className="info">
        <Banner image={bannerImage} type="sellers" />

        <InfoContainer>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <GatsbyImage image={homeImage} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="text-center">
                <Typography
                  variant="h3"
                  component="p"
                  className="section-title"
                >
                  TYPICAL SALES PROCESS
                </Typography>
              </div>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eget consectetur dolor, in eleifend massa. Nunc quis
                lacinia neque. Donec ex erat, sagittis sed accumsan sed,
                fermentum at lectus. Donec eros sem, tristique eget dictum a,
                vulputate tincidunt sem. Sed maximus lorem vitae erat ultrices
                volutpat. Nullam sit amet arcu tincidunt, molestie nibh non,
                scelerisque magna.
              </Typography>
              <Typography component="p">
                Mauris consequat molestie pulvinar. Etiam et ante sapien. Nam in
                urna at diam lobortis rhoncus. Etiam suscipit rutrum imperdiet.
                Donec pulvinar nisi et nunc bibendum, quis varius justo
                porttitor. Nam placerat quam vel posuere interdum. Proin quam
                orci, feugiat at sagittis ac, ornare nec augue. Praesent vitae
                nibh ac odio commodo finibus ut in lectus. Vestibulum metus
                eros, dignissim ac blandit eu, mattis vitae massa. Nulla at
                lectus ornare, hendrerit mi at, semper velit.
              </Typography>
            </Grid>
          </Grid>
        </InfoContainer>
      </div>
    </Layout>
  );
};

const InfoContainer = styled(Container)({
  marginTop: "56px",
  marginBottom: "56px",
});

export default SellersPage;

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
    banner: file(relativePath: { eq: "random/sellers.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    home: file(relativePath: { eq: "random/home_large.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
