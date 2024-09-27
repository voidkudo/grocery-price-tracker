import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

interface BottomNavBarProps {
  handleHomeClick: () => void,
};

const BottomNavBar = (props: BottomNavBarProps) => {

  return (
    <BottomNavigation
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={props.handleHomeClick}/>
    </BottomNavigation>
  )
};

export default BottomNavBar