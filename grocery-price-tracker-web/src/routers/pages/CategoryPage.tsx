import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { getGroceryItemNamesByCategory } from "../../data/data";
import CardButton from "../../components/CardButton";
import useParam from "../../hooks/useParam";
import { navigateToItemPage } from "../navigate";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [itemNames, setItemNames] = useState<string[]>([]);

  const categoryValue = useParam();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (categoryValue === undefined) {
      setItemNames([]);
      return;
    }
    getGroceryItemNamesByCategory(categoryValue).then(data => setItemNames(data));
  }, [categoryValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Grid container spacing={1} height={'80%'} width={'100%'} justifyContent={'center'} overflow={'auto'}>
        {
          itemNames.map((itemName, index) => {
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <CardButton handleClick={() => navigateToItemPage(navigate, itemName)}>{itemName}</CardButton>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
};

export default CategoryPage;