import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
  // Frontend
  { name: "SQL", level: 95, category: "Programming" },
  { name: "Python", level: 90, category: "Programming" },
  { name: "Java", level: 65, category: "Programming" },
  { name: "R", level: 85, category: "Programming" },
  { name: "Spark SQL", level: 90, category: "Programming" },
  

  // Backend
  { name: "Power BI", level: 80, category: "Data Visualization" },
  { name: "Looker", level: 75, category: "Data Visualization" },
  { name: "Tableau", level: 90, category: "Data Visualization" },
  { name: "Excel", level: 85, category: "Data Visualization" },

  { name: "Azure", level: 90, category: "Cloud" },
  { name: "AWS", level: 70, category: "Cloud" },
  { name: "Neon", level: 85, category: "Cloud" },


  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "SAP ERP", level: 85, category: "tools" },
  { name: "JIRA", level: 95, category: "tools" },
];

const categories = ["all", "Programming", "Data Visualization", "Cloud", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-black"
                  : "bg-secondary/70 text-black hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
