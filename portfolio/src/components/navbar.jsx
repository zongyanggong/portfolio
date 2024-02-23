import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  Drawer,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-scroll";

const menus = ["Home", "Skill", "Education", "Portfolio", "Contact"];

const Navbar = () => {
  const NavbarBox = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  const LinkBox = styled(Box)(({ theme }) => ({
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    fontSize: "2.5rem",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const [mobileMenu, setMobileMenu] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menus.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: "#fff" }}>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ListAltIcon />}
                {index === 4 && <ContactsIcon />}
              </ListItemIcon>
              <Link to={text} smooth duration={500}>
                <ListItemText primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <NavbarBox sx={{ mt: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography style={{ fontSize: "2.5rem" }}>&lt;</Typography>
        <Typography
          sx={{
            fontFamily: "Agustina Regular",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          Zongyang
        </Typography>
        <Typography style={{ fontSize: "2.5rem" }}>/&gt;</Typography>
      </Box>
      <Box>
        <LinkBox>
          <ul style={{ fontSize: "25px" }}>
            {menus.map((menu, index) => (
              <Link
                to={menu}
                duration={500}
                className="link"
                smooth
                key={index}
              >
                {menu}
              </Link>
            ))}
          </ul>
        </LinkBox>
        <CustomMenuIcon onClick={toggleDrawer("right", true)} />
        <Drawer
          anchor="right"
          open={mobileMenu["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            style: {
              backgroundColor: "#ff004f",
              color: "#fff",
            },
          }}
        >
          {list("right")}
        </Drawer>
      </Box>
    </NavbarBox>
  );
};

export default Navbar;
