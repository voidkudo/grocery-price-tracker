import { Box, Chip, Typography } from "@mui/material";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GroceryItem } from "../../types/data";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getGroceryItemByName } from "../../data/data";

const ItemPage = () => {
  const [item, setItem] = useState<GroceryItem>();

  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const itemValue = params.get('value') ?? '';

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'desc',
      headerName: 'Product',
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

  const handleCategroyClick = (category: string) => {
    navigate({
      pathname: '/category',
      search: createSearchParams({
        value: category
      }).toString()
    });
  };

  useEffect(() => {
    // TODO: Implement Search Function
    getGroceryItemByName(itemValue).then(data => setItem(data));
  }, [itemValue]);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      {
        item === undefined ?
          <Typography variant='h6'>Item Not Found</Typography> :
          <>
            <Typography variant='h3'>{item?.name}</Typography>
            <Chip label={item?.category} variant='outlined' clickable onClick={() => handleCategroyClick(item?.category)} />
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