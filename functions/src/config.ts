import * as functions from "firebase-functions";

const config = functions.config();

export const WITEI_ACCOUNT_ID = config.witei.key;
export const WITEI_URL = config.witei.url;

export const EMAIL_USER = config.mail.user;
export const EMAIL_PASS = config.mail.pass;
