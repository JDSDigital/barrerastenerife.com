import { Container, Link, Tooltip, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";
import Slider from "react-slick";
import { useTranslation } from "hooks/useTranslation";

const partners = [
  {
    image: "tyco",
    name: "TYCO/ADT",
    url: "https://adt.com.es/",
  },
  {
    image: "caser",
    name: "CASER",
    url: "https://www.caser.es/",
  },
  {
    image: "iberdrola",
    name: "IBERDROLA",
    url: "https://www.iberdrola.es/",
  },
];

const Partnerships = () => {
  const images = useStaticQuery(graphql`
    query {
      tyco: file(relativePath: { eq: "services/tyco.jpeg" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      caser: file(relativePath: { eq: "services/caser.jpg" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iberdrola: file(relativePath: { eq: "services/iberdrola.jpg" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { t } = useTranslation();

  return (
    <Container>
      <div className="mb-10 text-center">
        <Typography variant="h4" component="p" className="section-title">
          {t("partnerships")}
        </Typography>
        <Slider
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={false}
          arrows={false}
          autoplaySpeed={5000}
        >
          {partners.map((partner, index) => (
            <div key={`${index}-partner`} className="flex-center">
              <Link href={partner.url} target="_blank" rel="noopener">
                <Tooltip title={partner.name} placement="top">
                  <Img fixed={images[partner.image].childImageSharp.fixed} />
                </Tooltip>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Partnerships;
