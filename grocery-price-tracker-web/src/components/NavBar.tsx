import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthCredentail } from "../types/googleOAuth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { setUser } from "../stores/slices/userSlice";
import { useNavigate } from "react-router-dom";
import User from "./User";
import SearchBar from "./SearchBar";

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

  return (
    <AppBar position='static' sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Button onClick={handleTitleClick}>
          <Typography variant='h6' >Grocery Price Tracker</Typography>
        </Button>
        <Box sx={{ flexGrow: 1, padding: '0 1em' }}>
          <SearchBar />
        </Box>
        {
          user === undefined ?
            <GoogleLogin onSuccess={handleGoogleLogin} /> :
            <User />
        }
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;