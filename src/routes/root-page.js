import { Outlet } from "react-router-dom";
import Header from "../components/pageHeader.js";

import "./page.css";

// import { MuiThemeProvider, createTheme } from "@mui/core/styles";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#4A4A4A",
//     },
//     secondary: {
//       main: "#9B9B9B",
//     },
//   },
// });

export default () => {
  return (
    <>
      {/* <MuiThemeProvider theme={theme}> */}
      <Header />
      <Outlet />
      {/* </MuiThemeProvider> */}
    </>
  );
};
