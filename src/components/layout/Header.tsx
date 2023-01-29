import {
  AppBar,
  Container,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
          gatsbyImageData(layout: FIXED, height: 70)
        }
      }
      es: file(relativePath: { eq: "flags/sp.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
        }
      }
      en: file(relativePath: { eq: "flags/uk.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
        }
      }
      ru: file(relativePath: { eq: "flags/ru.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
        }
      }
      it: file(relativePath: { eq: "flags/it.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
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

  const logo = getImage(images.logo);

  return (
    <HideOnScroll {...rest}>
      <AppBar position="fixed">
        <ContactNavBar params={params} images={images} />

        <Container className="mt-3 mb-3">
          <Toolbar disableGutters>
            <Link to="/" className="logo-link" aria-label="go to home">
              {logo && <GatsbyImage image={logo} alt={siteTitle} />}
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
