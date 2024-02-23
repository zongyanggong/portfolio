import PageTitle from "@/base-ui/page_title";
import { Box, Button, Container, styled } from "@mui/material";
import React from "react";
import workImage1 from "@/assets/images/work-1.png";
import workImage2 from "@/assets/images/work-2.png";
import workImage3 from "@/assets/images/work-3.png";
import workImage4 from "@/assets/images/work-4.jpg";
import ProjectCard from "./c-cpns/project_card";

const Portofolio = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "40px",
    marginTop: "50px",
  }));
  return (
    <Box id="Portfolio" mt={5}>
      <Container>
        <PageTitle title="Portfolio" />
        <CustomBox>
          <ProjectCard
            image={workImage1}
            projectName="Create an e-commerce website"
            projectDesciption="I create a real-world e-commerce shop that sells physical
                      items. The items are added into an admin interface, people can
                      browse and shop for items, add them to the cart, and will
                      checkout. The order is sent to the shop owner and they’ll take
                      care of shipping etc."
          />
          <ProjectCard
            image={workImage2}
            projectName="Create a site with a private area"
            projectDesciption="The website is created on which you can create a private
                      members-only area. Members can pay a monthly fee using Stripe
                      to join the members area, and inside it you can add something
                      that your users will want to pay for. Like Patreon, but on
                      your own website."
          />
          <ProjectCard
            image={workImage3}
            projectName="Site using a Headless CMS"
            projectDesciption="The content-centered website us created to use a headless CMS
                  as its content “base”. Then our Next.js website will take care
                  of distributing this content. A perfect use care for this is
                  when non-technical people need to update the website."
          />
          <ProjectCard
            image={workImage4}
            projectName="Rental apartment website"
            projectDesciption="I created a rental website for your own apartment. Instead of
                  a marketplace of houses, it’s a site dedicated to just your
                  house. You set the rates, there’s an availability calendar,
                  people can book nights directly on your site. You can have
                  total control and no fees."
          />
          <ProjectCard
            image={workImage1}
            projectName="Digital downloads platform"
            projectDesciption="The website is created similar to Gumroad or Etsy for digital
                  downloads. Say you create ebooks (or anything else that’s
                  digital), and you want to sell them. You can make a private
                  area to upload and add all the details about the digital
                  products, and the frontend-facing area can handle purchases
                  and letting people download the files."
          />
          <ProjectCard
            image={workImage2}
            projectName="Build a site similar to Reddit"
            projectDesciption="The website is created that works similarly to Reddit, the
                  super popular social network. You can create subreddits, allow
                  people to post into them, you can implement nested comments,
                  and uploading images to an AWS S3 bucket"
          />
        </CustomBox>

        <Box mt={4} sx={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#ff004f",
              transition: "transform 0.5s",
              ":hover": { borderColor: "#ff004f", transform: "scale(1.1)" },
            }}
          >
            See more
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Portofolio;
