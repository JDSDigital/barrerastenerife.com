import React from "react";
import { Button, styled } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";
import { useTranslation } from "hooks/useTranslation";

interface LightboxToolbarButtonsProps {
  activeType: "photo" | "video";
  onSwitch: (type: "photo" | "video") => void;
}

const LightboxToolbarButtons = ({
  activeType,
  onSwitch,
}: LightboxToolbarButtonsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <ToolbarButton
        className={activeType === "photo" ? "active" : ""}
        onClick={() => onSwitch("photo")}
      >
        <ImageIcon />
        {t("properties.photos") || "Fotos"}
      </ToolbarButton>
      <ToolbarButton
        className={activeType === "video" ? "active" : ""}
        onClick={() => onSwitch("video")}
      >
        <VideocamIcon />
        {t("properties.videos") || "Vídeos"}
      </ToolbarButton>
    </>
  );
};

export default LightboxToolbarButtons;

const ToolbarButton = styled(Button)({
  color: "white",
  marginRight: "8px",
  textUnderlineOffset: "8px",
  textDecorationThickness: "2px",
  "&.active": {
    textDecoration: "underline",
  },
  "& svg": {
    marginRight: "4px",
  },
});
