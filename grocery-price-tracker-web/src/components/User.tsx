import { Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { AccountCircle, Logout, Settings } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { resetUser } from "../stores/slices/userSlice";

const User = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  
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

  const handleLogoutClick = () => {
    dispatch(resetUser());
    handleMenuClose();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip title='Account Management'>
        <IconButton onClick={handleAvatarClick}>
          <Avatar alt='User Avatar' src={user?.picture} />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        <MenuItem >
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
        <MenuItem onClick={handleLogoutClick} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
};

export default User;