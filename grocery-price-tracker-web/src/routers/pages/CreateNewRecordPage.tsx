
import { Box, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import CreateNewRecordForm from "../../components/CreateNewRecordForm";
import { addStoreOption, getStoreOptions, getCategoryOptions, addCategoryOption, addItemOptionByCategory, getItemOptionsByCategory, addItemDetailByItem, addPriceRecordByItemDetails, getItemDetailOptionsByItem } from "../../firebase/firestore";
import { GroceryItemPriceRecord } from "../../types/createNewRecordForm";

const CreateNewRecordPage = () => {
  const user = useAuth();

  const handleCreateItemFormSubmit = (record: GroceryItemPriceRecord) => {
    if (record.isNewCategory) {
      addCategoryOption(record.category, user.email!);
    }
    if (record.isNewStore) {
      addStoreOption(record.storeName, user.email!);
    }
    if (record.isNewItem) {
      addItemOptionByCategory(record.itemName, record.category, user.email!);
    }
    if (record.isNewItemDetail) {
      addItemDetailByItem(record.itemDetailName, record.brand, record.isTaxable, record.itemName, user.email!);
    }
    addPriceRecordByItemDetails(record.price, record.qty, record.storeName, record.purchaseDate, record.itemDetailName, user.email!);
  };

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h4'>Create New Record</Typography>
      <CreateNewRecordForm
        getCategoryOptions={getCategoryOptions}
        getItemOptionsByCategory={getItemOptionsByCategory}
        getItemDetailsByItem={getItemDetailOptionsByItem}
        getStoreOptions={getStoreOptions}
        handleSubmit={handleCreateItemFormSubmit}
      />
    </Box>
  )
};

export default CreateNewRecordPage;