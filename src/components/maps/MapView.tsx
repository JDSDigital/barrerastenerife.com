import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useMemo } from "react";

type Props = {
  lat?: number;
  lng?: number;
  zoom?: number;
  language?: string;
};

const MapView = ({
  lat = 28.029797,
  lng = -16.59129,
  zoom = 18,
  language = "es",
}: Props) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error("Missing Google Maps API Key");
    return null;
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    language,
  });

  const center = useMemo(
    () => ({ lat: Number(lat), lng: Number(lng) }),
    [lat, lng]
  );

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={zoom}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default MapView;
