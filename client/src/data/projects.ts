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
    title: "UnderTheArch Portfolio",
    description: "A dynamic architectural portfolio platform showcasing UnderTheArch's innovative designs and projects. The platform includes comprehensive features like interior cost estimation, career opportunities, blog management, and an advanced admin panel for content management. It serves as both a portfolio and a complete business management solution.",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "web",
    categoryName: "Web Application",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Framer Motion"],
    link: "https://underthearch.onrender.com",
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
    id: 5,
    title: "EcoCommerce Platform",
    description: "A sustainable e-commerce platform that focuses on eco-friendly products and carbon-neutral shipping. Includes features for tracking environmental impact and supporting sustainable vendors.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "web",
    categoryName: "Web Application",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "TailwindCSS"],
    demoLink: "https://ecocommerce.demo.com",
    githubLink: "https://github.com/example/ecocommerce",
    features: [
      "Carbon footprint tracking for orders",
      "Sustainable vendor verification system",
      "Eco-friendly product certification",
      "Green shipping options",
      "Environmental impact dashboard",
      "Community marketplace features"
    ]
  },
  {
    id: 6,
    title: "DevOps Automation Suite",
    description: "A comprehensive DevOps automation platform that streamlines CI/CD pipelines, automates testing, and manages deployments across multiple environments.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "automation",
    categoryName: "DevOps",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Python", "Ansible", "GitLab CI"],
    demoLink: "https://devops-suite.demo.com",
    githubLink: "https://github.com/example/devops-suite",
    features: [
      "Automated CI/CD pipeline management",
      "Infrastructure provisioning automation",
      "Container orchestration",
      "Automated testing and quality checks",
      "Release management automation",
      "Performance monitoring and alerts"
    ]
  }
];