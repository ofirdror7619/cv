import { Shield, Calendar, MapPin, Award } from 'lucide-react';

const Military = () => {
  const militaryService = {
    role: 'System Administrator (VAX/VMS)',
    unit: 'Tel Hashomer Base',
    location: 'Israel',
    period: 'Military Service Period',
    description: 'System Administrator specializing in VAX/VMS systems. Responsible for maintaining and managing critical military computer systems, ensuring high availability and security of essential infrastructure.',
    achievements: [
      'Maintained and administered VAX/VMS computer systems',
      'Ensured high availability of critical military infrastructure',
      'Managed system security and access controls',
      'Performed regular system maintenance and updates',
      'Provided technical support for military operations',
      'Collaborated with technical teams on system optimization'
    ],
    skills: [
      'VAX/VMS Administration',
      'System Security',
      'Infrastructure Management',
      'Technical Support',
      'Problem Solving',
      'Team Collaboration'
    ]
  };

  return (
    <section id="military" className="rounded-lg shadow-md p-4 sm:p-6 md:p-8" style={{backgroundColor: '#1E293B'}}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center" style={{color: '#E2E8F0'}}>
        Military Service
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {/* Military Service Header */}
        <div className="bg-gradient-to-r rounded-lg p-4 sm:p-6 mb-6 sm:mb-8" style={{backgroundColor: '#0F172A'}}>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8" style={{color: '#38BDF8'}} />
            <div>
              <h3 className="text-2xl font-bold" style={{color: '#E2E8F0'}}>
                {militaryService.role}
              </h3>
              <p className="text-lg font-semibold" style={{color: '#38BDF8'}}>
                {militaryService.unit}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm mb-4" style={{color: '#E2E8F0'}}>
            <div className="flex items-center gap-2">
              <Calendar className="w-8 h-8" />
              <span>{militaryService.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-8 h-8" />
              <span>{militaryService.location}</span>
            </div>
          </div>
          
          <p className="leading-relaxed" style={{color: '#E2E8F0'}}>
            {militaryService.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Military;