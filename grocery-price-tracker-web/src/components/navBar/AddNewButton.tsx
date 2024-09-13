import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

interface AddNewButtonProps {
  handleClick: () => void
};

const AddNewButton = (props: AddNewButtonProps) => {
  return (
    <Button
      variant='outlined'
      startIcon={<AddIcon />}
      onClick={props.handleClick}
    >
      Add New
    </Button>
  )
};

export default AddNewButton;