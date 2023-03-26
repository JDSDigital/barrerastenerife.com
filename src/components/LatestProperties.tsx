import { CircularProgress, Container, Grid } from "@material-ui/core";

import { Link } from "gatsby-plugin-react-i18next";
import { Property } from "models/Property";
import React from "react";
import { useGetProperties } from "hooks/useGetProperties";

const LatestProperties = () => {
  const { properties, status } = useGetProperties({});

  return (
    <Grid container spacing={2}>
      {status === "loading" && (
        <Container className="text-center p-5">
          <CircularProgress />
        </Container>
      )}
      {status === "success" &&
        properties.slice(0, 4).map((property: Property) => (
          <Grid key={`latest-properties-${property.id}`} item xs={6} md={3}>
            <Link to={`/property/?id=${property.identifier}`}>
              <img
                src={property?.pictures?.[0]}
                className="img-responsive crop-center"
              />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};

export default LatestProperties;
