import {
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import { Property } from "models/Property";
import PropertyCard from "./PropertyCard";
import { QueryStatus } from "react-query";
import React from "react";

interface Props {
  featured?: boolean;
  title?: string;
  properties?: Property[];
  status?: QueryStatus;
}

const List: React.FC<Props> = ({
  featured = false,
  title,
  properties = [],
  status,
}) => {
  return (
    <Grid container spacing={3} className="properties-container">
      {title && (
        <Grid item xs={12} className="text-center">
          <Typography variant="h4" component="p" className="section-title">
            {featured ? "Propiedades Recientes" : title}
          </Typography>
        </Grid>
      )}
      {status === "loading" && (
        <Container className="text-center p-5">
          <CircularProgress />
        </Container>
      )}
      {status !== "loading" && properties.length === 0 ? (
        <Container className="text-center p-5">
          No hay propiedades disponibles
        </Container>
      ) : (
        properties.map(property => (
          <Grid
            key={`property-${property.id}`}
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
          >
            <PropertyCard property={property} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default List;
