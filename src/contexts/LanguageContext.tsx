import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.title': 'AI Services\nfor your Business\nGrowth',
    'hero.subtitle': "We'll pump your company with AI. As a leading AI automation agency We deliver top results.",
    'hero.cta': 'Speak to Team',
    
    // Enhance Workflows
    'enhance.title': 'Enhance your workflows to maximize performance and take effective control of your time. Focus on what truly matters to your business, while routine tasks run on autopilot with the help of our no-code and code-based solutions.',
    
    // How it Works
    'how.title': 'How it works?',
    'step1.title': 'Book a call',
    'step1.description': "If our services is a good fit, we'll reach out the same day for a introductory discussion. Plans & Pricing ↓",
    'step2.title': 'Share your vision',
    'step2.description': "Once we have your vision, we'll analyse your goals, business requirements and constraints, break the project into bite-sized tasks, and start implementing.",
    'step3.title': 'Continuous results',
    'step3.description': "Our team effectively solves your tasks and implements AI as a strategic asset, ensuring it becomes an integral part of your company's workflow.",
    'step4.title': 'Enjoy the growth',
    'step4.description': "Our results drive your business growth, which is our main goal. We offer detailed instructions, training, and tech support as long as you need to maximize our work's value.",
    
    'features.onboarding': 'Quick onboarding faster than new hires',
    'features.updates': 'Updates weekly after agreeing on tasks',
    'features.revisions': 'Revisions to your full satisfaction',
    
    // Services
    'services.title': 'Services',
    'service1.title': 'Business process automation',
    'service1.description': 'Let AI handle repetitive tasks and workflows. Improve efficiency, minimize errors, and free up time for strategic work, ultimately driving cost savings.',
    'service2.title': "Integrate AI into your company's data",
    'service2.description': 'Our AI automation services empower you to leverage data-driven automation, generate actionable insights, and use predictive analytics to support informed decision-making.',
    'service3.title': 'AI-powered apps development',
    'service3.description': 'We develop apps that deliver personalized, real-time insights and transform user experiences, including AI chatbots, image recognition for augmented reality, and predictive analytics for top-tier recommendations.',
    'service4.title': 'AI automation consulting',
    'service4.description': 'Looking to find the best solution for your needs? We offer tailored consultations to provide custom solutions that align with your specific processes and industry requirements.',
    'service5.title': 'Generative AI integration',
    'service5.description': 'No more wasting hours on content creation − whether it\'s copy, images, videos, or voiceovers. We streamline the process, enabling you to produce content up to 27x faster.',
    'service6.title': 'Ongoing Maintenance and Support',
    'service6.description': "We don't stop at project delivery. As your partners, we provide continuous improvements, scalability options, and ongoing support to ensure your project grows alongside your business.",
    
    // Suitable For
    'suitable.title': 'We are suitable for',
    'suitable.subtitle': "Because we can solve the challenges that other companies can't reach",
    'business.title': 'Small business',
    'business.subtitle': 'AI automation',
    'business.description': 'Looking to streamline operations and enhance customer engagement? Our tailored AI solutions can help you optimize processes, improve decision-making, and drive growth. Let us empower your small business to compete more effectively in today\'s market.',
    'products.title': 'Active products',
    'products.subtitle': 'Add AI features',
    'products.description': "Already have an impressive, cutting-edge product? Let's take it further. We'll add powerful AI features to automate tasks, improve user engagement, and boost overall efficiency, making your business more effective.",
    'startups.title': 'Startups',
    'startups.subtitle': 'AI product from scratch',
    'startups.description': "Got a revolutionary AI idea? With our expertise in helping startups, we'll turn your concept into a scalable MVP ready for future success. Together, we'll strike the perfect balance between innovation and productivity.",
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'One monthly fee, no surprises. Simple pricing with no hidden costs, just ongoing AI automation support when you need it.',
    'starter.title': 'Starter',
    'starter.price': '989 USD',
    'starter.period': 'per month',
    'starter.feature1': 'Up to 2 projects at a time',
    'starter.feature2': 'Leading experts',
    'starter.feature3': 'All services with limited code development',
    'starter.feature4': 'Up to 45 min/week for calls',
    'starter.feature5': 'Support on a first-come, first-served basis',
    'starter.feature6': 'Monthly analytics report',
    'starter.feature7': 'Pause or cancel anytime',
    'master.title': 'Master',
    'master.price': '2 899 USD',
    'master.period': 'per month',
    'master.feature1': 'Up to 6 projects at a time',
    'master.feature2': 'Entire team',
    'master.feature3': 'All services without limits',
    'master.feature4': 'Up to 120 min/week for calls',
    'master.feature5': 'Priority support in a way handy for you',
    'master.feature6': 'Weekly analytics report',
    'master.feature7': 'Pause or cancel anytime',
    'getStarted': 'Get started',
    'custom.title': 'Custom offer',
    'custom.description': 'Want fix pricing? Tell us more about your project',
    'bookCall': 'Book call',
    'orEmail': 'or mail us at',
    
    // Still not sure
    'stillNotSure.title': 'Still not sure?',
    'stillNotSure.description': 'Contact us to learn more about us and figure out how we can change your way with AI',
    
    // Demo Call
    'demo.title': 'Free 15-Minute Demo Call',
    'demo.description': "In just 15 minutes, I'll show you exactly how to unlock hidden revenue, automate your workflows, and scale your business faster — using a mix of AI-powered, no-code, and custom-code solutions tailored to your needs.",
    'demo.perfectFor': 'This call is perfect for:',
    'demo.point1': 'E-commerce stores ready to turn browsers into buyers with automated funnels',
    'demo.point2': 'Course creators & info-businesses wanting to streamline sales and delivery',
    'demo.point3': 'Businesses drowning in repetitive work and ready to put operations on autopilot',
    'demo.point4': 'Founders who want measurable results without the guesswork',
    'demo.point5': 'Brands looking for a partner who will treat their growth like our own',
    'demo.conclusion': "Book a spot on Vlad's calendar today — and let's map out a plan to make your business run smoother, sell smarter, and grow faster.",
    
    // Footer
    'footer.copyright': '2025 © NEXOLUTIONS® AI Agency Inc.',
  },
  ru: {
    // Hero Section
    'hero.title': 'AI-Сервисы\nдля роста вашего\nБизнеса',
    'hero.subtitle': 'Мы прокачаем вашу компанию с помощью ИИ. Как ведущее агентство автоматизации ИИ, мы обеспечиваем лучшие результаты.',
    'hero.cta': 'Связаться с командой',
    
    // Enhance Workflows
    'enhance.title': 'Улучшите свои рабочие процессы, чтобы максимизировать производительность и взять эффективный контроль над своим временем. Сосредоточьтесь на том, что действительно важно для вашего бизнеса, в то время как рутинные задачи выполняются на автопилоте с помощью наших no-code и кодовых решений.',
    
    // How it Works
    'how.title': 'Как это работает?',
    'step1.title': 'Забронируйте звонок',
    'step1.description': 'Если наши услуги подходят, мы свяжемся в тот же день для вводного обсуждения. Планы и цены ↓',
    'step2.title': 'Поделитесь своим видением',
    'step2.description': 'Получив ваше видение, мы проанализируем ваши цели, бизнес-требования и ограничения, разобьем проект на небольшие задачи и начнем реализацию.',
    'step3.title': 'Непрерывные результаты',
    'step3.description': 'Наша команда эффективно решает ваши задачи и внедряет ИИ как стратегический актив, обеспечивая его интеграцию в рабочий процесс вашей компании.',
    'step4.title': 'Наслаждайтесь ростом',
    'step4.description': 'Наши результаты способствуют росту вашего бизнеса, что является нашей главной целью. Мы предоставляем подробные инструкции, обучение и техническую поддержку столько, сколько вам нужно.',
    
    'features.onboarding': 'Быстрая адаптация быстрее новых сотрудников',
    'features.updates': 'Еженедельные обновления после согласования задач',
    'features.revisions': 'Доработки до полного удовлетворения',
    
    // Services
    'services.title': 'Услуги',
    'service1.title': 'Автоматизация бизнес-процессов',
    'service1.description': 'Позвольте ИИ обрабатывать повторяющиеся задачи и рабочие процессы. Повысьте эффективность, минимизируйте ошибки и освободите время для стратегической работы.',
    'service2.title': 'Интеграция ИИ в данные вашей компании',
    'service2.description': 'Наши услуги автоматизации ИИ позволяют использовать автоматизацию на основе данных, генерировать практические выводы и использовать прогнозную аналитику для принятия обоснованных решений.',
    'service3.title': 'Разработка приложений на базе ИИ',
    'service3.description': 'Мы разрабатываем приложения, которые предоставляют персонализированные инсайты в реальном времени и трансформируют пользовательский опыт, включая ИИ-чатботы, распознавание изображений для дополненной реальности.',
    'service4.title': 'Консалтинг по автоматизации ИИ',
    'service4.description': 'Ищете лучшее решение для ваших потребностей? Мы предлагаем индивидуальные консультации для предоставления решений, соответствующих вашим процессам и требованиям отрасли.',
    'service5.title': 'Интеграция генеративного ИИ',
    'service5.description': 'Больше никаких потраченных часов на создание контента — будь то копирайтинг, изображения, видео или озвучка. Мы оптимизируем процесс, позволяя производить контент в 27 раз быстрее.',
    'service6.title': 'Постоянное обслуживание и поддержка',
    'service6.description': 'Мы не останавливаемся на доставке проекта. Как ваши партнеры, мы предоставляем постоянные улучшения, варианты масштабирования и постоянную поддержку.',
    
    // Suitable For
    'suitable.title': 'Мы подходим для',
    'suitable.subtitle': 'Потому что мы можем решить проблемы, которые другие компании не могут решить',
    'business.title': 'Малый бизнес',
    'business.subtitle': 'ИИ автоматизация',
    'business.description': 'Хотите оптимизировать операции и улучшить взаимодействие с клиентами? Наши индивидуальные ИИ-решения помогут оптимизировать процессы, улучшить принятие решений и стимулировать рост.',
    'products.title': 'Активные продукты',
    'products.subtitle': 'Добавить ИИ функции',
    'products.description': 'Уже есть впечатляющий, передовой продукт? Давайте пойдем дальше. Мы добавим мощные ИИ-функции для автоматизации задач, улучшения взаимодействия с пользователями и повышения общей эффективности.',
    'startups.title': 'Стартапы',
    'startups.subtitle': 'ИИ продукт с нуля',
    'startups.description': 'Есть революционная ИИ-идея? С нашим опытом помощи стартапам мы превратим вашу концепцию в масштабируемый MVP, готовый к будущему успеху.',
    
    // Pricing
    'pricing.title': 'Цены',
    'pricing.subtitle': 'Одна ежемесячная плата, никаких сюрпризов. Простое ценообразование без скрытых расходов, только постоянная поддержка автоматизации ИИ, когда она вам нужна.',
    'starter.title': 'Стартер',
    'starter.price': '989 USD',
    'starter.period': 'в месяц',
    'starter.feature1': 'До 2 проектов одновременно',
    'starter.feature2': 'Ведущие эксперты',
    'starter.feature3': 'Все услуги с ограниченной разработкой кода',
    'starter.feature4': 'До 45 мин/неделя для звонков',
    'starter.feature5': 'Поддержка в порядке живой очереди',
    'starter.feature6': 'Ежемесячный аналитический отчет',
    'starter.feature7': 'Приостановка или отмена в любое время',
    'master.title': 'Мастер',
    'master.price': '2 899 USD',
    'master.period': 'в месяц',
    'master.feature1': 'До 6 проектов одновременно',
    'master.feature2': 'Полная команда',
    'master.feature3': 'Все услуги без ограничений',
    'master.feature4': 'До 120 мин/неделя для звонков',
    'master.feature5': 'Приоритетная поддержка удобным для вас способом',
    'master.feature6': 'Еженедельный аналитический отчет',
    'master.feature7': 'Приостановка или отмена в любое время',
    'getStarted': 'Начать',
    'custom.title': 'Индивидуальное предложение',
    'custom.description': 'Хотите фиксированную цену? Расскажите нам больше о вашем проекте',
    'bookCall': 'Забронировать звонок',
    'orEmail': 'или напишите нам на',
    
    // Still not sure
    'stillNotSure.title': 'Все еще не уверены?',
    'stillNotSure.description': 'Свяжитесь с нами, чтобы узнать больше о нас и выяснить, как мы можем изменить ваш путь с ИИ',
    
    // Demo Call
    'demo.title': 'Бесплатный 15-минутный демо-звонок',
    'demo.description': 'Всего за 15 минут я покажу вам, как именно разблокировать скрытую прибыль, автоматизировать ваши рабочие процессы и масштабировать ваш бизнес быстрее — используя сочетание ИИ, no-code и индивидуальных кодовых решений.',
    'demo.perfectFor': 'Этот звонок идеально подходит для:',
    'demo.point1': 'Интернет-магазинов, готовых превратить посетителей в покупателей с помощью автоматизированных воронок',
    'demo.point2': 'Создателей курсов и информационного бизнеса, желающих оптимизировать продажи и доставку',
    'demo.point3': 'Бизнесов, утопающих в повторяющейся работе и готовых перевести операции на автопилот',
    'demo.point4': 'Основателей, которые хотят измеримых результатов без догадок',
    'demo.point5': 'Брендов, ищущих партнера, который будет относиться к их росту как к своему собственному',
    'demo.conclusion': 'Забронируйте место в календаре Влада сегодня — и давайте составим план, чтобы ваш бизнес работал более плавно, продавал умнее и рос быстрее.',
    
    // Footer
    'footer.copyright': '2025 © NEXOLUTIONS® AI Агентство Inc.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};