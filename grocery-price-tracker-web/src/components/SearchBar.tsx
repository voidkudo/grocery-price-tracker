import { Search } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import { groceryItemData } from "../data/data";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (_e: SyntheticEvent, value: string) => {
    setSearchParams({...searchParams, value})
  };

  return (
    <Autocomplete
      freeSolo
      disableClearable
      handleHomeEndKeys
      options={groceryItemData.map(item => item.name)}
      onChange={handleSearch}
      renderInput={(params) => (
        <TextField
          {...params}
          slotProps={{
            input: {
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              ),
            },
          }}
          fullWidth
          variant='outlined'
          placeholder='Search any Grocery Items'
        />
      )}
    />
  )
};

export default SearchBar;