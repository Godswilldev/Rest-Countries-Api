import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CountriesContext } from "../Context/CountriesContext";
import { ThemeContext } from "../Context/ThemeContext";

import styled from "styled-components";

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

const Wrapper = styled.div`
  /* color: #fff;
  #demo-simple-select-outlined-label {
    font-size: 1.3rem;
  } */
`;

export default function Dropdown() {
  const classes = useStyles();
  const { dispatch, search } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          style={{
            color: theme === "light" ? "#111517" : "#ffffff",
            fontSize: "1.3rem",
          }}
        >
          Filter by Region
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Filter by Region"
          name="search"
          value={search}
          onChange={(evt) =>
            dispatch({
              type: "HANDLE INPUT",
              name: evt.target.name,
              payload: evt.target.value,
            })
          }
          style={{
            color: theme === "light" ? "#111517" : "#ffffff",
            // fontSize: "1.3rem",
            backgroundColor: theme === "light" ? "#fafafa" : "#2b3945",
            boxShadow: "0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3)",
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="america">America</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
          <MenuItem value="australia">Australia</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
}
