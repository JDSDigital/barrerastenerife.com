import List from "components/properties/List";
import React from "react";
import { useGetProperties } from "hooks/useGetProperties";
import { useTranslation } from "hooks/useTranslation";

export const FeaturedPropertiesSection = () => {
  const { properties, status } = useGetProperties({});
  const { t } = useTranslation();

  return (
    <List
      status={status}
      properties={properties?.slice(0, 6)}
      title={t("properties.featured")}
    />
  );
};
