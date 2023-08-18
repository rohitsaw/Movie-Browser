import { Box, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

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
        style={{ width: '55%' }}
        id="filled-basic"
        variant="filled"
        size="small"
        hiddenLabel
        placeholder="Search"
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
      <IconButton onClick={() => navigate("/")}>
        <HomeIcon style={{ color: "#4A4A4A" }} />
      </IconButton>
    </Box>
  );
};
