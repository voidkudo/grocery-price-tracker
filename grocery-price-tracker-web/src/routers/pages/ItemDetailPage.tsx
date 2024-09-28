import { Box, Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useParam from "../../hooks/useParam";
import { useNavigate } from "react-router-dom";
import { getItemDetailByName } from "../../firebase/firestore";
import { navigateToItemPage } from "../navigate";
import { FireStoreItemDetailDoc } from "../../types/firestore";

const ItemDetailPage = () => {
  const [itemDetail, setItemDetail] = useState<FireStoreItemDetailDoc>();

  const itemDetailValue = useParam();
  const navigate = useNavigate();

  useEffect(() => {
    if (itemDetailValue === undefined) {
      setItemDetail(undefined);
      return;
    }
    
    getItemDetailByName(itemDetailValue).then(itemDetail => setItemDetail(itemDetail));
  }, [itemDetailValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      {
        itemDetail === undefined ?
          <Typography variant='h6'>Item Detail Not Found</Typography> :
          <>
            <Typography variant='h3'>{itemDetailValue}</Typography>
            <Chip label={itemDetail.item} variant='outlined' clickable onClick={() => navigateToItemPage(navigate, itemDetail.item)} />
            <Box sx={{ width: '100%', height: '80%' }}>
            </Box>
          </>
      }
    </Box>
  )
};

export default ItemDetailPage;