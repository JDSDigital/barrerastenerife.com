import React, { FC } from "react";

import { Button } from "@material-ui/core";
import Field from "./Field";
import { sendMail } from "../../utils";
import { useTranslation } from "hooks/useTranslation";

type FormProps = {
  fullWidth?: boolean;
  id?: string;
};

const Form: FC<FormProps> = ({ fullWidth = false, id }) => {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = React.useState(false);

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const handleMail = () => {
    if (state.name !== "" && state.email !== "" && state.message !== "") {
      sendMail({
        ...state,
        message: id
          ? `Identificador de la propiedad: ${id}\n\n`
          : state.message,
      });
      setSent(true);
      setState({ name: "", email: "", message: "" });
    } else {
      // TODO: Add form validation and error handling
    }
  };

  return (
    <div className={`${!fullWidth && "contact-form about-title"}`}>
      {!fullWidth && (
        <>
          <h1>{t("contact.title")}</h1>
          <h3>{t("contact.subtitle")}</h3>
        </>
      )}
      <form>
        <Field
          id="name"
          label={t("contact.form.name")}
          onChange={handleChange}
          disabled={sent}
          value={state.name}
        />
        <Field
          id="email"
          label={t("contact.form.email")}
          onChange={handleChange}
          disabled={sent}
          value={state.email}
        />
        <Field
          id="message"
          label={t("contact.form.message")}
          onChange={handleChange}
          disabled={sent}
          value={state.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          classes={{ root: "mb-5 mt-5 color-white" }}
          onClick={handleMail}
          disabled={sent}
        >
          {sent ? t("contact.form.sent") : t("contact.form.send")}
        </Button>
      </form>
    </div>
  );
};

export default Form;
