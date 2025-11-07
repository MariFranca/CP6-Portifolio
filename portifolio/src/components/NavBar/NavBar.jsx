import {AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "end",
    gap: "60px",
    
}));

const NavBar = () =>  {

  return (
    <>
      <AppBar position="absolute" color="secondary" >
            <StyledToolbar>
                <MenuItem >About me</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar

