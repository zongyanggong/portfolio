import {
  Box,
  Container,
  TextField,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiInputBase-root": {
    backgroundColor: "#262626",
  },
  "& .MuiOutlinedInput-root": {
    // Remove default borderColor
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    // Remove hover borderColor
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    // Remove focused borderColor
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
  },
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  transition: "transform 0.5s",
  "&:hover": {
    color: "#ff004f",
    transform: "translateY(-5px)",
  },
}));

const Contact = () => {
  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const form = useRef();

  const isValidEmail = (email) => {
    // This regex pattern matches most common email formats
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email validation
    if (!isValidEmail(inputs.user_email)) {
      setErrors((prev) => ({ ...prev, email: true }));
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }

    // Name validation
    if (inputs.user_name.trim() === "") {
      setErrors((prev) => ({ ...prev, name: true }));
    } else {
      setErrors((prev) => ({ ...prev, name: false }));
    }

    // message validation
    if (inputs.message.trim() === "") {
      setErrors((prev) => ({ ...prev, message: true }));
    } else {
      setErrors((prev) => ({ ...prev, message: false }));
    }

    // If there are no errors, process the form data
    if (!errors.user_name && !errors.user_email && !errors.message) {
      console.log(inputs);
      console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
      console.log(process.env.REACT_APP_EMAILJS_USER_ID);
      // ... process the data or send it somewhere
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            toast.success("Send message successfully!", { autoClose: 3000 });
          },
          (error) => {
            toast.error(error, { autoClose: 3000 });
          }
        );
    }
  };

  return (
    <Box id="Contact" mt={5}>
      <CustomContainer>
        <CustomBox flex={1}>
          <Typography variant="h2">Get in touch</Typography>
          <Box display="flex" alignItems="center" gap={2} mt={2}>
            <EmailIcon sx={{ color: "#ff004f" }} />
            <Typography variant="h6">zongyanggong@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2} mt={2}>
            <CallIcon sx={{ color: "#ff004f" }} />
            <Typography variant="h6">438-928-8296</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2} mt={2}>
            <IconBox>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FacebookIcon sx={{ fontSize: "40px" }} />
              </a>
            </IconBox>
            <IconBox>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <TwitterIcon sx={{ fontSize: "40px" }} />
              </a>
            </IconBox>
            <IconBox>
              <a
                href="https://www.linkedin.com/in/zongyanggong/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <LinkedInIcon sx={{ fontSize: "40px" }} />
              </a>
            </IconBox>
            <IconBox>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <GitHubIcon sx={{ fontSize: "40px" }} />
              </a>
            </IconBox>
          </Box>
        </CustomBox>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
          flex={2}
          gap={2}
          ref={form}
        >
          <CustomTextField
            name="user_name"
            type="text"
            placeholder="name"
            variant="outlined"
            value={inputs.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name && "Name cannot be empty"}
          />
          <CustomTextField
            name="user_email"
            type="text"
            placeholder="email"
            variant="outlined"
            value={inputs.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email && "Invalid email address"}
          />
          <CustomTextField
            name="message"
            type="text"
            placeholder="message"
            variant="outlined"
            value={inputs.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message && "Message cannot be empty"}
            maxRows={5}
            rows={5}
            multiline={true}
          />
          <CustomBox>
            <Button
              variant="outlined"
              type="submit"
              sx={{
                color: "#fff",
                borderColor: "#ff004f",
                transition: "transform 0.5s",
                ":hover": { borderColor: "#ff004f", transform: "scale(1.1)" },
              }}
            >
              Submit
            </Button>
          </CustomBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Contact;
