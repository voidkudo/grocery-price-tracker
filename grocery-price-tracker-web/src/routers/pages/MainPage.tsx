import { AppBar, Box, Button, Container, FormControl, InputAdornment, InputLabel, OutlinedInput, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log(searchValue);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>Grocery Price Tracker</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FormControl fullWidth variant='outlined'>
          <InputLabel>Enter Product Name</InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position='end'>
                <Button
                  variant='contained'
                  startIcon={<SearchIcon />}
                  onClick={handleSearch}>
                  SEARCH
                </Button>
              </InputAdornment>
            }
            label='Enter Product Name'
            value={searchValue}
            onKeyDown={handleEnterKeyPress}
            onChange={(e) => {setSearchValue(e.target.value)}}
          />
        </FormControl>
      </Container>
    </Box>
  )
};

export default MainPage;