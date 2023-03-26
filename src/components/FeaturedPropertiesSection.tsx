import List from "./properties/List";
import React from "react";
import { useGetProperties } from "hooks/useGetProperties";

export const FeaturedPropertiesSection = () => {
  const { properties, status } = useGetProperties({});

  return (
    <List
      status={status}
      properties={properties?.slice(0, 6)}
      title="Featured properties"
    />
  );
};
