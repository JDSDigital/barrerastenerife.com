import { Link, graphql, useStaticQuery } from "gatsby";

import FacebookIcon from "@material-ui/icons/Facebook";
import { Grid } from "@material-ui/core";
import Img from "gatsby-image";
import InstagramIcon from "@material-ui/icons/Instagram";
import LatestProperties from "components/LatestProperties";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/logo-navbar.png" }) {
        childImageSharp {
          fixed(height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logo: file(relativePath: { eq: "logo/logo-navbar-2.png" }) {
        childImageSharp {
          fixed(height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      map: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fixed(width: 225) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <footer>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <Link to="/" aria-label="go to home">
            <Img fixed={data.logo.childImageSharp.fixed} />
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
        <Grid item xs={12} sm={6}>
          <p className="footer-title">{t("footer.recent")}</p>
          <LatestProperties />
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className="footer-title">{t("footer.offices")}</p>
          <Img fixed={data.map.childImageSharp.fixed} />
        </Grid>
        <Grid item xs={12} className="text-center">
          {`© ${new Date().getFullYear()} - ${t("footer.copyright")}`}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
