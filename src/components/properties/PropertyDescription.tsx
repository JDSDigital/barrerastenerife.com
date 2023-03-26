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
      <Typography variant="h4" component="p" className="color-white">
        {title}
      </Typography>
      <Typography variant="body1" component="p" className="color-white">
        {address}
      </Typography>
      <Typography variant="h3" component="p" className="color-white">
        {formatPrice(price)}
      </Typography>
    </CardContent>
  );
};

export default PropertyDescription;
