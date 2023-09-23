import { CardContent, Typography } from "@material-ui/core";

import React from "react";
import { formatPrice } from "../../utils";

interface Props {
  price: number;
  title: string;
  address: string;
}

const PropertyDescription: React.FC<Props> = ({ price, title, address }) => {
  return (
    <CardContent classes={{ root: "property-card-content" }}>
      <div>
        <Typography
          variant="body2"
          component="p"
          className="color-white text-lato-light text-uppercase"
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          className="color-white text-lato-light text-uppercase text-truncate"
        >
          {address}
        </Typography>
        <Typography
          variant="h4"
          component="p"
          className="color-white text-lato"
        >
          {formatPrice(price)}
        </Typography>
      </div>
      <div className="property-card-footer">
        <div className="small-divider" />
        <Typography
          variant="h6"
          component="p"
          className="color-white text-lato text-uppercase property-more-info"
          display="inline"
        >
          More info
        </Typography>
      </div>
    </CardContent>
  );
};

export default PropertyDescription;
