import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Form from "components/contact/Form";
import { I18nextContext } from "gatsby-plugin-react-i18next";
import Lightbox from "react-spring-lightbox";
import List from "./List";
import MapView from "components/maps/MapView";
import { Property } from "models/Property";
import PropertyFooter from "./PropertyFooter";
import RoomIcon from "@material-ui/icons/Room";
import { formatPrice } from "../../utils";
import { useTranslation } from "hooks/useTranslation";

const Detail = ({ property }: { property: Property | undefined }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const { t } = useTranslation();
  const { language } = React.useContext(I18nextContext);

  if (!property) {
    return (
      <Container className="text-center p-5">
        <CircularProgress />
      </Container>
    );
  }

  const getPropertyZone = () => {
    if (property.zone && !property.town) return property.zone;
    if (!property.zone && property.town) return property.town;
    if (property.zone && property.town)
      return `${property.zone}, ${property.town}`;

    return "";
  };

  const imageGrid = property.pictures.slice(0, 5);
  const canShowOverlay = (index: number) =>
    index === imageGrid.length - 1 && property.pictures.length > 5;

  const imageQuantity = property.pictures.length - 5;

  const imageGallery = property.pictures.map((image: any, index: number) => ({
    src: image.original,
    loading: "lazy",
    alt: `Property image ${index}`,
  }));

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < imageGallery.length &&
    setCurrentIndex(currentImageIndex + 1);

  const handleClose = () => {
    setIsGalleryOpen(false);
  };

  const getPrice = () =>
    `${
      property.tags.includes("promocion" || "promotion")
        ? t("properties.from")
        : ""
    } ${formatPrice(
      property.selling ? property.selling_cost : property.renting_cost
    )}`;

  const getDescription = () =>
    property[`description_${language}` as "description"] ||
    property.description;

  console.log({ property });

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="image-container">
              {imageGrid.map((image: any, index: number) => (
                <div
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsGalleryOpen(true);
                  }}
                >
                  <img
                    className="img-responsive crop-center"
                    src={image.original}
                  />
                  {canShowOverlay(index) && (
                    <div className="overlay">
                      <Typography
                        component="p"
                        variant="h3"
                        className="color-white"
                      >
                        +{imageQuantity}
                      </Typography>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Grid>

          <Grid item xs={12}>
            <PropertyFooter
              status={property.status}
              price={getPrice()}
              area={property.area}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
            />
          </Grid>

          {/* <Grid item xs={12} md={6}>
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
          </Grid> */}

          <Grid item xs={12}>
            <Typography variant="h4" className="mb-3">
              {property.street}, {property.town}
            </Typography>
            <Typography variant="body1">{getDescription()}</Typography>
          </Grid>

          {property.tags.length > 0 && (
            <Grid item xs={12}>
              <ul className="tag-list">
                {property.tags.map(tag => (
                  <li key={tag}>
                    <Chip label={tag} color="primary" />
                  </li>
                ))}
              </ul>
            </Grid>
          )}

          <Grid item xs={12} md={6}>
            <MapView lat={property.geo_lat} lng={property.geo_lng} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title={t("contact.title")} />
              <CardContent>
                <Form fullWidth id={property.identifier} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {property.related && property.related.length > 0 && (
          <>
            <Typography variant="h5" component="p" className="mt-5">
              {t("properties.related")}
            </Typography>
            <List properties={property.related} />
          </>
        )}
      </Container>

      <Lightbox
        className="image-gallery"
        isOpen={isGalleryOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={imageGallery}
        currentIndex={currentImageIndex}
        renderPrevButton={() => (
          <IconButton className="image-gallery-button" onClick={gotoPrevious}>
            <ChevronLeftIcon className="color-white" fontSize="large" />
          </IconButton>
        )}
        renderNextButton={() => (
          <IconButton className="image-gallery-button" onClick={gotoNext}>
            <ChevronRightIcon className="color-white" fontSize="large" />
          </IconButton>
        )}
        onClose={handleClose}
        singleClickToZoom
        pageTransitionConfig={{
          from: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
          config: { mass: 1, tension: 320, friction: 32 },
        }}
      />
    </>
  );
};

export default Detail;
