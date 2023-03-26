import { Link } from "gatsby-plugin-react-i18next";
import { Property } from "models/Property";
import PropertyDescription from "./PropertyDescription";
import React from "react";

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <Link to={`/property/?id=${property.identifier}`}>
      <div className="property-card-media">
        <img
          src={property.pictures[0]}
          alt={property.title || "Property title"}
          className="img-responsive crop-center"
        />
        <div className="property-card-overlay">
          <PropertyDescription
            price={
              property.selling ? property.selling_cost : property.renting_cost
            }
            title={property.town}
            address={property.street}
          />
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
