import {
  Collapse,
  Hidden,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
} from "@material-ui/core";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { FC, useState } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Img from "gatsby-image";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {
  linkList: {
    to: string;
    text: string;
    sub?: {
      to: string;
      text: string;
    }[];
  }[];
  images: any;
  params: string;
};

const MobileNavBar: FC<Props> = ({ linkList, images, params }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { languages, originalPath } = useI18next();

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    // @ts-ignore TODO: Fix react children type error
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
        <div
          role="presentation"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
          className="side-menu"
        >
          <div className="side-menu--logo">
            <Link to="/">
              <Img fixed={images.logo.childImageSharp.fixed} />
            </Link>
          </div>
          <List disablePadding className="side-menu--list">
            {linkList.map((link, index) => {
              if (link.sub)
                return (
                  <LanguagesCollapsible title={link.text} list={link.sub} />
                );

              return (
                <Link
                  key={`${link.text.toLowerCase().replace(" ", "-")}-${index}`}
                  to={link.to}
                  activeClassName="active"
                >
                  <ListItem button>{link.text}</ListItem>
                </Link>
              );
            })}
            <ListItem className="languages-menu">
              {languages.map(lng => {
                return (
                  <Link
                    key={lng}
                    to={`${originalPath}${params}`}
                    language={lng}
                  >
                    <Img fixed={images[lng].childImageSharp.fixed} alt={lng} />
                  </Link>
                );
              })}
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </Hidden>
  );
};

const LanguagesCollapsible = ({
  title,
  list,
}: {
  title: string;
  list: { to: string; text: string }[];
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItem
        button
        onClick={handleExpandClick}
        aria-expanded={expanded}
        className="navbar-services-dropdown"
      >
        {title}
        <ExpandMoreIcon />
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {list.map((link, index) => (
          <Link
            key={`${link.text.toLowerCase().replace(" ", "-")}-${index}`}
            to={link.to}
            activeClassName="active"
          >
            <ListItem button>{link.text}</ListItem>
          </Link>
        ))}
      </Collapse>
    </>
  );
};

export default MobileNavBar;
