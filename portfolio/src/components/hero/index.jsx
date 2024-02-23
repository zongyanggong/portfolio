import { Box, Container, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import backgroundImage from "@/assets/images/background.png";
import mobileImage from "@/assets/images/iphone_bg.png";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { fetchQuoteDataAction } from "@/store/modules/quoteReducer";
import { isEmptyObj } from "@/utils";
import Quote from "./c-cpns/quote";
import axios from "axios";

const Hero = () => {
  // const { quoteInfo } = useSelector(
  //   (state) => ({
  //     quoteInfo: state.quote.quoteInfo,
  //   }),
  //   shallowEqual
  // );

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchQuoteDataAction());
  // }, [dispatch]);

  const [quoteInfo, setQuoteInfo] = useState({});
  useEffect(() => {
    getQuoteInfo();
  }, []);

  const getQuoteInfo = async () => {
    const response = await axios.get(
      "https://quote-garden.onrender.com/api/v3/quotes/random"
    );
    setQuoteInfo(response.data?.data?.[0]);
  };

  const HeaderContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    height: "auto",
    aspectRatio: 1.77778,
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileImage})`,
      aspectRatio: 1080 / 1920,
    },
  }));

  const HeadTextContainer = styled(Box)(({ theme }) => ({
    marginTop: "10%",
    fontSize: "25px",
    maxWidth: "600px",
    [theme.breakpoints.down("md")]: {
      marginTop: "7%",
    },
  }));

  const TitleText = styled(Typography)(({ theme }) => ({
    fontSize: "70px",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  }));

  const SubTitleText = styled(Typography)(({ theme }) => ({
    fontSize: "35px",
    color: "#868e96",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
    },
  }));

  return (
    <Box sx={{ minHeight: "80vh" }}>
      <HeaderContainer>
        <Navbar />
        <Container sx={{ position: "relative" }}>
          {isEmptyObj(quoteInfo) && <Quote quote={quoteInfo} />}
          <HeadTextContainer>
            <TitleText variant="h2">
              Hi, I'm <span style={{ color: "#ff004f" }}>Zongyang</span>
              <br />
              Gong From Canada
            </TitleText>
            <SubTitleText variant="body1">
              A passionate Software Developer having an experience in Full Stack
              Development / JAVA / Python / Flask and some other cool libraries
              and frameworks.
            </SubTitleText>
          </HeadTextContainer>
        </Container>
      </HeaderContainer>
    </Box>
  );
};

export default Hero;
