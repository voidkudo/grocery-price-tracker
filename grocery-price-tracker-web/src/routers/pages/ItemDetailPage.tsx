import { Box, Chip, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import useParam from "../../hooks/useParam";
import { useNavigate } from "react-router-dom";
import { getItemDetailByName } from "../../firebase/firestore";
import { navigateToItemPage } from "../navigate";
import { FireStoreItemDetailDoc } from "../../types/firestore";
import PriceRecordCard from "../../components/PriceRecordCard";
import PriceCard from "../../components/PriceCard";
import { getAveragePrice, getMaxPrice, getMinPrice } from "../../commons/priceStat";

const ItemDetailPage = () => {
  const [itemDetail, setItemDetail] = useState<FireStoreItemDetailDoc>();

  const itemDetailValue = useParam();
  const navigate = useNavigate();

  const unitPriceRecords = itemDetail?.priceRecords.map(priceRecord => priceRecord.price / priceRecord.qty);

  useEffect(() => {
    if (itemDetailValue === undefined) {
      setItemDetail(undefined);
      return;
    }

    getItemDetailByName(itemDetailValue).then(itemDetail => {
      itemDetail?.priceRecords.sort((a, b) => b.purchaseDate.localeCompare(a.purchaseDate));
      setItemDetail(itemDetail)
    });
  }, [itemDetailValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      {
        itemDetail === undefined ?
          <Box height={'20%'} display={'flex'} alignItems={'center'}>
            <Typography variant='h6' textAlign={'center'}>{itemDetailValue} Not Found</Typography>
          </Box>
          :
          <>
            <Box height={'20%'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
              <Typography variant='h3' textAlign={'center'}>{itemDetailValue}</Typography>
              <Box display={'flex'} justifyContent={'center'}>
                <Chip label={itemDetail.item} variant='outlined' clickable onClick={() => navigateToItemPage(navigate, itemDetail.item)} />
              </Box>
            </Box>
            <Grid container spacing={1} height={'80%'} width={'100%'} justifyContent={'center'} alignItems={'center'} alignContent={'start'} overflow={'auto'}>
              <Grid container spacing={1} size={{ xs: 12, sm: 6 }} alignSelf={'start'} justifyContent={'center'} alignItems={'center'} >
                <Grid size={{ xs: 12, sm: 6 }}>
                  <PriceCard label='Lowest Price' price={getMinPrice(unitPriceRecords!)} backgroundColor='warning.dark' />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <PriceCard label='Highest Price' price={getMaxPrice(unitPriceRecords!)} backgroundColor='error.dark' />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <PriceCard label='All Time Average Price' price={getAveragePrice(unitPriceRecords!)} backgroundColor='success.dark' />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <PriceCard label='Recents Average Price' price={getAveragePrice(unitPriceRecords!.slice(-10))} backgroundColor='info.dark' />
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }} alignSelf={'start'}>
                <Stack spacing={1} width={'100%'} height={'100%'}>
                  {
                    itemDetail.priceRecords.map((priceRecord, index) => (
                      <PriceRecordCard
                        key={index}
                        brand={priceRecord.brand}
                        isTaxable={priceRecord.isTaxable}
                        price={priceRecord.price}
                        qty={priceRecord.qty}
                        storeName={priceRecord.storeName}
                        purchaseDate={priceRecord.purchaseDate}
                      />
                    ))
                  }

                </Stack>
              </Grid>
            </Grid>
          </>
      }
    </Box>
  )
};

export default ItemDetailPage;