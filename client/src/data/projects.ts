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
    description: "An AI-driven analytics platform that provides predictive insights for e-commerce businesses.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "ai",
    categoryName: "AI & ML",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    demoLink: "https://demo.nexusai.com",
    githubLink: "https://github.com/example/nexusai",
    features: [
      "Real-time data processing",
      "Predictive analytics dashboard",
      "Customer behavior analysis",
      "Inventory optimization",
      "Sales forecasting"
    ]
  },
  {
    id: 2,
    title: "MediTrack Healthcare App",
    description: "A mobile application for patients to manage prescriptions and schedule appointments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "mobile",
    categoryName: "Mobile App",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    demoLink: "https://meditrack.demo.com",
    githubLink: "https://github.com/example/meditrack",
    features: [
      "Prescription management",
      "Appointment scheduling",
      "Medication reminders",
      "Health record tracking",
      "Doctor-patient messaging"
    ]
  },
  {
    id: 3,
    title: "Global Connect E-commerce",
    description: "A scalable e-commerce platform with multi-language support and international shipping.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "web",
    categoryName: "Web Development",
    technologies: ["Next.js", "MongoDB", "Stripe", "Vercel"],
    demoLink: "https://globalconnect.demo.com",
    githubLink: "https://github.com/example/globalconnect",
    features: [
      "Multi-language support",
      "International shipping",
      "Multiple payment gateways",
      "Real-time inventory",
      "Analytics dashboard"
    ]
  }
];