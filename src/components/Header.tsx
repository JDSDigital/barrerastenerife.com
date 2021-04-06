import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Slide,
  SwipeableDrawer,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";

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
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const { languages, originalPath } = useI18next();
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
      logo2: file(relativePath: { eq: "logo/logo-navbar-2.png" }) {
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

  const toggleDrawer = (open: boolean) => (event: any) => {
    setIsDrawerOpen(open);
  };

  const NavList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="side-menu"
    >
      <div className="side-menu--logo">
        <Link to="/">
          <Img fixed={images.logo.childImageSharp.fixed} alt={siteTitle} />
        </Link>
      </div>
      <List disablePadding className="side-menu--list">
        {linkList.map((link, index) => (
          <Link
            key={`${link.text.toLowerCase().replace(" ", "-")}-${index}`}
            to={link.to}
            activeClassName="active"
          >
            <ListItem button>{link.text}</ListItem>
          </Link>
        ))}
        <ListItem className="languages-menu">
          {languages.map(lng => {
            return (
              <Link key={lng} to={`${originalPath}${params}`} language={lng}>
                <Img fixed={images[lng].childImageSharp.fixed} alt={lng} />
              </Link>
            );
          })}
        </ListItem>
      </List>
    </div>
  );

  return (
    <HideOnScroll {...rest}>
      <AppBar position="fixed">
        <Hidden smDown>
          <div className="contact-bar">
            <Container className="text-right contact-bar">
              <List disablePadding>
                <ListItem dense>(+34) 822 29 81 28</ListItem>
                <ListItem dense>(+34) 638 41 89 17</ListItem>
                <ListItem dense>
                  <a href="mailto:info@barrerastenerife.com" target="_blank">
                    info@barrerastenerife.com
                  </a>
                </ListItem>
                {languages.map(lng => {
                  return (
                    <ListItem key={lng}>
                      <Link to={`${originalPath}${params}`} language={lng}>
                        <Img
                          fixed={images[lng].childImageSharp.fixed}
                          alt={lng}
                        />
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </Container>
          </div>
        </Hidden>
        <Container className="mt-3 mb-3">
          <Toolbar disableGutters>
            <Link to="/" className="logo-link">
              <Img fixed={images.logo.childImageSharp.fixed} alt={siteTitle} />
            </Link>
            <Hidden smDown>
              <List className="top-menu ml-auto">
                {linkList.map((link, index) => (
                  <ListItem
                    key={`${link.text
                      .toLowerCase()
                      .replace(" ", "-")}-${index}`}
                    className={link.sub ? "dropdown" : ""}
                  >
                    <Link to={link.to} activeClassName="active">
                      {link.text}
                    </Link>
                    {link.sub && (
                      <List className="dropdown-list">
                        {link.sub.map(sub => (
                          <Link to={sub.to} activeClassName="active">
                            <ListItem button>{sub.text}</ListItem>
                          </Link>
                        ))}
                      </List>
                    )}
                  </ListItem>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                aria-label="open drawer"
                className="ml-auto"
                onClick={toggleDrawer(true)}
                classes={{ root: "color-white" }}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <NavList />
              </SwipeableDrawer>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
