
import { Box, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import CreateNewRecordForm from "../../components/CreateNewRecordForm";
import { CreateGroceryItemRecord } from "../../types/data";
import { getGroceryItemNamesByCategory } from "../../data/data";
import { addStore, getStores, getCategories, addCategory } from "../../firebase/firestore";

const CreateNewRecordPage = () => {
  const user = useAuth();

  const handleCreateItemFormSubmit = (record: CreateGroceryItemRecord) => {
    console.log(user.email);
    console.log(JSON.stringify(record));
    if (record.isNewCategory) {
      addCategory(record.category);
    }
    if (record.isNewStore) {
      addStore(record.store);
    }
  };

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h4'>Create New Record</Typography>
      <CreateNewRecordForm
        getCategoryOptions={getCategories}
        getItemOptionsByCategory={getGroceryItemNamesByCategory}
        getStoreOptions={getStores}
        handleSubmit={handleCreateItemFormSubmit}
      />
    </Box>
  )
};

export default CreateNewRecordPage;