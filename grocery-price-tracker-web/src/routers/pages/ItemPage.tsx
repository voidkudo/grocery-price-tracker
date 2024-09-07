import { Box, Chip, Typography } from "@mui/material";
import { groceryItemData } from "../../data/data";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GroceryItem } from "../../types/data";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const ItemPage = () => {
  const [item, setItem] = useState<GroceryItem>();

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchValue = params.get('value') ?? '';

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'name',
      headerName: 'Name',
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
      field: 'date',
      headerName: 'Purchase Date',
      width: 150,
    }
  ];

  const rows = item?.records.map((item, index) => { return { ...item, id: index } }) ?? [];

  useEffect(() => {
    setItem(groceryItemData.find(item => item.name.toUpperCase() === searchValue.toUpperCase()));
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