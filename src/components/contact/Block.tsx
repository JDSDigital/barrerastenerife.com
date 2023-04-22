import { Grid, Typography } from "@material-ui/core";

import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  text: string;
};

const Block: React.FC<Props> = ({ icon, title, text, ...rest }) => (
  <Grid
    item
    container
    xs={12}
    spacing={2}
    alignItems="center"
    className="contact-block"
    {...rest}
  >
    <Grid item xs={2} className="text-right">
      {icon}
    </Grid>
    <Grid container item xs={10}>
      <Grid item xs={12}>
        <Typography variant="h6" component="p">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2" component="p">
          {text}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default Block;
