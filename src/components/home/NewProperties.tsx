import { Grid, Typography, styled } from "@material-ui/core";

import { Link } from "gatsby-plugin-react-i18next";
import { Property } from "models/Property";
import React from "react";
import { useGetProperties } from "hooks/useGetProperties";
import { useTranslation } from "hooks/useTranslation";

export const NewProperties = () => {
  const { properties } = useGetProperties({
    tags: ["promotion"],
  });

  const { t } = useTranslation();

  const propertyGrid = properties?.slice(0, 3);

  const getPropertyZone = (property: Property) => {
    if (property.zone && !property.town) return property.zone;
    if (!property.zone && property.town) return property.town;
    if (property.zone && property.town)
      return `${property.zone}, ${property.town}`;

    return "";
  };

  return (
    <div className="text-center">
      <Typography
        variant="h3"
        component="p"
        className="section-title"
        data-aos="fade-up"
      >
        {t("header.link.promotion")}
      </Typography>

      <Grid container>
        {propertyGrid &&
          propertyGrid.map((property, index) => (
            <Grid
              key={`new-property-${index}`}
              item
              xs={12}
              sm={4}
              data-aos="fade-up"
            >
              <Link to={`/property/?id=${property.identifier}`}>
                <ImageContainer>
                  <img
                    src={property.pictures[0]}
                    className="img-responsive crop-center"
                    alt={`New property development ${index + 1}`}
                  />
                </ImageContainer>
              </Link>
              <Typography variant="h6">{property.street}</Typography>
              <Typography variant="body1" className="mb-5">
                {getPropertyZone(property)}
              </Typography>
            </Grid>
          ))}
        <Grid item xs={12} data-aos="fade-up">
          <div className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge mt-5">
            <Link to="/promotion" className="color-white">
              {t("folders.more")}
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const ImageContainer = styled("div")({
  "height": "300px",
  "transition": "all 0.3s ease",
  "marginBottom": "24px",

  "&:hover": {
    transform: "scale(1.1)",
  },
});
