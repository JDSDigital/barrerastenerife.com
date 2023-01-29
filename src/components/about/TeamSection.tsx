import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import { useTranslation } from "hooks/useTranslation";

const TeamSection = () => {
  const { t } = useTranslation();

  const images = useStaticQuery(graphql`
    query {
      gian: file(relativePath: { eq: "team/gian.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      irina: file(relativePath: { eq: "team/irina.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      maryna: file(relativePath: { eq: "team/maryna.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      es: file(relativePath: { eq: "flags/sp.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
        }
      }
      en: file(relativePath: { eq: "flags/uk.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
        }
      }
      fr: file(relativePath: { eq: "flags/fr.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
        }
      }
      it: file(relativePath: { eq: "flags/it.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
        }
      }
      de: file(relativePath: { eq: "flags/de.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
        }
      }
      ru: file(relativePath: { eq: "flags/ru.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, height: 20)
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
    image: IGatsbyImageData;
    name: string;
    phone: string;
    languages: string[];
  }) => {
    const teamImage = getImage(image)!;

    return (
      <Grid item xs={12} sm={4}>
        <Card className="team-card">
          <div className="team-image">
            <GatsbyImage
              image={teamImage}
              alt={name}
              className="img-responsive crop-top"
            />
          </div>
          <CardContent className="team-container text-center">
            <p className="team-name">{name}</p>
            <hr />
            <p className="team-position">{phone}</p>
            <div className="team-flags">
              {languages.includes("es") && (
                <GatsbyImage image={getImage(images.es)!} alt="es" />
              )}
              {languages.includes("en") && (
                <GatsbyImage image={getImage(images.en)!} alt="en" />
              )}
              {languages.includes("fr") && (
                <GatsbyImage image={getImage(images.fr)!} alt="fr" />
              )}
              {languages.includes("it") && (
                <GatsbyImage image={getImage(images.it)!} alt="it" />
              )}
              {languages.includes("de") && (
                <GatsbyImage image={getImage(images.de)!} alt="de" />
              )}
              {languages.includes("ru") && (
                <GatsbyImage image={getImage(images.ru)!} alt="ru" />
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
          image={images.gian}
          name="Giambattista Guala"
          phone="+34 638 418 917"
          languages={["es", "en", "fr", "it"]}
        />
        <Team
          image={images.maryna}
          name="Maryna Bohush"
          phone="+34 671 616 456"
          languages={["es", "en", "it", "ru"]}
        />
        <Team
          image={images.irina}
          name="Irina Elistratova"
          phone="+34 653 414 149"
          languages={["es", "en", "de", "it", "ru"]}
        />
      </Grid>
    </Container>
  );
};

export default TeamSection;
