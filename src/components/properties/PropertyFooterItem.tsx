import { Grid, Typography } from "@material-ui/core";

import React from "react";

interface FooterItemProps {
  title: string;
  value: string | number;
}

const FooterItem: React.FC<FooterItemProps> = ({ title, value }) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="h5" className="text-poppins-bold">
          {value}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="body1"
          className="text-poppins color-grey"
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterItem;
