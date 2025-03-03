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
  const paramsArray = url.split("/property/");
  const params = paramsArray.length === 2 ? paramsArray[1] : "";

  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo-navbar.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, height: 45)
        }
      }
      es: file(relativePath: { eq: "flags/sp.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 25, width: 38)
        }
      }
      en: file(relativePath: { eq: "flags/uk.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 25, width: 38)
        }
      }
      ru: file(relativePath: { eq: "flags/ru.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 25, width: 38)
        }
      }
      it: file(relativePath: { eq: "flags/it.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 25, width: 38)
        }
      }
      de: file(relativePath: { eq: "flags/de.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 25, width: 38)
        }
      }
      fr: file(relativePath: { eq: "flags/fr.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 25, width: 38)
        }
      }
      pl: file(relativePath: { eq: "flags/pl.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 25, width: 38)
        }
      }
    }
  `);

  const linkList = [
    { to: "/", text: t("home") },
    {
      to: "/properties/buy",
      text: t("header.link.buy"),
      sub: [
        { to: "/properties/luxury", text: t("header.link.luxury") },
        { to: "/promotion", text: t("header.link.promotion") },
        { to: "/properties/investment", text: t("header.link.investment") },
        { to: "/properties/buy", text: t("header.link.properties") },
      ],
    },
    { to: "/about", text: t("header.link.about") },
    {
      to: "#",
      text: t("header.link.info"),
      sub: [
        { to: "/info/buyers", text: t("header.link.forBuyers") },
        { to: "/info/sellers", text: t("header.link.forSellers") },
      ],
    },
    { to: "/contact", text: t("header.link.contact") },
  ];

  const logo = getImage(images.logo);

  return (
    <HideOnScroll {...rest}>
      <AppBar position="fixed">
        <Container className="mt-3 mb-3">
          <Toolbar disableGutters>
            <Link to="/" className="logo-link" aria-label="go to home">
              <GatsbyImage image={logo!} alt={siteTitle} />
            </Link>

            <NavBar linkList={linkList} images={images} params={params} />

            <MobileNavBar linkList={linkList} images={images} params={params} />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
