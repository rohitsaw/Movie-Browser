import { Box, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchMovies, redirectToHome } from "../redux/action.js";
import { useRef } from "react";

export default () => {
  const ref = useRef();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate("/");
    dispatch(getSearchMovies(e.target.value));
  };

  const handleHomeRedirect = () => {
    dispatch(redirectToHome());
    navigate("/");
    ref.current.value = "";
  };

  return (
    <Box
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
        inputRef={ref}
        className="textField"
        // style={{ width: "55%" }}
        id="filled-basic"
        variant="filled"
        size="small"
        hiddenLabel
        placeholder="Search"
        onChange={handleChange}
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
