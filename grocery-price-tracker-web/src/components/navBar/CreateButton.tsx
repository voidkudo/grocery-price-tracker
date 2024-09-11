import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateButton = () => {
  const navigate = useNavigate();

  const handleAddRecordClick = () => {
    navigate('/create')
  };

  return (
    <Button
      variant='outlined'
      startIcon={<AddIcon />}
      onClick={handleAddRecordClick}
    >
      Add Record
    </Button>
  )
};

export default CreateButton;