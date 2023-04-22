import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Grid, Typography } from "@material-ui/core";
import { Link, graphql, useStaticQuery } from "gatsby";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo-navbar-2.png" }) {
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
        <Grid item xs={12} sm={4} className="footer-logo">
          <Link to="/" aria-label="go to home">
            <GatsbyImage image={getImage(data.logo)!} alt="logo" />
          </Link>
        </Grid>

        <Grid item xs={12} sm={8} className="footer-data">
          <Typography variant="h4">{t("contact.title")}</Typography>

          <div>
            <Typography variant="h6">Av. Los Abrigos, 32.</Typography>
            <Typography variant="h6">Los Abrigos.</Typography>
            <Typography variant="h6">Santa Cruz de Tenerife.</Typography>
            <Typography variant="h6">38618</Typography>
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

        {/* <Grid item xs={12} sm={3}>
          <p className="footer-title">{t("footer.offices")}</p>
          <GatsbyImage image={getImage(data.map)!} alt="map" />
        </Grid>

        <Grid item xs={12} className="text-center">
          {`© ${new Date().getFullYear()} - ${t("footer.copyright")}`}
        </Grid> */}
      </Grid>
    </footer>
  );
};

export default Footer;
