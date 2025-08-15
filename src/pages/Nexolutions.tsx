import { Button } from "@/components/ui/button";
import NexoLogo from "@/components/NexoLogo";
import StepCard from "@/components/StepCard";
import ServiceCard from "@/components/ServiceCard";

const Nexolutions = () => {
  const calendlyUrl = "https://calendly.com/nexolutions/30min";

  return (
    <main className="antialiased bg-background text-foreground font-jakarta">
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 md:px-8 lg:px-32">
        <div className="flex justify-end mb-8">
          <NexoLogo />
        </div>
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
            AI Services<br />for your Business<br />Growth
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl font-inter text-nexo-gray-300">
            We'll pump your company with AI. As a leading AI automation agency We deliver top results.
          </p>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="nexo" size="xl" className="mt-8">
              Speak to Team
            </Button>
          </a>
        </div>
      </section>

      {/* Enhance Workflows */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Enhance your workflows to maximize performance and take effective control of your time. Focus on what truly matters to your business, while routine tasks run on autopilot with the help of our no-code and code-based solutions.
          </h2>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="nexo" size="xl" className="mt-8">
              Speak to Team
            </Button>
          </a>
        </div>
      </section>

      {/* How it Works */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-5xl font-bold mb-12">How it works?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <StepCard
            step="Step 1"
            title="Book a call"
            description="If our services is a good fit, we'll reach out the same day for a introductory discussion. Plans & Pricing ↓"
          />
          <StepCard
            step="Step 2"
            title="Share your vision"
            description="Once we have your vision, we'll analyse your goals, business requirements and constraints, break the project into bite-sized tasks, and start implementing."
          />
          <StepCard
            step="Step 3"
            title="Continuous results"
            description="Our team effectively solves your tasks and implements AI as a strategic asset, ensuring it becomes an integral part of your company's workflow."
          />
          <StepCard
            step="Step 4"
            title="Enjoy the growth"
            description="Our results drive your business growth, which is our main goal. We offer detailed instructions, training, and tech support as long as you need to maximize our work's value."
            icon={
              <svg className="w-16 h-16 mx-auto text-nexo-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.4 9.6H22L16.3 14.4L18.7 22L12 17.2L5.3 22L7.7 14.4L2 9.6H9.6L12 2Z" fill="currentColor"/>
              </svg>
            }
          />
        </div>
        <div className="text-center mt-12">
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="nexo" size="xl">
              Speak to Team
            </Button>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
          <div className="text-center">
            <svg className="mx-auto mb-4 w-10 h-10 text-nexo-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-lg font-medium">Quick onboarding faster than new hires</p>
          </div>
          <div className="text-center">
            <svg className="mx-auto mb-4 w-10 h-10 text-nexo-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <p className="text-lg font-medium">Updates weekly after agreeing on tasks</p>
          </div>
          <div className="text-center">
            <svg className="mx-auto mb-4 w-10 h-10 text-nexo-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-medium">Revisions to your full satisfaction</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-5xl font-bold text-center mb-12">Services</h2>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Business process automation"
            description="Let AI handle repetitive tasks and workflows. Improve efficiency, minimize errors, and free up time for strategic work, ultimately driving cost savings."
            className="service-card-1"
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.5 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L8.5 8.5L12 2Z"/>
              </svg>
            }
          />
          <ServiceCard
            title="Integrate AI into your company's data"
            description="Our AI automation services empower you to leverage data-driven automation, generate actionable insights, and use predictive analytics to support informed decision-making."
            className="service-card-2"
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3H21V21H3V3ZM5 5V19H19V5H5ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z"/>
              </svg>
            }
          />
          <ServiceCard
            title="AI-powered apps development"
            description="We develop apps that deliver personalized, real-time insights and transform user experiences, including AI chatbots, image recognition for augmented reality, and predictive analytics for top-tier recommendations."
            className="service-card-3"
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z"/>
              </svg>
            }
          />
          <ServiceCard
            title="AI automation consulting"
            description="Looking to find the best solution for your needs? We offer tailored consultations to provide custom solutions that align with your specific processes and industry requirements."
            className="service-card-4"
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
              </svg>
            }
          />
          <ServiceCard
            title="Generative AI integration"
            description="No more wasting hours on content creation − whether it's copy, images, videos, or voiceovers. We streamline the process, enabling you to produce content up to 27x faster."
            className="service-card-5"
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.74L21 12L14.74 12.26L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.26L3 12L9.26 11.74L5 7L10.91 8.26L12 2Z"/>
              </svg>
            }
          />
          <ServiceCard
            title="Ongoing Maintenance and Support"
            description="We don't stop at project delivery. As your partners, we provide continuous improvements, scalability options, and ongoing support to ensure your project grows alongside your business."
            className="service-card-6"
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 20C10.9 20 10 19.1 10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20ZM6 8C7.1 8 8 8.9 8 10C8 11.1 7.1 12 6 12C4.9 12 4 11.1 4 10C4 8.9 4.9 8 6 8ZM18 8C19.1 8 20 8.9 20 10C20 11.1 19.1 12 18 12C16.9 12 16 11.1 16 10C16 8.9 16.9 8 18 8Z"/>
              </svg>
            }
          />
        </div>
      </section>

      {/* Suitable For */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold">We are suitable for</h2>
          <p className="mt-4 text-lg text-nexo-gray-400 font-inter">Because we can solve the challenges that other companies can't reach</p>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="nexo" size="xl" className="mt-6">
              Speak to Team
            </Button>
          </a>
        </div>
        <div className="mt-12 space-y-8 md:space-y-0 md:flex md:flex-col md:gap-8">
          <div className="bg-white text-black rounded-2xl p-8 max-w-xl hover-scale">
            <h3 className="text-3xl font-bold">Small business</h3>
            <svg className="w-24 h-24 mx-auto my-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="18" cy="6" r="4" strokeWidth="2" />
              <circle cx="6" cy="18" r="4" strokeWidth="2" />
            </svg>
            <h4 className="text-2xl font-bold">AI automation</h4>
            <p className="mt-4 text-gray-700 font-inter">Looking to streamline operations and enhance customer engagement? Our tailored AI solutions can help you optimize processes, improve decision-making, and drive growth. Let us empower your small business to compete more effectively in today's market.</p>
          </div>
          <div className="bg-nexo-purple text-white rounded-2xl p-8 max-w-xl md:ml-auto hover-scale">
            <h3 className="text-3xl font-bold">Active products</h3>
            <svg className="w-24 h-24 mx-auto my-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="12" cy="20" r="2" />
              <circle cx="4" cy="12" r="2" />
              <circle cx="20" cy="12" r="2" />
              <circle cx="6" cy="6" r="2" />
              <circle cx="18" cy="18" r="2" />
            </svg>
            <h4 className="text-2xl font-bold">Add AI features</h4>
            <p className="mt-4 font-inter">Already have an impressive, cutting-edge product? Let's take it further. We'll add powerful AI features to automate tasks, improve user engagement, and boost overall efficiency, making your business more effective.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 max-w-xl hover-scale">
            <h3 className="text-3xl font-bold">Startups</h3>
            <svg className="w-24 h-24 mx-auto my-6 text-nexo-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="8" cy="12" r="4" strokeWidth="2" />
              <circle cx="16" cy="12" r="4" strokeWidth="2" />
            </svg>
            <h4 className="text-2xl font-bold">AI product from scratch</h4>
            <p className="mt-4 text-nexo-gray-400 font-inter">Got a revolutionary AI idea? With our expertise in helping startups, we'll turn your concept into a scalable MVP ready for future success. Together, we'll strike the perfect balance between innovation and productivity.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-5xl font-bold">Pricing</h2>
        <p className="mt-4 text-lg text-nexo-gray-400 font-inter">One monthly fee, no surprises. Simple pricing with no hidden costs, just ongoing AI automation support when you need it.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 hover-scale">
            <h3 className="text-xl font-medium text-nexo-gray-300">Starter</h3>
            <h4 className="text-6xl font-extrabold">989 USD</h4>
            <p className="text-nexo-gray-400 text-sm">per month</p>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="nexo-white" size="xl" className="mt-6 w-full md:w-auto">
                Get started
              </Button>
            </a>
            <ul className="mt-8 space-y-4 text-nexo-gray-400 font-inter">
              <li>○ Up to 2 projects at a time</li>
              <li>○ Leading experts</li>
              <li>○ All services with limited code development</li>
              <li>○ Up to 45 min/week for calls</li>
              <li>○ Support on a first-come, first-served basis</li>
              <li>○ Monthly analytics report</li>
              <li>○ Pause or cancel anytime</li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-2xl p-8 hover-scale">
            <h3 className="text-xl font-medium text-nexo-gray-700">Master</h3>
            <h4 className="text-6xl font-extrabold">2 899 USD</h4>
            <p className="text-nexo-gray-400 text-sm">per month</p>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="nexo" size="xl" className="mt-6 w-full md:w-auto">
                Get started
              </Button>
            </a>
            <ul className="mt-8 space-y-4 text-nexo-gray-700 font-inter">
              <li>○ Up to 6 projects at a time</li>
              <li>○ Entire team</li>
              <li>○ All services without limits</li>
              <li>○ Up to 120 min/week for calls</li>
              <li>○ Priority support in a way handy for you</li>
              <li>○ Weekly analytics report</li>
              <li>○ Pause or cancel anytime</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-bold">Custom offer</h3>
          <p className="mt-4 text-lg text-nexo-gray-400 font-inter">Want fix pricing? Tell us more about your project</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="nexo-outline" size="xl">
                Book call
              </Button>
            </a>
            <p className="text-nexo-gray-400 font-inter">or mail us at <a href="mailto:hey@sanny.ai" className="underline">hey@sanny.ai</a></p>
          </div>
        </div>
      </section>

      {/* Still not sure */}
      <section className="pb-16 px-4 md:px-8 lg:px-32 text-center">
        <h2 className="text-5xl font-bold">Still not sure?</h2>
        <p className="mt-4 text-lg text-nexo-gray-400 font-inter max-w-xl mx-auto">Contact us to learn more about us and figure out how we can change your way with AI</p>
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="nexo-white" size="2xl" className="mt-8">
            Book call
          </Button>
        </a>
        <p className="mt-4 text-nexo-gray-400 font-inter">or mail us at <a href="mailto:nexolutions.tech@gmail.com" className="underline">nexolutions.tech@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-32 text-center text-nexo-gray-400 font-inter text-sm">
        <p>2025 © NEXOLUTIONS® AI Agency Inc.</p>
        <div className="mt-2">
          <a href="https://www.linkedin.com/company/nexolutions-ai" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">LinkedIn</a>
          <a href="https://www.instagram.com/nexolutions.ai/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">INSTA</a>
        </div>
      </footer>
    </main>
  );
};

export default Nexolutions;