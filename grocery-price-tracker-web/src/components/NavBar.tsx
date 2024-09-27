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
    <AppBar position='sticky'>
      <Toolbar>
        <Button variant='text' onClick={props.handleTitleClick}>
          <Typography variant='h6'>Grocery Price Tracker</Typography>
        </Button>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <SearchBar getItemOptions={props.getSearchOption} handleSearch={props.handleSearch} />
        </Box>
        <AddRecordButton handleClick={props.handleAddRecordClick} isHidden={props.user === undefined} />
        <Account user={props.user} handleSignInClick={props.handleSignInClick} handleSignOutClick={props.handleSignOutClick} />
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;