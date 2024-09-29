import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import { User } from "firebase/auth";

interface BottomNavBarProps {
  user?: User,
  handleHomeClick: () => void,
  handleSearchClick: () => void,
  handleSignInClick: () => void,
  handleAddRecordClick: () => void,
  handleSignOutClick: () => void,
};

const BottomNavBar = (props: BottomNavBarProps) => {

  return (
    <BottomNavigation
      showLabels
    >
      <BottomNavigationAction label='Home' icon={<HomeIcon />} onClick={props.handleHomeClick} />
      <BottomNavigationAction label='Search' icon={<SearchIcon />} onClick={props.handleSearchClick} />
      
      {
        props.user === undefined ?
          <BottomNavigationAction label='Sign In' icon={<AccountCircleIcon />} onClick={props.handleSignInClick} /> :
          <BottomNavigationAction label='Add Record' icon={<AddBoxIcon />} onClick={props.handleAddRecordClick} />
      }

    </BottomNavigation>
  )
};

export default BottomNavBar