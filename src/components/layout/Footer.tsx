import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Grid, Typography } from "@material-ui/core";
import { Link, graphql, useStaticQuery } from "gatsby";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo-vertical-color-full.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 230)
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
      <Grid container>
        <Grid item xs={12} sm={4} className="footer-logo">
          <Link to="/" aria-label="go to home">
            <GatsbyImage image={getImage(data.logo)!} alt="logo" />
          </Link>
        </Grid>

        <Grid item xs={12} sm={8} className="footer-data">
          <Typography variant="h4">{t("contact.title")}</Typography>

          <div>
            <Typography variant="h6" className="text-lato-light">
              Av. Los Abrigos, 32
            </Typography>
            <Typography variant="h6" className="text-lato-light">
              Los Abrigos
            </Typography>
            <Typography variant="h6" className="text-lato-light">
              Santa Cruz de Tenerife
            </Typography>
            <br />
            <Typography className="text-lato-light">
              +34 822 29 81 28 / +34 638 41 89 17
            </Typography>
            <Typography variant="h6" className="text-lato-light">
              info@barrerastenerife.com
            </Typography>
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
              href="https://www.instagram.com/barreras_realty_tenerife/"
              target="_blank"
              className="mr-3"
              aria-label="go to instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/inmobiliaria-barreras-tenerife/"
              target="_blank"
              className="mr-3"
              aria-label="go to linkedin"
            >
              <LinkedInIcon />
            </a>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
