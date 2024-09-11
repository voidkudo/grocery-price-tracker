import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

interface AddRecordButtonProps {
  handleAddRecord: () => void
};

const AddRecordButton = (props: AddRecordButtonProps) => {
  return (
    <Button
      variant='outlined'
      startIcon={<AddIcon />}
      onClick={props.handleAddRecord}
    >
      Add Record
    </Button>
  )
};

export default AddRecordButton;