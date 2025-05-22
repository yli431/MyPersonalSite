// @project
// import { PAGE_PATH } from '@/path';

// @assets
const imagePrefix = '/assets/images/presentation';

export const projects = {
  heading: 'Projects',
  primaryBtn: { children: 'More coming soon..' },
  sections: [
    {
      animationDelay: 0.2,
      title: 'Christchurch Real Estate Data Center',
      subTitle:
        'Store, manage, demonstrate, and analyze data that may impact the real estate market in Christchurch.',
      description: [
          'Challenge: A chatbot was required to assist website users with querying the database, searching for data, and performing data analysis based on natural language inputs. After evaluating various options, implemented a chatbot using the Python library LangChain, integrated with the OpenAI API.',
        ],
      image: `${imagePrefix}/data_centre.jpeg`,
      showVisit: true,
      link: '#'
      // link: PAGE_PATH
    },
    {
      animationDelay: 0.3,
      title: '2024 Petition Platform Web Client',
      subTitle: 'Using React/JavaScript, implementing eighteen user stories.',
      description:
        'A responsive petition web client built with React, fulfilling 18 user stories such as account creation, petition signing, and admin management. Integrated RESTful APIs and included validation and accessibility improvements.',
      image: `${imagePrefix}/petition.jpeg`,
      showVisit: false,
      link: '#'
      // link: PAGE_PATH
    },
    {
      animationDelay: 0.4,
      title: 'Google Restaurant Reviews Analysis',
      subTitle:
        'Investigates the potential relationships among different values on the Google Restaurant platform.',
      description:
        'This project investigates the potential relationships among PageRank values, average customer ratings, and the frequent words used in reviews for restaurants on the Google Restaurant platform. By analyzing a dataset of restaurant reviews, we calculate the PageRank for each business ID based on the number of reviewers, determine the average ratings from all reviewers, and identify the most frequent words used in reviews. This study aims to uncover how these metrics interrelate and whether higher PageRank values are indicative of better average ratings. The findings could provide valuable insights for optimizing search result rankings on the platform and offer restaurant owners strategies to enhance their visibility and customer satisfaction.',
      image: `${imagePrefix}/reviews.jpeg`,
      showVisit: false,
      link: '#'
      // link: PAGE_PATH.feature
    }
  ]
};
