import { Box, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import _ from "lodash";

export default ({ inputRef, handleChange, handleHomeRedirect }) => {
  return (
    <Box
      data-testid="header"
      sx={{
        height: 48,
        py: "10px",
        px: "18px",
        boxShadow: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
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
      <IconButton onClick={handleHomeRedirect}>
        <HomeIcon style={{ color: "#4A4A4A" }} />
      </IconButton>
    </Box>
  );
};
