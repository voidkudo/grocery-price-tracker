
import { Box, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import CreateItemForm from "../../components/CreateItemForm";

const CreateItemPage = () => {
  const user = useAuth();

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography variant='h4'>Add New Price Record</Typography>
      <CreateItemForm />
    </Box>
  )
};

export default CreateItemPage;