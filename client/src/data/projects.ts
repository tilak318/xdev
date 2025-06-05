export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'ai' | 'web' | 'mobile' | 'cloud' | 'automation';
  categoryName: string;
  image: string;
  technologies: string[];
  link?: string;
  demoLink?: string;
  githubLink?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "UnderTheArch Portfolio",
    description: "A dynamic architectural portfolio platform showcasing UnderTheArch's innovative designs and projects. The platform includes comprehensive features like interior cost estimation, career opportunities, blog management, and an advanced admin panel for content management. It serves as both a portfolio and a complete business management solution.",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "web",
    categoryName: "Web Application",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Framer Motion"],
    link: "https://underthearch.in",
    features: [
      "Interactive interior cost calculator",
      "Dynamic blog management system",
      "Career portal with application tracking",
      "Comprehensive admin dashboard",
      "Project portfolio showcase",
      "Contact and inquiry management"
    ]
  },
  {
    id: 8,
    title: "JP Sales Corporation",
    description: "JP Sales Corporation is a leading steel manufacturer, part of a multinational conglomerate. This website presents their extensive product range, manufacturing capabilities, and corporate information.",
    image: "https://images.unsplash.com/photo-1697698532634-ea59b636ccea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "web",
    categoryName: "Web Application",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    link: "http://jpsalescorporation.com",
    features: [
      "Product catalog and specifications",
      "Information about manufacturing processes",
      "Company profile and history",
      "Contact information and inquiry forms",
      "News and updates section"
    ]
  },
  {
    id: 2,
    title: "WatchInsight Analytics Platform",
    description: "A comprehensive luxury watch market analysis platform offering real-time price calculations and market insights. The platform enables users to evaluate their timepieces, explore market trends, and stay updated with the latest watch news and developments.",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "web",
    categoryName: "Web Application",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Market API"],
    link: "https://watchinsight.onrender.com",
    features: [
      "Real-time watch price calculator",
      "Market trend analysis and visualization",
      "Comprehensive watch database",
      "Latest watch news and updates",
      "Personal collection value tracking",
      "Interactive market insights dashboard"
    ]
  },
  {
    id: 3,
    title: "LokiChess Platform",
    description: "An interactive chess platform that combines traditional chess gameplay with modern features. Players can challenge AI opponents, play against friends, and track their performance through a comprehensive rating system. The platform offers real-time gameplay and maintains detailed player statistics.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "web",
    categoryName: "Web Application",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Chess.js"],
    link: "https://lokichess.onrender.com",
    features: [
      "AI opponent with multiple difficulty levels",
      "Real-time multiplayer chess matches",
      "Player rating and ranking system",
      "Game history and analysis",
      "Friend challenge system",
      "Live match statistics tracking"
    ]
  },
  {
    id: 4,
    title: "AI Newsletter Generator",
    description: "An innovative AI-powered newsletter platform that automatically generates comprehensive newsletters about artificial intelligence. Built by xDev Solutions, this platform leverages advanced AI agents to curate, analyze, and present the latest AI news, trends, and insights in a digestible newsletter format.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["Python", "Groq", "LangChain", "Seaper", "React", "REST API"],
    link: "https://ainewsletter.onrender.com",
    features: [
      "AI-powered content generation and curation",
      "Automated newsletter compilation and formatting",
      "Intelligent topic selection and categorization",
      "Customizable newsletter templates",
      "Real-time AI news aggregation",
      "User-friendly subscription management"
    ]
  },
  {
    id: 5,
    title: "Shadow Mind - AI Social Media Tools",
    description: "An intelligent social media analytics and content planning platform that leverages AI to provide brand analysis and content calendars. Helps businesses optimize their social media strategy with data-driven insights.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["React", "TypeScript", "Flask", "Python", "Langchain", "TailwindCSS"],
    demoLink: "https://shadowmind.onrender.com",
    features: [
      "Brand social media presence analysis",
      "Platform usage and audience insights",
      "Content strategy evaluation",
      "Sentiment analysis for social posts",
      "AI-powered content calendar generation",
      "Customized content planning by industry"
    ]
  },
  {
    id: 6,
    title: "StartupSpark - AI Idea Validator",
    description: "An AI-powered startup idea validation platform that provides comprehensive analysis of business ideas through market research, ecosystem analysis, business model evaluation, and investment potential assessment.",
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["Python", "LangChain", "LLMs", "React", "REST API"],
    link: "https://startupsparkai.onrender.com",
    features: [
      "AI-powered startup idea validation",
      "Market research and analysis",
      "Ecosystem and competitor evaluation",
      "Business model assessment",
      "Investment potential analysis",
      "Comprehensive validation report generation"
    ]
  },
  {
    id: 7,
    title: "NourishWise AI - Personalized Nutrition Assistant",
    description: "Personalized nutrition guidance crafted by experts to help you achieve your health goals with elegance and precision. This AI agent suggests diet plans based on patients' health situations.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["AI", "Nutrition", "Health", "React", "Node.js"],
    link: "https://nourishwiseai.onrender.com",
    features: [
      "Personalized diet recommendations",
      "Health goal tracking",
      "Nutrition expert knowledge base",
      "Interactive meal planning",
      "Health progress monitoring"
    ]
  }
];