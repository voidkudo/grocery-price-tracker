import { Box, Container } from "@mui/material"
import NavBar from "../../../components/navBar/NavBar";
import { Outlet } from "react-router-dom";

const MainPage = () => {

  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column'}}>
      <NavBar />
      <Container sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
        <Outlet />
      </Container>
    </Box>
  )
};

export default MainPage;