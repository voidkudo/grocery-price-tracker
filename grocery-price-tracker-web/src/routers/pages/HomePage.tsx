import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useEffect, useState } from "react";
import { getCategroies } from "../../data/data";
import { createSearchParams, useNavigate } from "react-router-dom";
import CardButton from "../../components/CardButton";

const HomePage = () => {
  const [categories, setCatecories] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleCategroyClick = (category: string) => {
    navigate({
      pathname: '/category',
      search: createSearchParams({
        value: category
      }).toString()
    });
  };

  useEffect(() => {
    getCategroies().then(data => setCatecories(data));
  }, []);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography>Please Choose any Category</Typography>
      <Grid container spacing={1} maxHeight={'80%'} width={'100%'} justifyContent={'center'} overflow={'auto'}>
        {
          categories.map((category, index) => {
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <CardButton handleClick={() => handleCategroyClick(category)}>{category}</CardButton>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
};

export default HomePage;