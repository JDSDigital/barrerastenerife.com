import { CardActions, Grid } from "@material-ui/core";

import BathtubIcon from "@material-ui/icons/Bathtub";
import CropFreeIcon from "@material-ui/icons/CropFree";
import FooterItem from "./PropertyFooterItem";
import HotelIcon from "@material-ui/icons/Hotel";
import React from "react";
import { useTranslation } from "hooks/useTranslation";

interface Props {
  detail?: boolean;
  area: number;
  bedrooms: number;
  bathrooms: number;
}

const PropertyFooter: React.FC<Props> = ({
  detail = false,
  area,
  bedrooms,
  bathrooms,
}) => {
  const { t } = useTranslation();
  return (
    <CardActions
      classes={{ root: `property-card-actions${detail ? "--detail" : ""}` }}
    >
      <Grid container spacing={2}>
        <Grid item xs={detail ? 6 : 4} sm={4}>
          <FooterItem
            detail={detail}
            title={`${t("properties.area")} m2`}
            value={area}
            component={CropFreeIcon}
          />
        </Grid>
        <Grid item xs={detail ? 6 : 4} sm={4}>
          <FooterItem
            detail={detail}
            title={t("properties.bedrooms")}
            value={bedrooms}
            component={HotelIcon}
          />
        </Grid>
        <Grid item xs={detail ? 6 : 4} sm={4}>
          <FooterItem
            detail={detail}
            title={t("properties.bathrooms")}
            value={bathrooms}
            component={BathtubIcon}
          />
        </Grid>
      </Grid>
    </CardActions>
  );
};

export default PropertyFooter;
