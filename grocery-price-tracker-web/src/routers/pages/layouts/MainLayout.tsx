import { Box, Container } from "@mui/material"
import NavBar from "../../../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { navigateToCreateItemPage, navigateToHomePage, navigateToItemPage } from "../../navigate";
import { CredentialResponse } from "@react-oauth/google";
import { GoogleAuthCredentail } from "../../../types/googleAuth";
import { jwtDecode } from "jwt-decode";
import { resetUser, setUser } from "../../../stores/slices/userSlice";
import { getAllItemOptions } from "../../../firebase/firestore";

const MainLayout = () => {
  const user = useSelector((state: RootState) => state.user.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleTitleClick = () => {
    navigateToHomePage(navigate);
  };

  const handleSearch = (searchValue: string) => {
    navigateToItemPage(navigate, searchValue);
  }

  const handleGoogleLogin = (res: CredentialResponse) => {
    if (res.credential !== undefined) {
      const credentail = jwtDecode<GoogleAuthCredentail>(res.credential);
      dispatch(setUser(credentail));
    }
  };

  const handleAddRecordClick = () => {
    navigateToCreateItemPage(navigate);
  };

  const handleLogoutClick = () => {
    dispatch(resetUser());
  };

  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <NavBar
        user={user}
        getSearchOption={getAllItemOptions}
        handleTitleClick={handleTitleClick}
        handleSearch={handleSearch}
        handleGoogleLogin={handleGoogleLogin}
        handleAddRecordClick={handleAddRecordClick}
        handleLogoutClick={handleLogoutClick}
      />
      <Container sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
        <Outlet />
      </Container>
    </Box>
  )
};

export default MainLayout;