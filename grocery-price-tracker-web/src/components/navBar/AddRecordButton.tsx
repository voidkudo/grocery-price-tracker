import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

interface AddRecordButtonProps {
  handleClick: () => void
};

const AddRecordButton = (props: AddRecordButtonProps) => {
  return (
    <Button
      variant='outlined'
      startIcon={<AddIcon />}
      onClick={props.handleClick}
    >
      Add Record
    </Button>
  )
};

export default AddRecordButton;