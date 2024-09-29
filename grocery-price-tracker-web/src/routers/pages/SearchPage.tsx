import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardButton from "../../components/CardButton";
import { useEffect, useState } from "react";
import useParam from "../../hooks/useParam";
import { useNavigate } from "react-router-dom";
import { navigateToItemDetailPage } from "../navigate";
import { getAllItemDetailOptions } from "../../firebase/firestore";

const SearchPage = () => {
  const [itemDetailOptions, setItemDetailOptions] = useState<string[]>([]);

  const searchValue = useParam();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue === undefined) {
      setItemDetailOptions([]);
      return;
    }

    getAllItemDetailOptions().then(itemDetails => {
      itemDetails = itemDetails.filter(itemDetail => itemDetail.toUpperCase().includes(searchValue.trim().toUpperCase()));
      setItemDetailOptions(itemDetails);
    })
  }, [searchValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h4' textAlign={'center'}>Search Result: {searchValue}</Typography>
      <Grid container spacing={1} height={'80%'} width={'100%'} padding={'5% 0'} justifyContent={'center'} alignItems={'center'} alignContent={'start'} overflow={'auto'}>
        {
          itemDetailOptions.length === 0 ?
            <Grid>
              <Typography variant='h6' textAlign={'center'}>Search Result Not Found</Typography>
            </Grid> :
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

export default SearchPage;