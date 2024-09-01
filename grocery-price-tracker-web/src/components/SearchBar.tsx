import { Search } from "@mui/icons-material";
import { colors, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";


const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInput = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);


  return (
    <TextField
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              <Search/>
            </InputAdornment>
          ),
        },
      }}
      fullWidth
      variant='outlined'
      placeholder='Search any groceries or stores'
      value={searchValue}
      onChange={handleSearchInput}
    />

  )
};

export default SearchBar;