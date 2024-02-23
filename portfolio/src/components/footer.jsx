import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <Box
      mt={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#262626" }}
      height="50px"
    >
      <Typography variant="body2">
        © Copyright 2023 Personal Portfolio
      </Typography>
      <FavoriteIcon
        sx={{ paddingX: "5px", color: "#ff004f", fontSize: "30px" }}
      />
      <Typography variant="body2">by Zongyang Gong</Typography>
    </Box>
  );
};

export default Footer;
