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
          gatsbyImageData(layout: FIXED, height: 70)
        }
      }
      es: file(relativePath: { eq: "flags/sp.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 30)
        }
      }
      en: file(relativePath: { eq: "flags/uk.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 30)
        }
      }
      ru: file(relativePath: { eq: "flags/ru.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 30)
        }
      }
      it: file(relativePath: { eq: "flags/it.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 30)
        }
      }
    }
  `);

  const linkList = [
    {
      to: "/properties/buy",
      text: t("header.link.buy"),
      sub: [
        { to: "/properties/buy", text: t("header.link.luxury") },
        { to: "/properties/buy", text: t("header.link.promotion") },
        { to: "/properties/buy", text: t("header.link.properties") },
      ],
    },
    {
      to: "/properties/rent",
      text: t("header.link.rent"),
      sub: [{ to: "/properties/rent", text: t("header.link.rent") }],
    },
    { to: "/about", text: t("header.link.about") },
    {
      to: "#",
      text: t("header.link.info"),
      sub: [
        { to: "#", text: t("header.link.forBuyers") },
        { to: "#", text: t("header.link.forSellers") },
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
              {logo && <GatsbyImage image={logo} alt={siteTitle} />}
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
