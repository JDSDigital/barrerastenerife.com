import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Hidden, IconButton, List, ListItem } from "@material-ui/core";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { FC } from "react";

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

const NavBar: FC<Props> = ({ linkList, images, params }) => {
  const { languages, originalPath } = useI18next();

  return (
    // @ts-ignore TODO: Fix react children type error
    <Hidden smDown>
      <List className="top-menu ml-auto">
        {linkList.map((link, index) => (
          <ListItem
            key={`${link.text.toLowerCase().replace(" ", "-")}-${index}`}
            className={link.sub ? "dropdown underline" : "underline"}
          >
            <Link to={link.to} activeClassName="active">
              {link.text}
            </Link>
            {link.sub && (
              <List className="dropdown-list">
                {link.sub.map((sub, index) => (
                  <Link
                    key={`${sub.text.toLowerCase().replace(" ", "-")}-${index}`}
                    to={sub.to}
                    activeClassName="active"
                  >
                    <ListItem button>{sub.text}</ListItem>
                  </Link>
                ))}
              </List>
            )}
          </ListItem>
        ))}
        <ListItem className="dropdown underline">
          <MenuIcon className="color-white" />
          <List className="dropdown-list">
            {languages.map(lng => {
              const flagImage = getImage(images[lng]);

              return (
                <ListItem key={lng}>
                  <Link to={`${originalPath}${params}`} language={lng}>
                    {flagImage && <GatsbyImage image={flagImage} alt={lng} />}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </ListItem>
      </List>
    </Hidden>
  );
};

export default NavBar;
