import { Search } from "@mui/icons-material";
import { Autocomplete, IconButton, InputAdornment, TextField } from "@mui/material";
import { KeyboardEvent, SyntheticEvent, useEffect, useState } from "react";

interface SearchBarProps {
  getItemOptions: () => Promise<string[]>,
  handleSearch: (value: string) => void,
};

const SearchBar = (props: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState<string[]>([]);

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      props.handleSearch(searchValue.trim());
    }
  };

  const handleSearchValueSelect = (_e: SyntheticEvent, value: string | null) => {
    console.log(value)
    if (value === null) {
      setSearchValue('');
    } else {
      setSearchValue(value);
      props.handleSearch(value);
    }
  };

  const handleSearchInput = (_e: SyntheticEvent, value: string) => {
    setSearchValue(value);
  };

  const handleSearchIconClick = () => {
    props.handleSearch(searchValue.trim());
  };

  useEffect(() => {
    props.getItemOptions().then(options => setOptions(options));
  }, []);

  return (
    <Autocomplete
      disableClearable
      value={searchValue}
      options={options}
      noOptionsText='No Item Matches'
      onInputChange={handleSearchInput}
      onChange={handleSearchValueSelect}
      onKeyDown={handleSearchKeyDown}
      sx={{ width: '50%', minWidth: '300px'}}
      renderInput={(params) => (
        <TextField
          {...params}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleSearchIconClick} edge='end'>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          variant='outlined'
          placeholder='Search any Grocery Items'
        />
      )}
    />
  )
};

export default SearchBar;