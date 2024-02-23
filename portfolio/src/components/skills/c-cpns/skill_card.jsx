import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SkillDetail from "./skill_detail";

const SkillCard = ({ index, skill }) => {
  const [isArrowDown, setIsArrowDown] = useState(true); // State to track arrow direction

  const handleArrowClick = () => {
    setIsArrowDown(!isArrowDown); // Toggle arrow direction on click
  };

  return (
    <Box mt={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {index === 0 && (
            <DataObjectIcon sx={{ fontSize: "40px", color: "#ff004f" }} />
          )}
          {index === 1 && (
            <StorageIcon sx={{ fontSize: "40px", color: "#ff004f" }} />
          )}
          {index === 2 && (
            <DesignServicesIcon sx={{ fontSize: "40px", color: "#ff004f" }} />
          )}
          <Typography variant="h5" ml={1}>
            {skill.skillName}
          </Typography>
        </Box>
        <KeyboardArrowUpIcon
          sx={{
            fontSize: "60px",
            color: "#ff004f",
            cursor: "pointer",
            transform: isArrowDown ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.3s",
          }}
          onClick={handleArrowClick}
        />
      </Box>
      {isArrowDown && (
        <Box>
          {skill.values.map((item) => (
            <SkillDetail
              skillName={item.skillTitle}
              skillPercent={item.value}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SkillCard;
