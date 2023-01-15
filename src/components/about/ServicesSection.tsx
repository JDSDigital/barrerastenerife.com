import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import React from "react";
import { useTranslation } from "hooks/useTranslation";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        className="about-content"
      >
        <ServiceBox
          title={t("about.info.title")}
          text={t("about.info.description")}
        />
        <ServiceBox
          title={t("about.consulting.title")}
          text={t("about.consulting.description")}
        />
        <ServiceBox
          title={t("about.investment.title")}
          text={t("about.investment.description")}
        />
        <ServiceBox
          title={t("about.attention.title")}
          text={t("about.attention.description")}
        />
        <ServiceBox
          title={t("about.quality.title")}
          text={t("about.quality.description")}
        />
      </Grid>
    </Container>
  );
};

const ServiceBox = ({ title, text }: { title: string; text: string }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="service-card">
        <CardContent>
          <Typography
            component="p"
            variant="h5"
            className="text-uppercase"
            align="center"
          >
            {title}
          </Typography>
          <hr />
          {text}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ServicesSection;
