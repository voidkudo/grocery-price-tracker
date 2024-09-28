import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import useParam from "../../hooks/useParam";
import { useNavigate } from "react-router-dom";
import { getItemDetailOptionsByItem } from "../../firebase/firestore";
import CardButton from "../../components/CardButton";
import { navigateToItemDetailPage } from "../navigate";

const ItemPage = () => {
  const [itemDetailOptions, setItemDetailOptions] = useState<string[]>([]);

  const itemValue = useParam();
  const navigate = useNavigate();

  useEffect(() => {
    if (itemValue === undefined) {
      setItemDetailOptions([]);
      return;
    }
    
    getItemDetailOptionsByItem(itemValue).then(itemDetails => setItemDetailOptions(itemDetails));
  }, [itemValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h4'>{itemValue}'s Details</Typography>
      <Grid container spacing={1} height={'80%'} width={'100%'} padding={'5% 0'} justifyContent={'center'} alignItems={'center'} alignContent={'start'} overflow={'auto'}>
        {
          itemDetailOptions.map((itemDetail, index) => {
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <CardButton handleClick={() => navigateToItemDetailPage(navigate, itemDetail)}>{itemDetail}</CardButton>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
};

export default ItemPage;