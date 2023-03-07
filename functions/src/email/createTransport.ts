import * as nodemailer from "nodemailer";

import { EMAIL_PASS, EMAIL_USER } from "../config";

export const createTransport = () =>
  nodemailer.createTransport({
    host: "mail.geknology.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
