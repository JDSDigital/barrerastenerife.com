import { Grid, Container } from "@material-ui/core"
import React from "react"
import PropertyCard from "./PropertyCard"
import { propertyImages } from "../../qraphql/queries"

interface Props {
  featured?: boolean
  title?: string
}

const Properties: React.FC<Props> = ({
  featured = false,
  title = "Propiedades",
}) => {
  const images = propertyImages()

  const findImage = (image: string) =>
    Object.values(images).find(srcImage =>
      srcImage.childImageSharp.fluid.src.endsWith(image)
    ).childImageSharp.fluid

  const properties = [
    {
      id: 0,
      price: "€ 100.000",
      title: "Propiedad Bonita",
      address: "Los Abrigos - Granadilla de Abona",
      image: findImage("property1.jpg"),
    },
    {
      id: 1,
      price: "€ 200.000",
      title: "Casa Grande",
      address: "Los Abrigos - Granadilla de Abona",
      image: findImage("property2.jpg"),
    },
    {
      id: 2,
      price: "€ 500.000",
      title: "Piso Cómodo",
      address: "Los Abrigos - Granadilla de Abona",
      image: findImage("property3.jpg"),
    },
    {
      id: 3,
      price: "€ 350.000",
      title: "Ático Espacioso",
      address: "Los Abrigos - Granadilla de Abona",
      image: findImage("property4.jpg"),
    },
  ]

  return (
    <Container>
      <Grid container spacing={3} className="properties-container">
        <Grid item xs={12}>
          <h2 className="properties-container-title">
            {featured ? "Propiedades Destacadas" : title}
          </h2>
        </Grid>
        {properties.map(property => (
          <Grid
            key={`property-${property.id}`}
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
          >
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Properties
