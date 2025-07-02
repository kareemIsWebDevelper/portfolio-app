import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { SectionHeader, AnimatedSection, Badge } from "../ui";
import { skillCategories, topTechnologies } from "../../data/portfolio";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Animate skills progressively
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedSkills((prev) => {
          const newSet = new Set(prev);
          newSet.add(newSet.size);
          if (newSet.size >= 18) {
            // Total number of skills
            clearInterval(interval);
          }
          return newSet;
        });
      }, 100);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 dark:from-green-400/5 dark:to-blue-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeader
            title="Skills & Technologies"
            subtitle="A comprehensive toolkit for building modern web applications"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.id} delay={categoryIndex * 200}>
              <SkillCard
                title={category.title}
                icon={category.icon}
                color={category.color}
                skills={category.skills}
                animatedSkills={animatedSkills}
                categoryIndex={categoryIndex}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={1000}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Featured Technologies
              <Star className="h-6 w-6 text-yellow-500" />
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {topTechnologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="primary"
                  size="lg"
                  className="transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
