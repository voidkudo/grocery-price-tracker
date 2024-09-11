import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { getGroceryItemNamesByCategory } from "../../data/data";
import CardButton from "../../components/CardButton";

const CategoryPage = () => {
  const [items, setItems] = useState<string[]>([]);

  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const categoryValue = params.get('value') ?? '';
  

  const handleItemClick = (item: string) => {
    navigate({
      pathname: '/item',
      search: createSearchParams({
        value: item
      }).toString()
    });
  };

  useEffect(() => {
    getGroceryItemNamesByCategory(categoryValue).then(data => setItems(data));
  }, [categoryValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Grid container spacing={1} height={'80%'} width={'100%'} justifyContent={'center'} overflow={'auto'}>
        {
          items.map((item, index) => {
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <CardButton handleClick={() => handleItemClick(item)}>{item}</CardButton>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
};

export default CategoryPage;