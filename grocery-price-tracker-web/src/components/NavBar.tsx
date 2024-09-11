import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthCredentail } from "../types/googleOAuth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { resetUser, setUser } from "../stores/slices/userSlice";
import { useNavigate } from "react-router-dom";
import User from "./navBar/User";
import SearchBar from "./navBar/SearchBar";
import AddRecordButton from "./navBar/AddRecordButton";
import { navigateToItemPage } from "../routers/navigate";

const NavBar = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  const handleGoogleLogin = (res: CredentialResponse) => {
    console.log(res);
    if (res.credential !== undefined) {
      const credentail = jwtDecode<GoogleOAuthCredentail>(res.credential);
      console.log(credentail);
      dispatch(setUser(credentail));
    }
  };

  const handleLogout = () => {
    dispatch(resetUser());
  };

  const handleSearch = (searchValue: string) => {
    navigateToItemPage(navigate, searchValue);
  }

  const handleAddRecord = () => {

  };


  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Button onClick={handleTitleClick}>
          <Typography variant='h6' >Grocery Price Tracker</Typography>
        </Button>
        <Box sx={{ flexGrow: 1, padding: '0 1em' }}>
          <SearchBar handleSearch={handleSearch}/>
        </Box>
        {
          user === undefined ?
            <GoogleLogin onSuccess={handleGoogleLogin} useOneTap /> :
            <>
              <AddRecordButton handleAddRecord={handleAddRecord} />
              <User user={user} handleLogout={handleLogout}/>
            </>
        }
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;