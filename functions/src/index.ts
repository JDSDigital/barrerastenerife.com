import * as functions from "firebase-functions";

import { EMAIL_USER } from "./config";
import { createTemplate } from "./email/createTemplate";
import { createTransport } from "./email/createTransport";
import { fetchProperties } from "./properties.ts/fetchProperties";

export const getPropertyList = functions.https.onCall(async data => {
  const response = await fetchProperties(data);

  return response;
});

export const getProperty = functions.https.onCall(async data => {
  const response = await fetchProperties(data);
  const [property] = response.results;

  const pictures = property.pictures.map((picture: string) => {
    return {
      original: picture,
      thumbnail: picture,
    };
  });

  const related = await fetchProperties({
    zone: property.zone,
    town: property.town,
    buyop: property.selling ? "sell" : "rent",
    min_price: property.selling
      ? property.selling_cost - 100000
      : property.renting_cost - 100,
    max_price: property.selling
      ? property.selling_cost + 100000
      : property.renting_cost + 100,
  });

  return {
    ...property,
    pictures,
    related:
      related.results.length > 4
        ? related.results.slice(0, 4)
        : related.results,
  };
});

export const sendMail = functions.https.onCall(async data => {
  const transporter = createTransport();

  transporter.verify((error, success) => {
    if (error) {
      functions.logger.error("Verify Error", error);
    }
  });

  const mailOptions = {
    from: `Inmobiliaria Barreras <${EMAIL_USER}>`,
    to: "inmobiliariabarreras@gmail.com",
    subject: "Correo de prueba",
    html: createTemplate({
      name: data.name,
      email: data.email,
      message: data.message,
    }),
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      functions.logger.error("Error", error);
      return error;
    }
    return "enviado";
  });
});
