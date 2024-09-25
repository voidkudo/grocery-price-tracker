import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Account from "./navBar/Account";
import SearchBar from "./navBar/SearchBar";
import AddRecordButton from "./navBar/AddRecordButton";
import { User } from "firebase/auth";

interface NavBarProps {
  user?: User,
  getSearchOption: () => Promise<string[]>,
  handleTitleClick: () => void,
  handleSearch: (searchValue: string) => void,
  handleSignInClick: () => void,
  handleAddRecordClick: () => void,
  handleSignOutClick: () => void,
}

const NavBar = (props: NavBarProps) => {

  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Button onClick={props.handleTitleClick}>
          <Typography variant='h6' >Grocery Price Tracker</Typography>
        </Button>
        <Box sx={{ flexGrow: 1, padding: '0 10em' }}>
          <SearchBar getItemOptions={props.getSearchOption} handleSearch={props.handleSearch} />
        </Box>
        {
          props.user === undefined ||
          <AddRecordButton handleClick={props.handleAddRecordClick} />
        }
        <Account user={props.user} handleSignInClick={props.handleSignInClick} handleSignOutClick={props.handleSignOutClick} />
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;