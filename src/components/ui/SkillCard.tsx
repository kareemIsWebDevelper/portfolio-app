import React from 'react';
import type { LucideIcon } from 'lucide-react';
import Card from './Card';
import ProgressBar from './ProgressBar';
import type { Skill, ProgressBarColor } from '../../types';

interface SkillCardProps {
  readonly title: string;
  readonly icon: LucideIcon;
  readonly color: string;
  readonly skills: readonly Skill[];
  readonly animatedSkills: Set<number>;
  readonly categoryIndex: number;
  readonly delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon: Icon,
  color,
  skills,
  animatedSkills,
  categoryIndex,
  delay = 0
}) => {
  const colorMap: Record<string, ProgressBarColor> = {
    'from-blue-500 to-cyan-500': 'blue',
    'from-purple-500 to-pink-500': 'purple',
    'from-green-500 to-emerald-500': 'green'
  } as const;

  return (
    <Card
      hover
      className="group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-2xl bg-gradient-to-r ${color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => {
          const globalIndex = categoryIndex * 6 + skillIndex;
          const isAnimated = animatedSkills.has(globalIndex);
          
          return (
            <ProgressBar
              key={skill.name}
              label={skill.name}
              value={isAnimated ? skill.level : 0}
              color={colorMap[color] ?? 'blue'}
              animated={isAnimated}
              className="group/skill"
            />
          );
        })}
      </div>
    </Card>
  );
};

export default SkillCard;