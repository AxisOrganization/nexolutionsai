import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import NexoLogo from "@/components/NexoLogo";
import EnhancedStepCard from "@/components/EnhancedStepCard";
import EnhancedServiceCard from "@/components/EnhancedServiceCard";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ParallaxSection from "@/components/ParallaxSection";
import MagneticButton from "@/components/MagneticButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Nexolutions = () => {
  const {
    t
  } = useLanguage();
  const calendlyUrl = "https://calendly.com/nexolutions/30min";
  const email = "nexolutions.tech@gmail.com";
  const instagramUrl = "https://www.instagram.com/nexolutions.ai/";
  const linkedinUrl = "https://www.linkedin.com/company/nexolutions-ai";
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation({
    threshold: 0.1
  });
  const {
    ref: featuresRef,
    isVisible: featuresVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  return <main className="antialiased bg-background text-foreground font-jakarta">
      {/* Hero Section */}
      <section ref={heroRef} className={`pt-8 pb-16 px-4 md:px-8 lg:px-32 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
      width: '1440px',
      height: '956px',
      marginTop: '-96px',
      borderRadius: '32px',
      maxWidth: '100%',
      margin: '-96px auto 0 auto'
    }}>
        <div className="flex justify-between items-center mb-8 pt-24">
          <LanguageSwitcher />
          <NexoLogo />
        </div>
        <ParallaxSection speed={0.3}>
          <div className="relative min-h-[70vh] flex flex-col justify-center">
            {/* Main Content */}
          <div className="text-center max-w-6xl mx-auto">
              <img src="/lovable-uploads/1c0626f2-3663-4c9d-ba62-0d30a88b0304.png" alt="AI Services for your Business Growth" className="w-full max-w-5xl h-auto mx-auto animate-fade-in-up" />
              
              {/* Buttons positioned under image */}
              
            </div>
            
            {/* Bottom Right - Loved by founders */}
            
            
            {/* Bottom Center - Down Arrow */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Enhance Workflows */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {t('enhance.title')}
          </h2>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="nexo" size="xl" className="mt-8">
              {t('hero.cta')}
            </Button>
          </a>
        </div>
      </section>

      {/* How it Works */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <div ref={featuresRef} className={`transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl font-bold mb-12 text-gradient">{t('how.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <EnhancedStepCard step="Step 1" title={t('step1.title')} description={t('step1.description')} delay={0} />
            <EnhancedStepCard step="Step 2" title={t('step2.title')} description={t('step2.description')} delay={100} />
            <EnhancedStepCard step="Step 3" title={t('step3.title')} description={t('step3.description')} delay={200} />
            <EnhancedStepCard step="Step 4" title={t('step4.title')} description={t('step4.description')} delay={300} icon={<svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.4 9.6H22L16.3 14.4L18.7 22L12 17.2L5.3 22L7.7 14.4L2 9.6H9.6L12 2Z" fill="currentColor" />
                </svg>} />
          </div>
        </div>
        <div className="text-center mt-12">
          <MagneticButton variant="hero" size="xl" href={calendlyUrl}>
            {t('hero.cta')}
          </MagneticButton>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
          <div className="text-center animate-drift" style={{
          animationDelay: '0s'
        }}>
            <svg className="mx-auto mb-4 w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-lg font-medium">{t('features.onboarding')}</p>
          </div>
          <div className="text-center animate-drift" style={{
          animationDelay: '1s'
        }}>
            <svg className="mx-auto mb-4 w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <p className="text-lg font-medium">{t('features.updates')}</p>
          </div>
          <div className="text-center animate-drift" style={{
          animationDelay: '2s'
        }}>
            <svg className="mx-auto mb-4 w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-medium">{t('features.revisions')}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-5xl font-bold text-center mb-12 text-gradient">{t('services.title')}</h2>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EnhancedServiceCard title={t('service1.title')} description={t('service1.description')} delay={0} icon={<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.5 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L8.5 8.5L12 2Z" />
              </svg>} />
          <EnhancedServiceCard title={t('service2.title')} description={t('service2.description')} delay={100} icon={<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3H21V21H3V3ZM5 5V19H19V5H5ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z" />
              </svg>} />
          <EnhancedServiceCard title={t('service3.title')} description={t('service3.description')} delay={200} icon={<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z" />
              </svg>} />
          <EnhancedServiceCard title={t('service4.title')} description={t('service4.description')} delay={300} icon={<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
              </svg>} />
          <EnhancedServiceCard title={t('service5.title')} description={t('service5.description')} delay={400} icon={<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.74L21 12L14.74 12.26L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.26L3 12L9.26 11.74L5 7L10.91 8.26L12 2Z" />
              </svg>} />
          <EnhancedServiceCard title={t('service6.title')} description={t('service6.description')} delay={500} icon={<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 20C10.9 20 10 19.1 10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20ZM6 8C7.1 8 8 8.9 8 10C8 11.1 7.1 12 6 12C4.9 12 4 11.1 4 10C4 8.9 4.9 8 6 8ZM18 8C19.1 8 20 8.9 20 10C20 11.1 19.1 12 18 12C16.9 12 16 11.1 16 10C16 8.9 16.9 8 18 8Z" />
              </svg>} />
        </div>
      </section>

      {/* Suitable For */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold">{t('suitable.title')}</h2>
          <p className="mt-4 text-lg text-nexo-gray-400 font-inter">{t('suitable.subtitle')}</p>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="nexo" size="xl" className="mt-6">
              {t('hero.cta')}
            </Button>
          </a>
        </div>
        <div className="mt-12 space-y-8 md:space-y-0 md:flex md:flex-col md:gap-8">
          <div className="bg-white text-black rounded-2xl p-8 max-w-xl hover-scale">
            <h3 className="text-3xl font-bold">{t('business.title')}</h3>
            <svg className="w-24 h-24 mx-auto my-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="18" cy="6" r="4" strokeWidth="2" />
              <circle cx="6" cy="18" r="4" strokeWidth="2" />
            </svg>
            <h4 className="text-2xl font-bold">{t('business.subtitle')}</h4>
            <p className="mt-4 text-gray-700 font-inter">{t('business.description')}</p>
          </div>
          <div className="bg-nexo-purple text-white rounded-2xl p-8 max-w-xl md:ml-auto hover-scale">
            <h3 className="text-3xl font-bold">{t('products.title')}</h3>
            <svg className="w-24 h-24 mx-auto my-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="12" cy="20" r="2" />
              <circle cx="4" cy="12" r="2" />
              <circle cx="20" cy="12" r="2" />
              <circle cx="6" cy="6" r="2" />
              <circle cx="18" cy="18" r="2" />
            </svg>
            <h4 className="text-2xl font-bold">{t('products.subtitle')}</h4>
            <p className="mt-4 font-inter">{t('products.description')}</p>
          </div>
          <div className="bg-card rounded-2xl p-8 max-w-xl hover-scale">
            <h3 className="text-3xl font-bold">{t('startups.title')}</h3>
            <svg className="w-24 h-24 mx-auto my-6 text-nexo-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="8" cy="12" r="4" strokeWidth="2" />
              <circle cx="16" cy="12" r="4" strokeWidth="2" />
            </svg>
            <h4 className="text-2xl font-bold">{t('startups.subtitle')}</h4>
            <p className="mt-4 text-nexo-gray-400 font-inter">{t('startups.description')}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-5xl font-bold">{t('pricing.title')}</h2>
        <p className="mt-4 text-lg text-nexo-gray-400 font-inter">{t('pricing.subtitle')}</p>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 hover-scale">
            <h3 className="text-xl font-medium text-nexo-gray-300">{t('starter.title')}</h3>
            <h4 className="text-6xl font-extrabold">{t('starter.price')}</h4>
            <p className="text-nexo-gray-400 text-sm">{t('starter.period')}</p>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="nexo-white" size="xl" className="mt-6 w-full md:w-auto">
                {t('getStarted')}
              </Button>
            </a>
            <ul className="mt-8 space-y-4 text-nexo-gray-400 font-inter">
              <li>○ {t('starter.feature1')}</li>
              <li>○ {t('starter.feature2')}</li>
              <li>○ {t('starter.feature3')}</li>
              <li>○ {t('starter.feature4')}</li>
              <li>○ {t('starter.feature5')}</li>
              <li>○ {t('starter.feature6')}</li>
              <li>○ {t('starter.feature7')}</li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-2xl p-8 hover-scale">
            <h3 className="text-xl font-medium text-nexo-gray-700">{t('master.title')}</h3>
            <h4 className="text-6xl font-extrabold">{t('master.price')}</h4>
            <p className="text-nexo-gray-400 text-sm">{t('master.period')}</p>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="nexo" size="xl" className="mt-6 w-full md:w-auto">
                {t('getStarted')}
              </Button>
            </a>
            <ul className="mt-8 space-y-4 text-nexo-gray-700 font-inter">
              <li>○ {t('master.feature1')}</li>
              <li>○ {t('master.feature2')}</li>
              <li>○ {t('master.feature3')}</li>
              <li>○ {t('master.feature4')}</li>
              <li>○ {t('master.feature5')}</li>
              <li>○ {t('master.feature6')}</li>
              <li>○ {t('master.feature7')}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-bold">{t('custom.title')}</h3>
          <p className="mt-4 text-lg text-nexo-gray-400 font-inter">{t('custom.description')}</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="nexo-outline" size="xl">
                {t('bookCall')}
              </Button>
            </a>
            <p className="text-nexo-gray-400 font-inter">{t('orEmail')} <a href={`mailto:${email}`} className="underline">{email}</a></p>
          </div>
        </div>
      </section>

      {/* Still not sure */}
      <section className="pb-16 px-4 md:px-8 lg:px-32 text-center">
        <h2 className="text-5xl font-bold">{t('stillNotSure.title')}</h2>
        <p className="mt-4 text-lg text-nexo-gray-400 font-inter max-w-xl mx-auto">{t('stillNotSure.description')}</p>
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="nexo-white" size="2xl" className="mt-8">
            {t('bookCall')}
          </Button>
        </a>
        <p className="mt-4 text-nexo-gray-400 font-inter">{t('orEmail')} <a href={`mailto:${email}`} className="underline">{email}</a></p>
      </section>

      {/* Free Demo Call Section */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img src="/lovable-uploads/0688e47d-05ef-4b1d-8aff-3a91e5e88a7c.png" alt="Vlad from Nexolutions" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-nexo-purple shadow-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('demo.title')}</h2>
              <p className="text-lg text-nexo-gray-300 font-inter mb-6">
                {t('demo.description')}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-nexo-gray-200">{t('demo.perfectFor')}</h3>
                <ul className="text-nexo-gray-300 font-inter space-y-2 text-left max-w-2xl">
                  <li>• {t('demo.point1')}</li>
                  <li>• {t('demo.point2')}</li>
                  <li>• {t('demo.point3')}</li>
                  <li>• {t('demo.point4')}</li>
                  <li>• {t('demo.point5')}</li>
                </ul>
              </div>
              
              <p className="text-lg text-nexo-gray-300 font-inter mb-8">
                {t('demo.conclusion')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="nexo" size="xl" className="w-full sm:w-auto">
                    {t('demo.title')}
                  </Button>
                </a>
                <div className="flex gap-4">
                  <a href={`mailto:${email}`} className="text-nexo-gray-300 hover:text-nexo-purple transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                    </svg>
                  </a>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-nexo-gray-300 hover:text-nexo-purple transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
                    </svg>
                  </a>
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-nexo-gray-300 hover:text-nexo-purple transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12S8.597 18.163 12 18.163 18.162 15.404 18.162 12 15.403 5.838 12 5.838ZM12 15.162C10.238 15.162 8.838 13.762 8.838 12S10.238 8.838 12 8.838 15.162 10.238 15.162 12 13.762 15.162 12 15.162ZM19.846 5.595C19.846 4.8 19.2 4.154 18.406 4.154S16.966 4.8 16.966 5.595 17.61 6.439 18.406 6.439 19.846 6.034 19.846 5.595Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-32 text-center text-nexo-gray-400 font-inter text-sm">
        <p>{t('footer.copyright')}</p>
        <div className="mt-2">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">LinkedIn</a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">INSTA</a>
        </div>
      </footer>
    </main>;
};
export default Nexolutions;