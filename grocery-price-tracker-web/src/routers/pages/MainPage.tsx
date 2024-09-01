import { Box, Container } from "@mui/material"
import NavBar from "../../components/NavBar";

const MainPage = () => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <NavBar />
      <Container maxWidth={false} sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      </Container>
    </Box>
  )
};

export default MainPage;