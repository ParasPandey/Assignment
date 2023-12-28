import React from "react";
import "../Css/SearchByPrice.css";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const SearchByPrice = () => {
  return (
    <div className="container search-price">
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div className="search-fields">
          <FormControl fullWidth sx={{ m: 1, width: "250px" }} className="input-field origin">
            <InputLabel htmlFor="outlined-adornment-amount">Origin</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              className="text-field"
              startAdornment={
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              }
              label="Amount"
              placeholder="Enter Location"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "250px" }} className="input-field destination">
            <InputLabel htmlFor="outlined-adornment-destination">
              Destination
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-destination"
              className="text-field"
              startAdornment={
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              }
              label="Destination"
              placeholder="Enter Location"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "250px" }} className="input-field">
            <InputLabel htmlFor="outlined-adornment-weight">Weight</InputLabel>
            <OutlinedInput
              id="outlined-adornment-weight"
              className="text-field"
              startAdornment={
                <InputAdornment position="start">
                  <ShoppingBagIcon />
                </InputAdornment>
              }
              label="Weight"
              placeholder="Weight (KG)"
            />
          </FormControl>
        </div>
      </Box>
        <button class="btn btn-check-price">Check Price</button>
    </div>
  );
};

export default SearchByPrice;
