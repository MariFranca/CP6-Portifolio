import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from "react-scroll";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "60px",
}));

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#171717",
  fontWeight: "500",
  cursor: "pointer",
  "&:hover": {
    color: "tertiary.main", 
  },
}));

const NavBar = () => {
  return (
    <AppBar position="absolute" color="secondary">
      <StyledToolbar>
        <MenuItem>
          <StyledLink to="home" smooth={true} duration={600} offset={-70}>
            Home
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="about" smooth={true} duration={600} offset={-70}>
            About me
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="projects" smooth={true} duration={600} offset={-70}>
            Projects
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="contact" smooth={true} duration={600} offset={-70}>
            Contact
          </StyledLink>
        </MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
