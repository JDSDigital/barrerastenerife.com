import { Container, Hidden, List, ListItem } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { FC } from "react";

type Props = {
  params: string;
  images: any;
};

const ContactNavBar: FC<Props> = ({ params, images }) => {
  const { languages, originalPath } = useI18next();

  return (
    // @ts-ignore TODO: Fix react children type error
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
        </Container>
      </div>
    </Hidden>
  );
};

export default ContactNavBar;
