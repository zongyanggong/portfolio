import { Box, Typography, styled } from "@mui/material";
import React from "react";

const SkillDetail = ({ skillName, skillPercent }) => {
  const SkillContainer = styled(Box)(({ theme }) => ({
    marginBottom: "10px",
    marginTop: "10px",
    marginLeft: "40px",
    marginRight: 0,
    [theme.breakpoints.down("md")]: {
      marginRight: "40px",
    },
  }));
  const SkillTitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
  }));
  return (
    <SkillContainer>
      <SkillTitleBox>
        <Typography variant="body1">{skillName}</Typography>
        <Typography variant="body1">{skillPercent}</Typography>
      </SkillTitleBox>
      <span
        style={{
          width: skillPercent,
          display: "inline-block",
          height: "5px",
          backgroundColor: "#868e96",
        }}
      ></span>
    </SkillContainer>
  );
};

export default SkillDetail;
