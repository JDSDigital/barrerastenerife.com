import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import Form from "components/contact/Form";
import { I18nextContext } from "gatsby-plugin-react-i18next";
import ImageGallery from "react-image-gallery";
import List from "./List";
import MapView from "components/maps/MapView";
import { Property } from "models/Property";
import PropertyFooter from "./PropertyFooter";
import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import { formatPrice } from "../../utils";
import { useTranslation } from "hooks/useTranslation";

const Detail = ({ property }: { property: Property | undefined }) => {
  if (!property) {
    return (
      <Container className="text-center p-5">
        <CircularProgress />
      </Container>
    );
  }

  const { t } = useTranslation();
  const { language } = React.useContext(I18nextContext);

  const getPropertyZone = () => {
    if (property.zone && !property.town) return property.zone;
    if (!property.zone && property.town) return property.town;
    if (property.zone && property.town)
      return `${property.zone}, ${property.town}`;

    return "";
  };

  return (
    <>
      <Container className="image-container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ImageGallery
              items={property.pictures}
              lazyLoad={true}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="mb-5">
              <CardContent>
                <Typography variant="h3">
                  {`${
                    property.tags.includes("promocion" || "promotion")
                      ? t("properties.from")
                      : ""
                  } ${formatPrice(
                    property.selling
                      ? property.selling_cost
                      : property.renting_cost
                  )}`}
                </Typography>
                <Typography color="textSecondary" className="flex-row mt-3">
                  <RoomIcon className="mr-3" />
                  {getPropertyZone()}
                </Typography>
              </CardContent>
            </Card>
            <Card className="mb-5">
              <CardHeader title={t("properties.info")} />
              <CardContent>
                <PropertyFooter
                  detail={true}
                  area={property.area}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                />
              </CardContent>
            </Card>
            <Card className="mb-5">
              {property.tags.length > 0 && (
                <>
                  <CardHeader title={t("properties.tags")} />
                  <ul className="tag-list">
                    {property.tags.map(tag => (
                      <li key={tag}>
                        <Chip label={tag} color="primary" />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="mb-5">
              <CardHeader title={t("properties.description")} />
              <CardContent>
                {language === "es"
                  ? property.description
                  : property.description_en}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="mb-5">
              <CardHeader title={t("contact.title")} />
              <CardContent>
                <Form fullWidth id={property.identifier} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <MapView lat={property.geo_lat} lng={property.geo_lng} />

        {property.related && property.related.length > 0 && (
          <>
            <Typography variant="h5" component="p" className="mt-5">
              {t("properties.related")}
            </Typography>
            <List properties={property.related} />
          </>
        )}
      </Container>
    </>
  );
};

export default Detail;
