// Portfolio Data Configuration
export const portfolioData = {
  // Stack Technologies
  technologies: [
    {
      name: "HTML5",
      image: "/images/html.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      image: "/images/css3.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      image: "/images/javascript.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "GSAP",
      image: "/images/gsap-greensock.svg",
      url: "https://greensock.com/gsap/",
    },
    {
      name: "Python",
      image: "/images/python.png",
      url: "https://www.python.org/",
    },
    {
      name: "MySQL",
      image: "/images/mysql.png",
      url: "https://www.mysql.com/",
    },
    {
      name: "Heroku",
      image: "/images/heroku.svg",
      url: "https://www.heroku.com/",
    },
    {
      name: "MongoDB",
      image: "/images/MongoDB.png",
      url: "https://www.mongodb.com/",
    },
    {
      name: "Postman",
      image: "/images/Postman.png",
      url: "https://www.postman.com/",
    },
    {
      name: "React",
      image: "/images/react.svg",
      url: "https://reactjs.org/",
    },
  ],

  // Projects
  projects: [
    {
      title: "Split Bill Calculator",
      image: "/images/split_bill.jpg",
      alt: "Split your bill",
      url: "/projects/split-bill/",
    },
    {
      title: "Weather API",
      image: "/images/weather_API.jpg",
      alt: "Weather API",
      url: "https://weather-api-js1.netlify.app",
    },
    {
      title: "Choices Game",
      image: "/images/chices_game.jpg",
      alt: "Choices game",
      url: "/projects/choices-game/",
    },
    {
      title: "Depression Assessment",
      image: "/images/test.jpg",
      alt: "Depression Self Assessment Test",
      url: "/projects/depression-test/",
    },
    {
      title: "Pomodoro Timer",
      image: "/images/pomodoro.jpg",
      alt: "Pomodoro Timer",
      url: "https://gorgeous-cold-operation.glitch.me",
    },
    {
      title: "Sushi Restaurant",
      image: "/images/sushi_restaurant.jpg",
      alt: "Sushi Restaurant Website",
      url: "/projects/sushi-restaurant/",
    },
  ],

  // Radar Chart Configuration
  radarChart: {
    labels: [
      "CRM Integrations",
      "Concierge Flows",
      "Marketplace Design",
      "Luxury Services",
      "Education Tech",
      "AI Automation",
    ],
    data: [25, 20, 15, 15, 15, 10],
    label: "Global Chic Focus",
    colors: {
      backgroundColor: "rgba(255, 159, 67, 0.3)",
      borderColor: "#ff9f43",
      pointBackgroundColor: "#ff9f43",
      pointBorderColor: "#00ffcc",
    },
    description:
      "My expertise spans across various domains, with particular strength in CRM integrations and concierge flows for luxury services.",
  },
};

