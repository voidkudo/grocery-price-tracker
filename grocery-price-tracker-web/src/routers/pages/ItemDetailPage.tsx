import { Box, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useParam from "../../hooks/useParam";
import { useNavigate } from "react-router-dom";
import { getItemDetailByName } from "../../firebase/firestore";
import { navigateToItemPage } from "../navigate";
import { FireStoreItemDetailDoc } from "../../types/firestore";
import PriceRecordCard from "../../components/PriceRecordCard";

const ItemDetailPage = () => {
  const [itemDetail, setItemDetail] = useState<FireStoreItemDetailDoc>();

  const itemDetailValue = useParam();
  const navigate = useNavigate();

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
          <Typography variant='h6'>{itemDetailValue} Not Found</Typography> :
          <>
            <Typography variant='h3'>{itemDetailValue}</Typography>
            <Chip label={itemDetail.item} variant='outlined' clickable onClick={() => navigateToItemPage(navigate, itemDetail.item)} />
            <Box sx={{ width: '100%', height: '80%', display: 'flex' }}>
              <Box sx={{ width: '50%', height: '100%' }} />
              <Stack spacing={1} width={'50%'} height={'100%'} overflow={'auto'}>
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
            </Box>
          </>
      }
    </Box>
  )
};

export default ItemDetailPage;