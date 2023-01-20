import { Card } from "@material-ui/core";
import { Link } from "gatsby-plugin-react-i18next";
import { Property } from "models/Property";
import PropertyDescription from "./PropertyDescription";
import PropertyFooter from "./PropertyFooter";
import React from "react";

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <Link to={`/property/?id=${property.identifier}`}>
      <Card>
        <div className="property-card-media">
          <img
            src={property.pictures[0]}
            alt={property.title || "Property title"}
            className="img-responsive crop-center"
          />
        </div>
        <PropertyDescription
          price={
            property.selling ? property.selling_cost : property.renting_cost
          }
          title={property.zone ? property.zone : property.town}
          address={property.town}
        />
        <PropertyFooter
          area={property.area}
          bathrooms={property.bathrooms}
          bedrooms={property.bedrooms}
        />
      </Card>
    </Link>
  );
};

export default PropertyCard;
