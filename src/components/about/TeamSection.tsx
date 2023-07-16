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
      gian: file(relativePath: { eq: "about/gian.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      irina: file(relativePath: { eq: "about/irina.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      maryna: file(relativePath: { eq: "about/maryna.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      arely: file(relativePath: { eq: "about/arely.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      uliana: file(relativePath: { eq: "about/uliana.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      oleksandra: file(relativePath: { eq: "about/oleksandra.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      es: file(relativePath: { eq: "flags/sp.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      en: file(relativePath: { eq: "flags/uk.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      fr: file(relativePath: { eq: "flags/fr.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      it: file(relativePath: { eq: "flags/it.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      de: file(relativePath: { eq: "flags/de.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      ru: file(relativePath: { eq: "flags/ru.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      ua: file(relativePath: { eq: "flags/ua.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const Team = ({
    image,
    name,
    phone,
    languages,
    animationDelay = "0",
  }: {
    image: IGatsbyImageData;
    name: string;
    phone: string;
    languages: string[];
    animationDelay?: string;
  }) => {
    const teamImage = getImage(image)!;

    return (
      <Card
        className="team-card"
        data-aos="fade-up"
        data-aos-delay={animationDelay}
      >
        <div className="team-image">
          <GatsbyImage
            image={teamImage}
            alt={name}
            className="img-responsive crop-center"
          />
        </div>

        <CardContent className="team-container">
          <Typography className="team-name" variant="h4">
            {name}
          </Typography>
          <Typography className="team-position" variant="body1">
            {phone}
          </Typography>

          <div className="team-flags">
            {languages.includes("es") && (
              <div className="team-flag-container">
                <GatsbyImage
                  className="img-responsive crop-center"
                  image={getImage(images.es)!}
                  alt="es"
                />
              </div>
            )}
            {languages.includes("en") && (
              <div className="team-flag-container">
                <GatsbyImage
                  className="img-responsive crop-center"
                  image={getImage(images.en)!}
                  alt="en"
                />
              </div>
            )}
            {languages.includes("fr") && (
              <div className="team-flag-container">
                <GatsbyImage
                  className="img-responsive crop-center"
                  image={getImage(images.fr)!}
                  alt="fr"
                />
              </div>
            )}
            {languages.includes("it") && (
              <div className="team-flag-container">
                <GatsbyImage
                  className="img-responsive crop-center"
                  image={getImage(images.it)!}
                  alt="it"
                />
              </div>
            )}
            {languages.includes("de") && (
              <div className="team-flag-container">
                <GatsbyImage
                  className="img-responsive crop-center"
                  image={getImage(images.de)!}
                  alt="de"
                />
              </div>
            )}
            {languages.includes("ru") && (
              <div className="team-flag-container">
                <GatsbyImage
                  className="img-responsive crop-center"
                  image={getImage(images.ru)!}
                  alt="ru"
                />
              </div>
            )}
            {languages.includes("ua") && (
              <div className="team-flag-container">
                <GatsbyImage
                  className="img-responsive crop-center"
                  image={getImage(images.ua)!}
                  alt="ua"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Grid
      container
      justifyContent="space-around"
      className="team-section text-center"
      spacing={2}
    >
      <Grid item xs={12} data-aos="fade-up">
        <Container>
          <Typography variant="h4" component="p" className="section-title">
            {t("about.team")}
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12} className="team-grid">
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
        {/* </Grid> */}

        {/* <Grid item xs={12} className="team-grid"> */}
        <Team
          image={images.arely}
          name="Arely Arteaga"
          phone="+34 630 088 490"
          languages={["es", "en"]}
        />

        <Team
          image={images.uliana}
          name="Uliana Popovycheva"
          phone="+34 651 873 215"
          languages={["es", "en", "ru", "ua"]}
        />

        <Team
          image={images.oleksandra}
          name="Oleksandra Dzhaparidze"
          phone="+34 656 610 837"
          languages={["es", "en", "ru", "ua"]}
        />
      </Grid>
    </Grid>
  );
};

export default TeamSection;
