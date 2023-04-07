import { Container, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { Banner } from "components/Banner";
import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

const Testimonials = () => {
  const { t } = useTranslation();
  const images = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "bg/6.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Banner size="xlarge" image={images.background}>
      <Container>
        <div className="testimonial-container">
          <div className="testimonial-description">
            <Typography variant="h4" className="testimonial-title">
              {t("testimonials.title")}
            </Typography>
            <Typography>{t("testimonials.subtitle")}</Typography>
            <div className="mt-10 mb-10">
              <Link to="/contact">{t("contact.title")}</Link>
            </div>
          </div>

          <div className="testimonial-box">
            <Typography
              variant="body1"
              className="testimonial-name text-center"
            >
              Gara Lorenzo Martin
            </Typography>
            <Typography
              variant="body2"
              className="testimonial-text text-center"
            >
              {t("testimonials.t1")}
            </Typography>
          </div>
          <div className="testimonial-box">
            <Typography
              variant="body1"
              className="testimonial-name text-center"
            >
              Zerin Rustem-Allen
            </Typography>
            <Typography
              variant="body2"
              className="testimonial-text text-center"
            >
              {t("testimonials.t2")}
            </Typography>
          </div>
          <div className="testimonial-box">
            <Typography
              variant="body1"
              className="testimonial-name text-center"
            >
              Carmelo Cabrera Esteve
            </Typography>
            <Typography
              variant="body2"
              className="testimonial-text text-center"
            >
              {t("testimonials.t3")}
            </Typography>
          </div>
        </div>
      </Container>
    </Banner>
  );
};

export default Testimonials;
