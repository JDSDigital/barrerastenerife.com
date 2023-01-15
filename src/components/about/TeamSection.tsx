import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import { useTranslation } from "hooks/useTranslation";

const TeamSection = () => {
  const { t } = useTranslation();

  const images = useStaticQuery(graphql`
    query {
      gian: file(relativePath: { eq: "team/gian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      irina: file(relativePath: { eq: "team/irina.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maryna: file(relativePath: { eq: "team/maryna.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
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
      fr: file(relativePath: { eq: "flags/fr.jpg" }) {
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
      de: file(relativePath: { eq: "flags/de.jpg" }) {
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
    }
  `);

  const Team = ({
    image,
    name,
    phone,
    languages,
  }: {
    image: FluidObject;
    name: string;
    phone: string;
    languages: string[];
  }) => {
    return (
      <Grid item xs={12} sm={4}>
        <Card className="team-card">
          <div className="team-image">
            <Img fluid={image} alt={name} className="img-responsive crop-top" />
          </div>
          <CardContent className="team-container text-center">
            <p className="team-name">{name}</p>
            <hr />
            <p className="team-position">{phone}</p>
            <div className="team-flags">
              {languages.includes("es") && (
                <Img fixed={images.es.childImageSharp.fixed} alt="es" />
              )}
              {languages.includes("en") && (
                <Img fixed={images.en.childImageSharp.fixed} alt="en" />
              )}
              {languages.includes("fr") && (
                <Img fixed={images.fr.childImageSharp.fixed} alt="fr" />
              )}
              {languages.includes("it") && (
                <Img fixed={images.it.childImageSharp.fixed} alt="it" />
              )}
              {languages.includes("de") && (
                <Img fixed={images.de.childImageSharp.fixed} alt="de" />
              )}
              {languages.includes("ru") && (
                <Img fixed={images.ru.childImageSharp.fixed} alt="ru" />
              )}
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="space-around"
        className="team-section text-center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="p" className="section-title">
            {t("about.team")}
          </Typography>
        </Grid>
        <Team
          image={images.gian.childImageSharp.fluid}
          name="Giambattista Guala"
          phone="+34 638 418 917"
          languages={["es", "en", "fr", "it"]}
        />
        <Team
          image={images.maryna.childImageSharp.fluid}
          name="Maryna Bohush"
          phone="+34 671 616 456"
          languages={["es", "en", "it", "ru"]}
        />
        <Team
          image={images.irina.childImageSharp.fluid}
          name="Irina Elistratova"
          phone="+34 653 414 149"
          languages={["es", "en", "de", "it", "ru"]}
        />
      </Grid>
    </Container>
  );
};

export default TeamSection;
