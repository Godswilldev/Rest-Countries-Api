import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CountriesContext } from "../Context/CountriesContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    color: theme.text,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const { dispatch, search } = useContext(CountriesContext);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Filter by Region
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={search}
          onChange={(evt) =>
            dispatch({
              type: "HANDLE INPUT",
              name: evt.target.name,
              payload: evt.target.value,
            })
          }
          label="Filter by Region"
          name="search"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="america">America</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
          <MenuItem value="australia">Australia</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
