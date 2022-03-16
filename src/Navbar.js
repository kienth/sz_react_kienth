import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from "@mui/system";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const pages = ['Home', 'Shop', 'Collection', 'Pages', 'Blog', 'About', 'Contact'];

const StyledAppBar = styled(AppBar, {
  name: "StyledAppBar",
  slot: "Wrapper"
})({
  color: "black",
  backgroundColor: "white",
  position: "static",
  margin: 'auto',
  display: 'flex',
  justifyContent: 'flex-end',
  maxWidth: '100%',
});

const StyleToolbar = styled(Toolbar, {
  name: "StyleToolbar",
  slot: "Wrapper"
})({
  display: 'flex',
  justifyContent: 'space-between',
  width: '1250px',
  margin: 'auto'
});

const StyleBox = styled(Box, {
  name: "StyleBox",
  slot: "Wrapper"
})({
  color: "black",
  display: 'flex',
  justifyContent: 'space-between',
  
});

const StyleTypography = styled(Typography, {
  name: "StyleTypography",
  slot: "Wrapper"
})({
  color: "black",
  display: 'flex',
  justifyContent: 'space-between',
  width: 'auto'
});

const StyleLink = styled(Link, {
  name: "StyleLink",
  slot: "Wrapper"
})({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
  color: '#555252',
  fontSize: '15px',
  letterSpacing: '1px',
  fontWeight: 'bold'
});

const StyleButton = styled(Button, {
  name: "StyleButton",
  slot: "Wrapper"
})({
  display: 'flex',
  color: '#555252 !important',
  fontWeight: 'bold',
  fontSize: '15px',
  textTransform: 'capitalize',
  letterSpacing: '1px'
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <StyledAppBar>
          <StyleToolbar>
            <StyleBox>
              <img 
              src="https://template.hasthemes.com/flone/flone/assets/img/logo/logo.png"
              alt="new"
              />
            </StyleBox>
            <StyleBox>
              <StyleTypography>
                <StyleButton
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Home
                </StyleButton>
                <StyleButton
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Shop
                </StyleButton>
                <StyleLink href="#" underline="none">
                  {'Collection'}
                </StyleLink>
                <StyleButton
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Pages
                </StyleButton>
                <StyleButton
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Blog
                </StyleButton>
                <StyleLink href="#" underline="none">
                  {'About'}
                </StyleLink>
                <StyleLink href="#" underline="none">
                  {'Contact'}
                </StyleLink>
              </StyleTypography>
            </StyleBox>
            <StyleBox >
              <SearchOutlinedIcon sx={{ margin: '10px' }}/>
              <PersonOutlineOutlinedIcon sx={{ margin: '10px' }}/>
              <FavoriteBorderOutlinedIcon sx={{ margin: '10px' }}/>
              <LocalMallOutlinedIcon sx={{ margin: '10px' }}/>
            </StyleBox>
          </StyleToolbar>
        </StyledAppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
