import { Box, TextField } from "@mui/material";
import { memo, useRef } from "react";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import PersistentDrawerLeft from "./sidebar";

import _ from "lodash";

export default memo(
  ({ handleChange, handleHomeRedirect, handleDrawerOpen, isDrawerOpen }) => {
    const inputRef = useRef();

    const handleClickOnHome = () => {
      handleHomeRedirect();
      inputRef.current.value = "";
    };

    return (
      <Box
        data-testid="header"
        sx={{
          height: 48,
          py: "10px",
          px: "18px",
          boxShadow: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ ...(isDrawerOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        <TextField
          data-testid="textfield"
          inputRef={inputRef}
          className="textField"
          id="filled-basic"
          variant="filled"
          size="small"
          hiddenLabel
          placeholder="Search"
          onChange={_.debounce(handleChange, 500)}
          sx={{
            marginLeft: "20px",
          }}
          InputProps={{
            disableUnderline: true,
            sx: { borderRadius: 2 },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <IconButton
          sx={{
            marginLeft: "auto",
          }}
          onClick={handleClickOnHome}
        >
          <HomeIcon style={{ color: "#4A4A4A" }} />
        </IconButton>
      </Box>
    );
  }
);
