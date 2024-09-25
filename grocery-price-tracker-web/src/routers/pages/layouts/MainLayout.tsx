import { Box, Container } from "@mui/material"
import NavBar from "../../../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { navigateToCreateItemPage, navigateToHomePage, navigateToItemPage } from "../../navigate";
import { resetUser, setUser } from "../../../stores/slices/userSlice";
import { getAllItemOptions } from "../../../firebase/firestore";
import { googleSignIn, googleSignOut } from "../../../firebase/googleAuth";

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

  const handleSignIn = () => {
    googleSignIn().then(user => {
      if (user !== undefined) {
        dispatch(setUser(user));
      }
    })
  };

  const handleAddRecordClick = () => {
    navigateToCreateItemPage(navigate);
  };

  const handleSignOutClick = () => {
    googleSignOut().then(isSuccess => {
      if (isSuccess) {
        dispatch(resetUser());
      }
    })
    
  };

  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <NavBar
        user={user}
        getSearchOption={getAllItemOptions}
        handleTitleClick={handleTitleClick}
        handleSearch={handleSearch}
        handleSignInClick={handleSignIn}
        handleAddRecordClick={handleAddRecordClick}
        handleSignOutClick={handleSignOutClick}
      />
      <Container sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
        <Outlet />
      </Container>
    </Box>
  )
};

export default MainLayout;