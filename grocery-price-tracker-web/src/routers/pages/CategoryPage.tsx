import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import CardButton from "../../components/CardButton";
import useParam from "../../hooks/useParam";
import { navigateToItemPage } from "../navigate";
import { useNavigate } from "react-router-dom";
import { getItemOptionsByCategory } from "../../firebase/firestore";

const CategoryPage = () => {
  const [itemOptions, setItemOptions] = useState<string[]>([]);

  const categoryValue = useParam();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (categoryValue === undefined) {
      setItemOptions([]);
      return;
    }
    getItemOptionsByCategory(categoryValue).then(items => setItemOptions(items));
  }, [categoryValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h4'>Items in {categoryValue}</Typography>
      <Grid container spacing={1} height={'80%'} width={'100%'} padding={'5% 0'} justifyContent={'center'} alignItems={'center'} alignContent={'start'} overflow={'auto'}>
        {
          itemOptions.map((item, index) => {
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <CardButton handleClick={() => navigateToItemPage(navigate, item)}>{item}</CardButton>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
};

export default CategoryPage;