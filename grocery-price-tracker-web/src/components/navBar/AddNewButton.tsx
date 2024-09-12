import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

interface AddNewButtonProps {
  handleAddRecord: () => void
};

const AddNewButton = (props: AddNewButtonProps) => {
  return (
    <Button
      variant='outlined'
      startIcon={<AddIcon />}
      onClick={props.handleAddRecord}
    >
      Add New
    </Button>
  )
};

export default AddNewButton;