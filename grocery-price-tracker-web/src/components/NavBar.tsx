import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { GoogleAuthCredentail } from "../types/googleAuth";
import User from "./navBar/User";
import SearchBar from "./navBar/SearchBar";
import AddRecordButton from "./navBar/AddRecordButton";

interface NavBarProps {
  user?: GoogleAuthCredentail,
  getSearchOption: () => Promise<string[]>,
  handleTitleClick: () => void,
  handleSearch: (searchValue: string) => void,
  handleGoogleLogin: (res: CredentialResponse) => void,
  handleAddRecordClick: () => void,
  handleLogoutClick: () => void,
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
          props.user === undefined ?
            <GoogleLogin onSuccess={props.handleGoogleLogin} useOneTap /> :
            <>
              <AddRecordButton handleClick={props.handleAddRecordClick} />
              <User user={props.user} handleLogoutClick={props.handleLogoutClick} />
            </>
        }
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;