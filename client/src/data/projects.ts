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
    title: "NexusAI Analytics Platform",
    description: "An AI-driven analytics platform that provides predictive insights for e-commerce businesses. The platform uses machine learning algorithms to analyze customer behavior, optimize inventory, and forecast sales trends.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL", "Docker"],
    demoLink: "https://demo.nexusai.com",
    githubLink: "https://github.com/example/nexusai",
    features: [
      "Real-time data processing and analytics",
      "Advanced machine learning models for prediction",
      "Interactive dashboards with data visualization",
      "Customer behavior analysis and segmentation",
      "Automated inventory optimization",
      "Sales forecasting with 95% accuracy"
    ]
  },
  {
    id: 2,
    title: "MediTrack Healthcare App",
    description: "A comprehensive mobile application designed for patients to manage their healthcare journey. Features include prescription management, appointment scheduling, and secure communication with healthcare providers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "mobile",
    categoryName: "Mobile App",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB", "Push Notifications"],
    demoLink: "https://meditrack.demo.com",
    githubLink: "https://github.com/example/meditrack",
    features: [
      "Secure prescription management system",
      "Real-time appointment scheduling",
      "Medication reminders and alerts",
      "Digital health record management",
      "HIPAA-compliant messaging system",
      "Integration with pharmacy networks"
    ]
  },
  {
    id: 3,
    title: "CloudScale Infrastructure Manager",
    description: "A cloud infrastructure management platform that helps organizations automate their cloud operations, optimize costs, and ensure security compliance across multiple cloud providers.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "cloud",
    categoryName: "Cloud Computing",
    technologies: ["Terraform", "AWS", "Azure", "Kubernetes", "Go", "React"],
    demoLink: "https://cloudscale.demo.com",
    githubLink: "https://github.com/example/cloudscale",
    features: [
      "Multi-cloud resource management",
      "Infrastructure as Code (IaC) automation",
      "Cost optimization and budgeting",
      "Security compliance monitoring",
      "Real-time performance metrics",
      "Disaster recovery automation"
    ]
  },
  {
    id: 4,
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
    id: 5,
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