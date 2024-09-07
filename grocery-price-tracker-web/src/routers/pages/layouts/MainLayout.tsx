import { Box, Container } from "@mui/material"
import NavBar from "../../../components/NavBar";
import { Outlet } from "react-router-dom";

const MainPage = () => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <NavBar />
      <Container sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
        <Outlet />
      </Container>
    </Box>
  )
};

export default MainPage;