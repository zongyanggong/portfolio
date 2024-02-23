import PageTitle from "@/base-ui/page_title";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import SkillDetail from "./c-cpns/skill_detail";
import SkillCard from "./c-cpns/skill_card";
// import { skillValues } from "./c-cpns/skills_value";

const Skill = () => {
  const [skillValues, setSkillValues] = useState([{}]);
  useEffect(() => {
    fetch("/skills")
      .then((response) => response.json())
      .then((data) => setSkillValues(data));
  }, []);
  return (
    <Box id="Skill" mt={5}>
      <Container>
        <PageTitle title="Skills" />
        {typeof skillValues.skills === "undefined" ? (
          <Typography>Loading...</Typography>
        ) : (
          skillValues.skills.map((item, index) => (
            <SkillCard index={index} skill={item} key={index} />
          ))
        )}
      </Container>
    </Box>
  );
};

export default Skill;
