import { Box, Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useParam from "../../hooks/useParam";
import { navigateToCategoryPage } from "../navigate";
import { useNavigate } from "react-router-dom";
import { FireStoreItemDoc } from "../../types/firestore";
import { getItemByName } from "../../firebase/firestore";

const ItemPage = () => {
  const [item, setItem] = useState<FireStoreItemDoc>();

  const itemValue = useParam();
  const navigate = useNavigate();

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'itemDesc',
      headerName: 'Item Description',
      flex: 1,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'qty',
      headerName: 'QTY',
      width: 150,
    },
    {
      field: 'isTaxable',
      headerName: 'HST/GST',
      width: 150,
      type: 'boolean',
    },
    {
      field: 'storeName',
      headerName: 'Store',
      width: 150,
    },
    {
      field: 'purchaseDate',
      headerName: 'Purchase Date',
      width: 150,
    }
  ];

  const rows = item?.priceRecords?.sort((a, b) => b.purchaseDate.localeCompare(a.purchaseDate)).map((item, index) => { return { ...item, id: index } }) ?? [];

  useEffect(() => {
    // TODO: Implement Search Function
    if (itemValue === undefined) {
      setItem(undefined);
      return;
    }
    
    getItemByName(itemValue).then(item => setItem(item));
  }, [itemValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      {
        item === undefined ?
          <Typography variant='h6'>Item Not Found</Typography> :
          <>
            <Typography variant='h3'>{itemValue}</Typography>
            <Chip label={item.category} variant='outlined' clickable onClick={() => navigateToCategoryPage(navigate, item.category)} />
            <Box sx={{ width: '100%', height: '80%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
              />
            </Box>
          </>
      }

    </Box>
  )
};

export default ItemPage;