import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'NICE',
      location: 'Israel',
      period: '2024 - Present',
      description: [
        'Developing serverless services on AWS',
        'Building complex AWS Step Functions and Lambda flows',
        'Working with DynamoDB and Redis',
        'Designing scalable, resilient production architectures',
        'Hands on experience with AI engineering tools: Microsoft Copilot, Claude, Amazon Bedrock'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'Locusview',
      location: 'Israel',
      period: '2022 - 2024',
      description: [
        'Full-stack development of a SaaS application built on a microservices architecture',
        'Backend & frontend development using: Java, Node.js, TypeScript, Angular, Express, Spring (Boot), Maven, Hibernate',
        'DevOps tools: Git, CI/CD, Jenkins, Docker, Kubernetes',
        'Databases: Postgres, MongoDB'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Algosec',
      location: 'Israel',
      period: '2020 - 2022',
      description: [
        'Backend and frontend development in microservices based environments',
        'Technologies: Java, Node.js, TypeScript, Angular, Spring, Maven',
        'Development of cybersecurity and firewall related products'
      ]
    },
    {
      title: 'Software Developer',
      company: 'AT&T',
      location: 'Israel',
      period: '2017 - 2020',
      description: [
        'Development of large‑scale production systems for U.S. enterprise customers',
        'Designing solutions for distributed systems following industry best practices',
        'Collaboration with international engineering teams',
        'Technologies: Java, Node.js, TypeScript, Angular, Spring, PostgreSQL, MongoDB'
      ]
    },
    {
      title: 'QA Analyst',
      company: 'AT&T',
      location: 'Israel',
      period: '2015 - 2017',
      description: [
        'Testing Client/Server production systems',
        'Writing STP/STD documents',
        'Designing comprehensive test plans'
      ]
    },
    {
      title: 'QA Analyst',
      company: 'Retalix',
      location: 'Israel',
      period: '2014 - 2015',
      description: [
        'Testing POS (Point‑of‑Sale) systems for international clients',
        'Writing test documents and acceptance criteria'
      ]
    }
  ];

  return (
    <section id="experience" className="rounded-lg shadow-md p-4 sm:p-6 md:p-8" style={{backgroundColor: '#1E293B'}}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center" style={{color: '#E2E8F0'}}>
        Professional Experience
      </h2>
      
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              
              <div className="flex-1">
                <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: '#0F172A'}}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold" style={{color: '#E2E8F0'}}>
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium flex items-center gap-2" style={{color: '#38BDF8'}}>
                        <Briefcase className="w-8 h-8" style={{color: '#38BDF8'}} />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm mt-2 sm:mt-0" style={{color: '#E2E8F0'}}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-8 h-8" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-8 h-8" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start" style={{color: '#E2E8F0'}}>
                        <Briefcase className="w-4 h-4 mt-2 mr-3 flex-shrink-0 text-[#38BDF8]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;