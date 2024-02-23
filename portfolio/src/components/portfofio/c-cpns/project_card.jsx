import { Box, Typography, styled, Link } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ image, projectName, projectDesciption }) => {
  const CustomContainer = styled(Box)(({ theme }) => ({
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    position: "absolute",
    left: 0,
    bottom: 0,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "30px 30px",
    textAlign: "center",
    fontSize: "14px",
    transition: "transform 0.5s",
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "400px", // 你可以根据需要调整这个高度
    overflow: "hidden",
    borderRadius: "10px",
  }));

  return (
    <CustomContainer>
      <ImageContainer>
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </ImageContainer>
      <CustomBox>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", marginBottom: "20px" }}
          >
            {projectName}
          </Typography>
          <Typography
            variant="body1"
            sx={{ height: "200px", fontSize: "15px" }}
          >
            {projectDesciption}
          </Typography>
        </Box>
        <Link
          style={{ cursor: "pointer" }}
          href="https://github.com/adinashby-vanier-college/transactional-web-assignment-zongyanggong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            sx={{
              fontSize: "45px",
              //   backgroundColor: "#ff004f",
              //   borderRadius: "50%",
              color: "#ababab",
              "&:hover": {
                color: "#ff004f",
              },
            }}
          />
        </Link>
      </CustomBox>
    </CustomContainer>
  );
};

export default ProjectCard;
