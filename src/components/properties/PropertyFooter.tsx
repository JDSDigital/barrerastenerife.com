import { CardActions, Grid } from "@material-ui/core";

import FooterItem from "./PropertyFooterItem";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

interface Props {
  price: string;
  status: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
}

const PropertyFooter: React.FC<Props> = ({
  price,
  status,
  area,
  bedrooms,
  bathrooms,
}) => {
  const { t } = useTranslation();
  return (
    <CardActions className="mt-5">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <FooterItem title={status.toLocaleUpperCase()} value={price} />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <FooterItem title={`${t("properties.area")} m2`} value={area} />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <FooterItem title={t("properties.bedrooms")} value={bedrooms} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FooterItem title={t("properties.bathrooms")} value={bathrooms} />
        </Grid>
      </Grid>
    </CardActions>
  );
};

export default PropertyFooter;
