import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from "@mui/system";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const pages = ['Home', 'Shop', 'Collection', 'Pages', 'Blog', 'About', 'Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const StyledAppBar = styled(AppBar, {
  name: "StyledAppBar",
  slot: "Wrapper"
})({
  color: "black",
  backgroundColor: "white",
  boxShadow: 'none',
  position: "static",
  maxWidth: '1300px !important',
  margin: 'auto',
  display: 'flex !important',
  justifyContent: 'center !important'
});

const StyledContainer = styled(Container, {
  name: "StyledContainer",
  slot: "Wrapper"
})({
  margin: 'auto !important',
});

const StyledToolbar = styled(Toolbar, {
  name: "StyledToolbar",
  slot: "Wrapper"
})({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  margin: 'auto'
});

const StyledBox = styled(Box, {
  name: "StyledBox",
  slot: "Wrapper"
})({
  display: 'flex'
});

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar>
      <StyledContainer>
        <StyledToolbar>
          <Typography>
            <img 
            src="https://template.hasthemes.com/flone/flone/assets/img/logo/logo.png"
            alt="new"
            />
          </Typography>
          <StyledBox>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{marginLeft: 2, color: '#555252', display: 'block', fontWeight: '600', fontSize: 15, textTransform: 'capitalize', fontFamily: "Poppins", letterSpacing: '1px' }}
              >
                {page}
              </Button>
            ))}
          </StyledBox>
          <StyledBox>
            <SearchOutlinedIcon sx={{marginLeft: 2, fontSize: 25 }} />
            <PersonOutlineOutlinedIcon sx={{marginLeft: 2, fontSize: 25 }} />
            <FavoriteBorderOutlinedIcon sx={{marginLeft: 2, fontSize: 25 }} />
            <LocalMallOutlinedIcon sx={{marginLeft: 2, fontSize: 25 }} />
          </StyledBox>
        </StyledToolbar>
      </StyledContainer>
    </StyledAppBar>
  );
};
export default ResponsiveAppBar;
