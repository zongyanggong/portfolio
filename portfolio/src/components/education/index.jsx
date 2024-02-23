import { Box, Container, styled } from "@mui/material";
import React from "react";
import vanierLogo from "@/assets/images/Vanier.png";
import seuLogo from "@/assets/images/seu.png";
import PageTitle from "@/base-ui/page_title";
import EducationCard from "./c-cpns/education_card";

const Education = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "40px",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  return (
    <Box id="Education" mt={5}>
      <Container>
        <PageTitle title="Education" />
        <CustomBox>
          <EducationCard
            schoolLogo={vanierLogo}
            schoolname="Vanier College"
            degree="AEC"
            time="October 2022 - December 2023"
            department="Software Development:Secure Desktop,Mobile and Web Applications"
          />
          <EducationCard
            schoolLogo={seuLogo}
            schoolname="Southeast University"
            degree="PhD of Engineering"
            time="Sepember 2002 - September 2010"
            department="Precision Instrument and Machinery"
          />
          <EducationCard
            schoolLogo={seuLogo}
            schoolname="Southeast University"
            degree="Bachelor of Engineering"
            time="Sepember 1998 - June 2002"
            department="Measurement and Control Technology and Instrument"
          />
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Education;
