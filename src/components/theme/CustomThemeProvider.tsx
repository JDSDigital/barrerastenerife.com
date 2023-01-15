import React, { ReactNode } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeConfig from "./theme.json";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme(ThemeConfig);

type CustomThemeProviderProps = {
  children: ReactNode;
};

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
