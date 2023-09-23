/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "assets/scss/custom-theme.scss";

import { QueryClient, QueryClientProvider } from "react-query";
import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Aos from "aos";
import { Container } from "@material-ui/core";
import CustomThemeProvider from "../theme/CustomThemeProvider";
import Footer from "./Footer";
import Header from "./Header";
import { ParallaxProvider } from "react-scroll-parallax";

interface Props {
  children: any;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 86400,
      },
    },
  });

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <CustomThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ParallaxProvider>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Container maxWidth={false} className="main-container">
            {children}
          </Container>
          <Footer />
        </ParallaxProvider>
      </QueryClientProvider>
    </CustomThemeProvider>
  );
};
