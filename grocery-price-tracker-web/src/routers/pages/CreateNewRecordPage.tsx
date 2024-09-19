
import { Box, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import CreateNewRecordForm from "../../components/CreateNewRecordForm";
import { CreateGroceryItemRecord } from "../../types/data";
import { getGroceryItemNamesByCategory } from "../../data/data";
import { addStoreOption, getStoreOptions, getCategoryOptions, addCategoryOption } from "../../firebase/firestore";

const CreateNewRecordPage = () => {
  const user = useAuth();

  const handleCreateItemFormSubmit = (record: CreateGroceryItemRecord) => {
    console.log(user.email);
    console.log(JSON.stringify(record));
    if (record.isNewCategory) {
      addCategoryOption(record.category);
    }
    if (record.isNewStore) {
      addStoreOption(record.store);
    }addStoreOption
  };

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h4'>Create New Record</Typography>
      <CreateNewRecordForm
        getCategoryOptions={getCategoryOptions}
        getItemOptionsByCategory={getGroceryItemNamesByCategory}
        getStoreOptions={getStoreOptions}
        handleSubmit={handleCreateItemFormSubmit}
      />
    </Box>
  )
};

export default CreateNewRecordPage;