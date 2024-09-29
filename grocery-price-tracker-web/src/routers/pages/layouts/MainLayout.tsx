import { Box, Container, Dialog } from "@mui/material"
import NavBar from "../../../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { navigateToCreateItemPage, navigateToHomePage, navigateToSearchPage } from "../../navigate";
import { resetUser, setUser } from "../../../stores/slices/userSlice";
import { getAllItemDetailOptions } from "../../../firebase/firestore";
import { googleSignIn, googleSignOut } from "../../../firebase/googleAuth";
import MediaQuery from "react-responsive";
import BottomNavBar from "../../../components/BottomNavBar";
import SearchBar from "../../../components/navBar/SearchBar";
import { useState } from "react";

const MainLayout = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleTitleClick = () => {
    navigateToHomePage(navigate);
  };

  const handleHomeClick = () => {
    navigateToHomePage(navigate);
  };

  const handleSearch = (searchValue: string) => {
    navigateToSearchPage(navigate, searchValue);
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

  const handleMobileSearchOpen = () => {
    setIsMobileSearchOpen(true);
  };

  const handleMobileSearchClose = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <Box sx={{ height: '100dvh', width: '100dvw', display: 'flex', flexDirection: 'column', backgroundColor: 'palette.background.default' }}>
      <MediaQuery minWidth={768}>
        <NavBar
          user={user}
          getSearchOption={getAllItemDetailOptions}
          handleTitleClick={handleTitleClick}
          handleSearch={handleSearch}
          handleSignInClick={handleSignIn}
          handleAddRecordClick={handleAddRecordClick}
          handleSignOutClick={handleSignOutClick}
        />
      </MediaQuery>
      <Container sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
        <Outlet />
      </Container>
      <MediaQuery maxWidth={767}>
        <BottomNavBar
          user={user}
          handleHomeClick={handleHomeClick}
          handleSearchClick={handleMobileSearchOpen}
          handleSignInClick={handleSignIn}
          handleAddRecordClick={handleAddRecordClick}
          handleSignOutClick={handleSignOutClick}
        />
        <Dialog open={isMobileSearchOpen} onClose={handleMobileSearchClose}>
        <SearchBar getItemOptions={getAllItemDetailOptions} handleSearch={handleSearch} />
      </Dialog>
      </MediaQuery>
    </Box>
  )
};

export default MainLayout;