import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'LL.B in Law',
      school: 'Sha\'arei Mishpat College',
      location: 'Israel',
      period: 'Graduated',
      gpa: '91.2/100',
      description: 'Bachelor of Laws degree with excellent academic performance.'
    }

  ];

  return (
    <section id="education" className="rounded-lg shadow-md p-4 sm:p-6 md:p-8" style={{backgroundColor: '#1E293B'}}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center" style={{color: '#E2E8F0'}}>
        Education 
      </h2>
      
      {/* Education */}
      <div className="mb-10">
        
        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="rounded-lg p-4 sm:p-6" style={{backgroundColor: '#0F172A'}}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold flex items-center gap-2" style={{color: '#E2E8F0'}}>
                    <GraduationCap className="w-8 h-8" style={{color: '#38BDF8'}} />
                    {edu.degree}
                  </h4>
                  <p className="text-lg font-medium" style={{color: '#38BDF8'}}>
                    {edu.school}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end text-sm mt-2 sm:mt-0" style={{color: '#E2E8F0'}}>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-8 h-8" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-8 h-8" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <div className="mt-1 font-medium" style={{color: '#38BDF8'}}>
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
              <p style={{color: '#E2E8F0'}}>
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Education;