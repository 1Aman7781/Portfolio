export const personalInfo = {
  name: "Aman Raj Kushwaha",
  title: "Frontend Developer",
  tagline: "Building Scalable & Beautiful Web Experiences",
  description:
    "I am a passionate Frontend Developer and Computer Science undergraduate specializing in React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. I enjoy building scalable, responsive, and user-friendly web applications while continuously improving my skills through real-world projects and Data Structures & Algorithms.",
  email: "amanrajkushwaha31oct@gmail.com",
  phone: "+91-9336983706",
  location: "Noida, Uttar Pradesh, India",
  github: "https://github.com/1Aman7781",
  linkedin: "https://www.linkedin.com/in/aman-raj-kushwaha-978b512a3/",
  leetcode: "https://leetcode.com/u/Aman7714/",
  gfg: "https://www.geeksforgeeks.org/profile/aman788dz",
  resumeUrl: "/assets/frontendResume.pdf",
};

export const stats = [
  { value: "150+", label: "DSA Problems" },
  { value: "3+", label: "Projects" },
  { value: "2026", label: "Graduate" },
];

export const aboutCards = [
  {
    icon: "FaReact",
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect, responsive UIs with React.js, Tailwind CSS, and modern design principles.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "FaServer",
    title: "Backend Development",
    description:
      "Building robust REST APIs and server-side logic with Node.js, Express.js, and MongoDB.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: "FaCode",
    title: "Problem Solving",
    description:
      "Solved 150+ DSA problems on LeetCode and GeeksforGeeks, strengthening algorithmic thinking.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "FaLayerGroup",
    title: "Full Stack Projects",
    description:
      "Delivering end-to-end web applications from database design to polished frontend interfaces.",
    color: "from-amber-500 to-orange-500",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    icon: "FaCode",
    color: "from-blue-500 to-cyan-400",
    skills: ["C", "C++", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    icon: "FaReact",
    color: "from-cyan-500 to-blue-500",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: "FaServer",
    color: "from-violet-500 to-purple-500",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase Auth"],
  },
  {
    category: "Developer Tools",
    icon: "FaTools",
    color: "from-pink-500 to-rose-500",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Computer Science",
    icon: "FaBrain",
    color: "from-amber-500 to-orange-500",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

export const projects = [
  {
    id: 1,
    title: "InterviewIQ AI",
    description:
      "AI-powered interview preparation platform built with the MERN stack and Gemini API. Features JWT authentication, PDF resume parsing, job description matching, and AI-generated technical questions, behavioral questions, skill gap analysis, and personalized preparation plans — all visualized through a responsive React.js dashboard.",
    image: "/assets/interviewiq.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/1Aman7781/InterviewIQ-AI",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "Employee Management System",
    description:
      "Role-based Employee Management System built using React.js, Context API, and Tailwind CSS featuring Admin and Employee dashboards with task management, task assignment, and real-time status tracking.",
    image: "/assets/emp.png",
    tech: ["React.js", "Context API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/1Aman7781/Employee-Management-System",
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: "ShopPulse",
    description:
      "Modern MERN E-Commerce Platform with Stripe Payment integration, Cart management, Product Management, Order Management, and a full-featured Admin Dashboard.",
    image: "/assets/shop.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/1Aman7781/ShopPulse",
    live: null,
    featured: true,
  },
  {
    id: 4,
    title: "Quick Chat",
    description:
      "Real-time chat application with instant messaging, user authentication, and online presence indicators built with Socket.IO and Firebase Authentication.",
    image: "/assets/chat.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Firebase", "Tailwind CSS"],
    github: "https://github.com/1Aman7781/Quick-Chat",
    live: null,
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "InterviewIQ AI",
    type: "Personal Project",
    duration: "",
    description: [
      "Built an AI-powered interview preparation platform using the MERN stack and Gemini API.",
      "Implemented JWT authentication with bcrypt password encryption and protected routes.",
      "Developed a resume analysis pipeline by extracting text from PDFs and comparing with job descriptions.",
      "Engineered AI prompts to generate technical questions, behavioral questions, skill gap analysis, and preparation plans.",
      "Designed RESTful APIs and MongoDB schemas to manage users, AI reports, and report history.",
      "Created a responsive React.js dashboard for resume uploads, report visualization, and navigation.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Employee Management System",
    type: "Personal Project",
    duration: "",
    description: [
      "Designed and developed a role-based access system with separate Admin and Employee dashboards.",
      "Implemented Context API for global state management across the application.",
      "Built task assignment, tracking, and status update features with real-time UI feedback.",
      "Ensured fully responsive design using Tailwind CSS across all device sizes.",
    ],
    tech: ["React.js", "Context API", "Tailwind CSS"],
    color: "from-violet-500 to-purple-500",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Raj Kumar Goel Institute of Technology",
    duration: "2022 – 2026",
    score: "CGPA: 7.12",
    icon: "FaUniversity",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    degree: "12th — Science (PCM)",
    institution: "Kendriya Vidyalaya Afs,Gorakhpur,up ",
    duration: "2021 – 2022",
    score: "71.6%",
    icon: "FaSchool",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    degree: "10th",
    institution: "Kendriya Vidyalaya Afs,Gorakhpur,up ",
    duration: "2019 – 2020",
    score: "73.8%",
    icon: "FaGraduationCap",
    color: "from-pink-500 to-rose-500",
  },
];

export const achievements = [
  {
    id: 1,
    title: "150+ DSA Problems",
    subtitle: "LeetCode & GeeksforGeeks",
    description:
      "Solved 150+ Data Structures & Algorithms problems, strengthening problem-solving and analytical skills.",
    icon: "FaCode",
    color: "from-violet-500 to-purple-500",
    stat: "150+",
  },
  {
    id: 2,
    title: "NPTEL Certification",
    subtitle: "The Joy of Computing using Python",
    description:
      "Successfully completed the NPTEL online certification course on The Joy of Computing using Python.",
    icon: "FaCertificate",
    color: "from-amber-500 to-orange-500",
    stat: "Certified",
  },
];

export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Education", to: "education" },
  { label: "Achievements", to: "achievements" },
  { label: "Contact", to: "contact" },
];
