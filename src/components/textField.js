import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { useSelector } from "react-redux";

export default ({ placeholder, width, optionsFor, onChange }) => {
  const { options } = useSelector((state) => ({
    options:
      optionsFor === "country"
        ? state.allCountries.map(
            (each) => each.english_name + " - " + each.iso_3166_1
          )
        : state.allLanguages.map(
            (each) => each.english_name + " - " + each.iso_639_1
          ),
  }));

  return (
    <>
      <Box sx={{ width: width }}>
        <Autocomplete
          clearIcon={false}
          options={[...options]}
          multiple
          onChange={(event, value) => onChange(value)}
          renderTags={(value, props) => {
            return value.map((option, index) => (
              <Chip label={option} {...props({ index })} />
            ));
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              size="small"
              className="textField"
              id="filled-basic"
              variant="filled"
              hiddenLabel
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                sx: {
                  borderRadius: 2,
                  my: "10px",
                  mx: "10px",
                },
              }}
            />
          )}
        />
      </Box>
    </>
  );
};
