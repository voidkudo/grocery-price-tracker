import { Avatar, Box, Button, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { AccountCircle, Logout, Settings } from "@mui/icons-material";
import { User } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';

interface AccountProps {
  user?: User,
  handleSignInClick: () => void,
  handleSignOutClick: () => void,
};

const Account = (props: AccountProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(true)
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const handleSignOutClick = () => {
    props.handleSignOutClick();
    handleMenuClose();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip title={props.user === undefined ? 'Sign In' : 'Account'}>
        {
          props.user === undefined ?
            <Button variant='outlined' startIcon={<GoogleIcon />} onClick={props.handleSignInClick}>Sign In With Google</Button> :
            <IconButton onClick={handleAvatarClick}>
              <Avatar src={props.user?.photoURL ?? undefined} />
            </IconButton>
        }

      </Tooltip>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        <MenuItem>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          Account
        </MenuItem>
        <MenuItem divider >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Setting
        </MenuItem>
        <MenuItem onClick={handleSignOutClick} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </Box>
  )
};

export default Account;