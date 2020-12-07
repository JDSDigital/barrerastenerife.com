import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import List from "../../components/properties/List";
import SearchForm from "../../components/properties/SearchForm";
import { propertyImages } from "../../qraphql/queries";

const Properties: React.FC<PageProps> = () => {
  const title = "Propiedades en venta";
  const images = propertyImages();

  const findImage = (image: string) =>
    Object.values(images).find(srcImage =>
      srcImage.childImageSharp.fluid.src.endsWith(image)
    ).childImageSharp.fluid;

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
  ];

  return (
    <Layout>
      <SEO title={title} />
      <SearchForm />
      <List title={title} properties={properties} />
    </Layout>
  );
};

export default Properties;