
import { Box, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import CreateItemForm from "../../components/CreateItemForm";
import { CreateGroceryItemRecord } from "../../types/data";
import { getCategroies, getGroceryItemNamesByCategory } from "../../data/data";
import { addStore, getStores } from "../../firebase/firestore";

const CreateItemPage = () => {
  const user = useAuth();

  const handleCreateItemFormSubmit = (record: CreateGroceryItemRecord) => {
    console.log(user.email);
    console.log(JSON.stringify(record));
    if (record.isNewStore) {
      addStore(record.store);
    }
  };

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h4'>Add New Price Record</Typography>
      <CreateItemForm
        getCategoryOptions={getCategroies}
        getItemOptionsByCategory={getGroceryItemNamesByCategory}
        getStoreOptions={getStores}
        handleSubmit={handleCreateItemFormSubmit}
      />
    </Box>
  )
};

export default CreateItemPage;