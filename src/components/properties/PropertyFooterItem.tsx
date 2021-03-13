import React from "react";
import { Tooltip, Typography } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";

interface FooterItemProps {
  detail?: boolean;
  title: string;
  value: number;
  component: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const FooterItem: React.FC<FooterItemProps> = ({
  detail,
  title,
  value,
  component,
}) => {
  const Component = component;

  if (detail === true) {
    return (
      <span>
        <span className="flex-row">
          <Typography color="textSecondary">
            <Component className="mr-3" />
          </Typography>
          <Typography>{value}</Typography>
        </span>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
      </span>
    );
  }

  return (
    <Tooltip title={title} placement="top">
      <span className="flex-center">
        <Component className="mr-3" />
        {value}
      </span>
    </Tooltip>
  );
};

export default FooterItem;
