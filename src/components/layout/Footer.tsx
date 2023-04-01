import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";

import FacebookIcon from "@material-ui/icons/Facebook";
import { Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo-navbar.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 55)
        }
      }
      map: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 255)
        }
      }
    }
  `);

  return (
    <footer>
      <Grid container spacing={5} justifyContent="space-between">
        <Grid item xs={12} sm={3}>
          <Link to="/" aria-label="go to home">
            <GatsbyImage image={getImage(data.logo)!} alt="logo" />
          </Link>
          <div className="mt-5">
            <p>Av. Los Abrigos, 32.</p>
            <p>Los Abrigos.</p>
            <p>Santa Cruz de Tenerife.</p>
            <p>38618</p>
          </div>
          <div className="footer-social">
            <a
              href="https://es-es.facebook.com/inmobiliariabarrerastenerife/"
              target="_blank"
              className="mr-3"
              aria-label="go to facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/inmobarrerastenerife/"
              target="_blank"
              className="mr-3"
              aria-label="go to instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className="footer-title">{t("footer.offices")}</p>
          <GatsbyImage image={getImage(data.map)!} alt="map" />
        </Grid>
        <Grid item xs={12} className="text-center">
          {`© ${new Date().getFullYear()} - ${t("footer.copyright")}`}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
