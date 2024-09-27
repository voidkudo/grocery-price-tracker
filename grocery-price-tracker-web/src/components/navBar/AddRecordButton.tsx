import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

interface AddRecordButtonProps {
  isHidden?: boolean,
  handleClick: () => void,
};

const AddRecordButton = (props: AddRecordButtonProps) => {
  return (
    <Button
      variant='outlined'
      startIcon={<AddIcon />}
      onClick={props.handleClick}
      sx={{visibility: (props.isHidden ? 'hidden' : 'visible')}}
    >
      Add Record
    </Button>
  )
};

export default AddRecordButton;