import { Box, Chip, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GroceryItem } from "../../types/data";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getGroceryItemByName } from "../../data/data";

const ItemPage = () => {
  const [item, setItem] = useState<GroceryItem>();

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchValue = params.get('value') ?? '';

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'detail',
      headerName: 'Product Detail',
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
    },
    {
      field: 'store',
      headerName: 'Store',
      width: 150,
    },
    {
      field: 'purchaseDate',
      headerName: 'Purchase Date',
      width: 150,
    }
  ];

  const rows = item?.records?.sort((a, b) => b.purchaseDate.localeCompare(a.purchaseDate)).map((item, index) => { return { ...item, id: index } }) ?? [];

  useEffect(() => {
    // TODO: Implement Search Function
    getGroceryItemByName(searchValue).then(data => setItem(data));
  }, [searchValue]);

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h3'>{item?.name}</Typography>
      <Chip label={item?.category} variant='outlined' />
      <Box sx={{ width: '100%', height: '80%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </Box>
    </Box>
  )
};

export default ItemPage;