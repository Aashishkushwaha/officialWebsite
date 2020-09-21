import { Typography } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const color = style("mode", {
  light: "grey",
  dark: "#EEE",
});

export const StyledTypography = styled(Typography)`
  color: ${color};
`;
