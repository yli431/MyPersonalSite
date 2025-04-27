// @project
import branding from '@/branding.json';

export const experiences = {
  heading: 'Experience',
  // defaultExpanded: 'Fees & Charges',
  faqList: [
    {
      question: `University of Canterbury - Student`,
      answer: `Final year student studying Computer Science & Mathematics. This dual focus has sharpened my problem-solving mindset and deepened my understanding of systems and logic.`,
      category: 'General',
      backgroundImage: '/images/experience-icons/UClogo-rectangle.jpeg'
    },
    {
      question: `Ministry of Health COVID Healthline - Consultant`,
      answer: `Use Effective communication skills to advise clients on best practices for managing their COVID-related health issues; Draft reports, presentations, and other materials for senior management review.`,
      category: 'General',
      backgroundImage: '/images/experience-icons/MOHNZ.jpeg'
    },
    {
      question: `Harcourts - Personal Assistant`,
      answer: `Manage all listing & sold properties on Trademe, Homes.co.nz, Teamglobal websites, and assist marketing activities and mess media release.`,
      category: 'General',
      backgroundImage: '/images/experience-icons/Harcourts.jpeg'
    },
    {
      question: `2008 Olympic Games - Volunteer`,
      answer: `Ensured the safe and timely transportation of athletes and staff between the Olympic Village and competition venues. Provided accurate, friendly, and prompt assistance with Olympic-related inquiries to enhance the overall experience for participants.`,
      // answer: {
      //   content: `Yes, ${branding.brandName} is built for both, with a Figma UI kit for designers and React code for developers.`,
      //   type: 'list',
      //   data: [
      //     { primary: 'Figma UI Kit for Designers.' },
      //     { primary: 'React Material UI Code for Developers.' },
      //     { primary: 'Seamless Collaboration.' }
      //   ]
      // },
      category: 'General',
      backgroundImage: '/images/experience-icons/Olimpicos_Beijing_2008.jpg'
    },
    {
      question: `What's included in the ${branding.brandName} license?`,
      answer: {
        content: 'It includes the Figma UI kit, React Material UI codebase, regular updates, and customer support.',
        type: 'list',
        data: [
          { primary: `One License = One End Product` },
          { primary: `Separate License for Each Product` },
          { primary: `Comply with License Terms` }
        ]
      },
      category: 'Pricing & Licenses'
    },
    {
      question: `Can I use ${branding.brandName} for multiple projects?`,
      answer: {
        content:
          'No, one license allows usage in a single end product. For each new product or project, you are required to purchase a separate license. This ensures compliance with the licensing terms and provides ongoing support for each individual product. Make sure to obtain the appropriate license for every new project you work on.',
        type: 'list',
        data: [
          { primary: `One License = One End Product` },
          { primary: `Separate License for Each Product` },
          { primary: `Comply with License Terms` }
        ]
      },
      category: 'Pricing & Licenses'
    },

    {
      question: 'Do you offer refunds?',
      answer:
        'Yes, we offer refunds, but only if you provide a valid reason to support your claim. For more details, please review our MUI Store Refund Policy.',
      category: 'Pricing'
    },
    {
      question: 'Do I get access to future updates?',
      answer: {
        content:
          'Yes, you will receive future updates for 1 year from the date of purchase. If you need updates after 1 year, you will need to purchase the license again. However, this is not a renewal—your license is valid for a lifetime, but updates are limited to the 1-year period.',
        type: 'list',
        data: [{ primary: `1 Year Free Updates` }, { primary: `License validity is lifetime` }]
      },
      category: 'Support & Updates'
    },
    {
      question: 'Is support included with the template purchase?',
      answer: {
        content:
          'Support is included for 6 months, but it is limited to resolving issues within the template itself. We do not provide support for installation, customization queries, or troubleshooting unrelated issues. For ongoing support beyond 6 months, you will need to extend the support period with an additional purchase.',
        type: 'list',
        data: [{ primary: `6 Months Support` }, { primary: `No Installation Support` }, { primary: `No Customization Support` }]
      },
      category: 'Support & Updates'
    }
  ],
  activeCategory: 'General'
};
