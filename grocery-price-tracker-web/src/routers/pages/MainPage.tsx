import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"

const MainPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>Grocery Price Tracker</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ flexGrow: 1 }}>
      </Container>
    </Box>
  )
};

export default MainPage;