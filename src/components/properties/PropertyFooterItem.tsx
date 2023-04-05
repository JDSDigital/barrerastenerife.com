import { Grid, Tooltip, Typography } from "@material-ui/core";

import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";

interface FooterItemProps {
  title: string;
  value: string | number;
}

const FooterItem: React.FC<FooterItemProps> = ({ title, value }) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="h3">
          {value}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="body1">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterItem;
