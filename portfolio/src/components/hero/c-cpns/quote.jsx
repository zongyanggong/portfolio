import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Quote = ({ quote }) => {
  const CustomBox = styled(Box)(({ theme }) => ({
    // position: "absolute",
    // top: -200,
    marginTop: "5%",
    maxWidth: "600px",
    //    [theme.breakpoints.down("md")]: {
    //      marginTop: "7%",
    //    },
  }));

  const QuoteText = styled(Typography)(({ theme }) => ({
    borderLeft: "4px solid", // You can choose the border width and style
    paddingLeft: theme.spacing(2), // Add some spacing to move text away from the border
    fontSize: "20px",
    borderColor: "#ff004f",
  }));
  return (
    <CustomBox>
      <QuoteText fontSize="20px">{quote.quoteText}</QuoteText>
      <Typography fontStyle="italic" fontSize="20px" align="right">
        -- {quote.quoteAuthor}
      </Typography>
    </CustomBox>
  );
};

export default Quote;
