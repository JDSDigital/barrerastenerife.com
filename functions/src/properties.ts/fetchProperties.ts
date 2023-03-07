import * as functions from "firebase-functions";

import { WITEI_ACCOUNT_ID, WITEI_URL } from "../config";

export const fetchProperties = async (params: { [key: string]: unknown }) => {
  const urlParams = new URLSearchParams();

  Object.entries(params).map(([key, value]) =>
    Array.isArray(value)
      ? value.map(item => urlParams.append(key, item))
      : urlParams.append(key, value as string)
  );

  const url = `${WITEI_URL}?${urlParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${WITEI_ACCOUNT_ID}`,
    },
  })
    .then(res => res.json())
    .catch(error => {
      functions.logger.error("Error", error);

      return error;
    });

  return response;
};
