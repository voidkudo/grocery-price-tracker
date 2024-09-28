import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useEffect, useState } from "react";
import CardButton from "../../components/CardButton";
import { navigateToCategoryPage } from "../navigate";
import { useNavigate } from "react-router-dom";
import { getCategoryOptions } from "../../firebase/firestore";

const HomePage = () => {
  const [categoryOptions, setCatecoryOptions] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCategoryOptions().then(options => setCatecoryOptions(options));
  }, []);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Box height={'20%'} display={'flex'} alignItems={'center'}>
        <Typography variant='h4'>Find Items By Category</Typography>
      </Box>
      <Grid container spacing={1} height={'80%'} width={'100%'} justifyContent={'center'} alignItems={'center'} alignContent={'start'} overflow={'auto'}>
        {
          categoryOptions.map((category, index) => {
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <CardButton handleClick={() => navigateToCategoryPage(navigate, category)}>{category}</CardButton>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
};

export default HomePage;