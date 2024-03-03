// import skillsData from "./skills.json";
import SkillCard from "./SkillCard";
import { skills_set } from "@/constants/constant";

export default function Skills() {
  return (
    <main
      className="pb-20 pt-24 max-w-[960px] mx-auto"
      style={{ zIndex: 100, position: "relative" }}
    >
      <h3 className="txtOutlineCSS text-center text-3xl font-bold mb-16">
        Skills & <span className="text-white">Tech Stack</span>
      </h3>

      <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
        {skills_set.map((skill, index) => (
          <div key={index} className="w-1/8">
            <SkillCard name={skill.name} path={skill.path} />
          </div>
        ))}
      </div>
    </main>
  );
}
