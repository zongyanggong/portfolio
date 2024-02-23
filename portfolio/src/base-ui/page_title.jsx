import { Typography, styled, Box } from "@mui/material";
import React from "react";

const PageTitle = ({ title }) => {
  const TitleBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));
  return (
    <TitleBox>
      <Typography variant="h2">{title}</Typography>
    </TitleBox>
  );
};

export default PageTitle;
