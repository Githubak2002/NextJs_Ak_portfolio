import SkillCard from "./SkillCard";
import { skills_tech_stack } from "@/constants/constant";

interface Skill {
  name: string;
  path: string;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => (
  <main>
    <h2 
    data-aos={"fade-up"}
    className="txtOutlineCSS py-10 text-3xl text-center">{title}</h2>
    <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
      {skills.map((skill, index) => (
        <div key={index} className="w-1/8">
          <SkillCard name={skill.name} path={skill.path} />
        </div>
      ))}
    </div>
  </main>
);

const Skills: React.FC = () => 
  (
  <main
    className="pb-20 pt-24 max-w-[960px] mx-auto"
    style={{ zIndex: 10, position: "relative" }}
  >
    <h3 
    data-aos={"fade-up"}
    className="txtOutlineCSS text-center text-3xl">
      Skills & <span className="text-white">Tech Stack</span>
    </h3>

    <SkillSection title="Frontend" skills={skills_tech_stack.frontend} />
    <SkillSection title="Backend" skills={skills_tech_stack.backend} />
    <SkillSection title="Other" skills={skills_tech_stack.extra} />
  </main>
);

export default Skills;

// import skillsData from "./skills.json";
// import SkillCard from "./SkillCard";
// import { skills_set, skills_tech_stack } from "@/constants/constant";

// export default function Skills() {
//   return (
//     <main
//       className="pb-20 pt-24 max-w-[960px] mx-auto"
//       style={{ zIndex: 100, position: "relative" }}
//     >
//       <h3 className="txtOutlineCSS text-center text-3xl">
//         Skills & <span className="text-white">Tech Stack</span>
//       </h3>

//       {/* <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
//         {skills_set.map((skill, index) => (
//           <div key={index} className="w-1/8">
//             <SkillCard name={skill.name} path={skill.path} />
//           </div>
//         ))}
//       </div> */}

//       <h2 className="txtOutlineCSS py-10 text-3xl text-center">Frontend</h2>
//       <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
//         {skills_tech_stack.frontend.map((skill, index) => (
//           <div key={index} className="w-1/8">
//             <SkillCard name={skill.name} path={skill.path} />
//           </div>
//         ))}
//       </div>

//       <h2 className="txtOutlineCSS py-10 text-3xl text-center">Backend</h2>
//       <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
//         {skills_tech_stack.backend.map((skill, index) => (
//           <div key={index} className="w-1/8">
//             <SkillCard name={skill.name} path={skill.path} />
//           </div>
//         ))}
//       </div>

//       <h2 className="txtOutlineCSS py-10 text-3xl text-center">Other</h2>
//       <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
//         {skills_tech_stack.extra.map((skill, index) => (
//           <div key={index} className="w-1/8">
//             <SkillCard name={skill.name} path={skill.path} />
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
