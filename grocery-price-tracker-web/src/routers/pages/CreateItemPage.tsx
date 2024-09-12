import { Box } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const CreateItemPage = () => {
  const user = useAuth();

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
    </Box>
  )
};

export default CreateItemPage;