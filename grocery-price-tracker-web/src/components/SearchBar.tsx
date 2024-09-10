import { Search } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { KeyboardEvent, SyntheticEvent, useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { useDispatch } from "react-redux";
import { resetSearchValue, setSearchValue } from "../stores/slices/searchSlice";
import { getGroceryItemNames } from "../data/data";

const SearchBar = () => {
  const [items, setItems] = useState<string[]>([]);

  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const _search = (value: string) => {
    console.log(value);
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
    getGroceryItemNames().then(data => setItems(data));
  }, []);

  return (
    <Autocomplete
      freeSolo
      handleHomeEndKeys
      value={searchValue}
      options={items}
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