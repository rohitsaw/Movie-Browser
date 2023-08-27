import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TextFieldWithChips from "./textField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { applyFilters as applyFiltersFn } from "../redux/action";

import { useDispatch } from "react-redux";

const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({
  children,
  handleDrawerClose,
  isDrawerOpen,
}) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [sortByValue, handleSortByChange] = useState("popularity.desc");

  const applyFilters = () => {
    dispatch(applyFiltersFn(countries, languages, sortByValue));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        <DrawerHeader
          sx={{
            height: 68,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: 16, paddingLeft: "12px" }}
          >
            Advanced Filtering
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider sx={{ boxShadow: 3 }} />

        <TextFieldWithChips
          placeholder="Languages"
          width={260}
          optionsFor="language"
          onChange={setLanguages}
        />

        <TextFieldWithChips
          placeholder="Region"
          width={260}
          optionsFor="region"
          onChange={setCountries}
        />

        <FormControl sx={{ width: 260, px: "20px", pt: "20px", pb: "10px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Sort By</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="popularity"
            value={sortByValue}
            onChange={(e) => handleSortByChange(e.target.value)}
          >
            <FormControlLabel
              value="popularity.desc"
              control={<Radio />}
              label="Popularity"
            />
            <FormControlLabel
              value="vote_average.desc"
              control={<Radio />}
              label="Rating"
            />
            <FormControlLabel
              value="primary_release_date.asc"
              control={<Radio />}
              label="Primary Release Date"
            />
          </RadioGroup>
        </FormControl>

        <Divider sx={{ boxShadow: 3 }} />

        <Button
          sx={{ width: 260, marginTop: "20px", marginLeft: "10px" }}
          variant="contained"
          onClick={applyFilters}
        >
          Apply Filters
        </Button>

        {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={isDrawerOpen}>{children}</Main>
    </Box>
  );
}
