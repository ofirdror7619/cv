import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="rounded-lg shadow-md p-4 sm:p-6 md:p-8" style={{backgroundColor: '#1E293B'}}>
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{color: '#E2E8F0'}}>
            Ofir Dror
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4" style={{color: '#38BDF8'}}>
            Senior Software Engineer
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed text-justify" style={{color: '#E2E8F0'}}>
            Senior Software Engineer with extensive experience building large scale, distributed SaaS platforms using microservices and serverless architectures, and modern cloud technologies. Strong expertise in solving complex engineering challenges, improving system performance, and designing reliable, production grade architectures. Proven ability to deliver scalable, maintainable, and business critical software end to end.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2" style={{color: '#E2E8F0'}}>
            <Mail className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#38BDF8'}} />
            <span>ofirdror7619@gmail.com</span>
          </div>
          <div className="flex items-center gap-2" style={{color: '#E2E8F0'}}>
            <Phone className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#38BDF8'}} />
            <span>054-7550489</span>
          </div>
          <div className="flex items-center gap-2" style={{color: '#E2E8F0'}}>
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#38BDF8'}} />
            <span>Eliyahu Ben Hur 14, Petah Tikva</span>
          </div>
          <div className="flex items-center gap-2" style={{color: '#E2E8F0'}}>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;