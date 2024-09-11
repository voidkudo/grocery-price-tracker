import { Search } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { KeyboardEvent, SyntheticEvent, useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { useDispatch } from "react-redux";
import { resetSearchValue, setSearchValue } from "../../stores/slices/searchSlice";
import { getAllGroceryItemNames } from "../../data/data";

const SearchBar = () => {
  const [options, setOptions] = useState<string[]>([]);

  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const _search = (value: string) => {
    navigate({
      pathname: '/item',
      search: createSearchParams({
        value
      }).toString()
    });
  }

  const handleSearch = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      _search(searchValue.trim());
    }
  };

  const handleSearchValueSelect = (_e: SyntheticEvent, value: string | null) => {
    if (value === null) {
      dispatch(resetSearchValue());
    } else {
      _search(value);
      dispatch(setSearchValue(value));
    }
  };

  const handleSearchInput = (_e: SyntheticEvent, value: string) => {
    dispatch(setSearchValue(value));
  };

  useEffect(() => {
    getAllGroceryItemNames().then(data => setOptions(data));
  }, []);

  return (
    <Autocomplete
      freeSolo
      handleHomeEndKeys
      value={searchValue}
      options={options}
      onInputChange={handleSearchInput}
      onChange={handleSearchValueSelect}
      onKeyDown={handleSearch}
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
          variant='outlined'
          placeholder='Search any Grocery Items'
        />
      )}
    />
  )
};

export default SearchBar;