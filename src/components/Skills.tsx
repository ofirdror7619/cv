import { Code, Database, Cloud, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'Java' },
        { name: 'JavaScript/TypeScript' },
        { name: 'Node.js' },
        { name: 'Python' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Wrench className="w-8 h-8" />,
      skills: [
        { name: 'Angular' },
        { name: 'Next.js' },
        { name: 'Spring/Spring Boot' },
        { name: 'Express.js' },
        { name: 'Maven' },
        { name: 'Hibernate' }
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'DynamoDB' },
        { name: 'Redis' },
        { name: 'Database Design' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: 'AWS (Lambda, Step Functions)' },
        { name: 'Docker/Kubernetes' },
        { name: 'CI/CD (Jenkins)' },
        { name: 'Git/Version Control' },
        { name: 'Microservices Architecture' }
      ]
    },
    {
      title: 'AI Tools',
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: 'Prompt Engineering' },
        { name: 'ChatGPT/OpenAI API' },
        { name: 'GitHub Copilot' },
        { name: 'Claude' },
        { name: 'Amazon Bedrock' }
      ]
    }
  ];

  return (
    <section id="skills" className="rounded-lg shadow-md p-4 sm:p-6 md:p-8" style={{backgroundColor: '#1E293B'}}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center" style={{color: '#E2E8F0'}}>
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="rounded-lg p-4 sm:p-6" style={{backgroundColor: '#0F172A'}}>
            <div className="flex items-center gap-3 mb-6">
              <div style={{color: '#38BDF8'}}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold" style={{color: '#E2E8F0'}}>
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#38BDF8'}}></div>
                  <span className="font-medium" style={{color: '#E2E8F0'}}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;