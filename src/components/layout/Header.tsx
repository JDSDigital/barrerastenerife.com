import {
  AppBar,
  Container,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";

import ContactNavBar from "./ContactNavBar";
import Img from "gatsby-image";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";
import React from "react";

interface Props {
  siteTitle: string;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({ target: undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header: React.FC<Props> = ({ siteTitle = "", ...rest }) => {
  const { t } = useTranslation();

  const url = typeof window !== "undefined" ? window.location.href : "";
  const test = url.split("/property/");
  const params = test.length === 2 ? test[1] : "";

  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo-navbar.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      es: file(relativePath: { eq: "flags/sp.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      en: file(relativePath: { eq: "flags/uk.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ru: file(relativePath: { eq: "flags/ru.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      it: file(relativePath: { eq: "flags/it.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const linkList = [
    { to: "/properties/buy", text: t("header.link.buy") },
    { to: "/properties/rent", text: t("header.link.rent") },
    {
      to: "/about#services",
      text: t("folders.services.title"),
      sub: [
        { to: "/services/manage", text: t("header.link.services.manage") },
        {
          to: "/services/assistance",
          text: t("header.link.services.assistance"),
        },
        { to: "/services/caser", text: t("header.link.services.caser") },
        { to: "/services/tyco", text: t("header.link.services.tyco") },
        {
          to: "/services/iberdrola",
          text: t("header.link.services.iberdrola"),
        },
      ],
    },
    { to: "/about", text: t("header.link.about") },
    { to: "/contact", text: t("header.link.contact") },
  ];

  return (
    <HideOnScroll {...rest}>
      <AppBar position="fixed">
        <ContactNavBar params={params} images={images} />

        <Container className="mt-3 mb-3">
          <Toolbar disableGutters>
            <Link to="/" className="logo-link" aria-label="go to home">
              <Img fixed={images.logo.childImageSharp.fixed} alt={siteTitle} />
            </Link>

            <NavBar linkList={linkList} />

            <MobileNavBar linkList={linkList} images={images} params={params} />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
