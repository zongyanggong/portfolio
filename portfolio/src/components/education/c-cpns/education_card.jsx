import { Box, Typography, styled } from "@mui/material";
import React from "react";

const EducationCard = ({
  schoolLogo,
  schoolname,
  degree,
  department,
  time,
}) => {
  const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#262626",
    borderRadius: "10px",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  }));
  return (
    <CustomBox sx={{}}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={schoolLogo}
          alt=""
          style={{
            height: "200px",
            width: "200px",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box sx={{ textAlign: "center" }} mt={2}>
        <Typography variant="h5" marginY={1}>
          {schoolname}
        </Typography>
        <Typography variant="body1" marginY={1}>
          {degree}
        </Typography>
        <Typography variant="body1" marginY={1}>
          {time}
        </Typography>
        <Typography variant="body2" marginY={1}>
          {department}
        </Typography>
      </Box>
    </CustomBox>
  );
};

export default EducationCard;
