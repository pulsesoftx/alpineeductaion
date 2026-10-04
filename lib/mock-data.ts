import type { BlogPost, Country, EventItem, Scholarship, Testimonial, TrackingItem, University, ApplicationItem, Program } from "@/types";

export const countries: Country[] = [
  {
    slug: "malta",
    name: "Malta",
    region: "Europe",
    tint: "from-[#0d253d]/20 to-[#c0902b]/20",
    description: "English-speaking environment, excellent student support, and a growing international education scene.",
    topUniversities: ["University of Malta", "MCAST", "American University of Malta"],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    region: "Asia",
    tint: "from-[#0d253d]/20 to-[#c0902b]/20",
    description: "Technology-focused learning, dynamic campuses, and strong career opportunities in innovation sectors.",
    topUniversities: ["Seoul National", "KAIST", "Yonsei"],
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    region: "Europe",
    tint: "from-[#0d253d]/20 to-[#c0902b]/20",
    description: "Affordable study options, Mediterranean lifestyle, and university pathways across Europe.",
    topUniversities: ["University of Cyprus", "European University Cyprus", "Neapolis University"],
  },
  {
    slug: "usa",
    name: "USA",
    region: "North America",
    tint: "from-[#0d253d]/20 to-[#c0902b]/20",
    description: "World-class institutions, research opportunities, and diverse student communities.",
    topUniversities: ["Harvard", "MIT", "Stanford"],
  },
  {
    slug: "germany",
    name: "Germany",
    region: "Europe",
    tint: "from-[#0d253d]/20 to-[#c0902b]/20",
    description: "Strong STEM reputation, low-cost education, and excellent industry connections.",
    topUniversities: ["TU Munich", "LMU Munich", "RWTH Aachen"],
  },
];

export const universities: University[] = [
  {
    id: "malta-university",
    name: "University of Malta",
    country: "Malta",
    ranking: 801,
    tuition: "€8k–€12k/year",
    acceptance: "67%",
    programs: ["Business", "IT", "Nursing"],
    categories: ["Business & Management", "Computer Science", "Healthcare"],
    bestFor: ["Business", "IT", "Healthcare"],
    about:
      "The University of Malta is a well-established Mediterranean university known for its international student community, English-medium programs, and strong practical learning environment.",
    scholarship: "Merit-based scholarships",
    image: "/universities/unsw.jpg",
  },
  {
    id: "korea-university",
    name: "Korea University",
    country: "South Korea",
    ranking: 40,
    tuition: "₩5M–₩8M/year",
    acceptance: "58%",
    programs: ["Engineering", "AI", "International Business"],
    categories: ["Engineering", "AI & Data", "Business & Finance"],
    bestFor: ["Engineering", "AI", "Global Careers"],
    about:
      "Korea University is one of South Korea's leading institutions, recognised for research excellence, innovation-driven programs, and strong industry links in Asia.",
    scholarship: "Global scholarship support",
    image: "/universities/ubc.jpg",
  },
  {
    id: "cyprus-university",
    name: "University of Cyprus",
    country: "Cyprus",
    ranking: 550,
    tuition: "€6k–€10k/year",
    acceptance: "70%",
    programs: ["Computer Science", "Architecture", "Medicine"],
    categories: ["Technology", "Architecture", "Medical Sciences"],
    bestFor: ["Tech", "Architecture", "Medicine"],
    about:
      "The University of Cyprus offers a student-friendly academic environment with affordable tuition, European recognition, and excellent options in engineering and science fields.",
    scholarship: "International student grants",
    image: "/universities/imperial.jpg",
  },
  {
    id: "stanford",
    name: "Stanford University",
    country: "USA",
    ranking: 4,
    tuition: "$58k/year",
    acceptance: "4%",
    programs: ["Computer Science", "Engineering", "Business"],
    categories: ["Technology", "Engineering", "Entrepreneurship"],
    bestFor: ["AI", "Engineering", "Innovation"],
    about:
      "Stanford is globally renowned for innovation, entrepreneurship, and research excellence, making it a top choice for students seeking leadership in technology and business.",
    scholarship: "Need-based and merit aid",
    image: "/universities/ubc.jpg",
  },
  {
    id: "tum",
    name: "Technical University of Munich",
    country: "Germany",
    ranking: 19,
    tuition: "€0–€2k/year",
    acceptance: "29%",
    programs: ["Data Science", "Robotics", "Mechanical Engineering"],
    categories: ["STEM", "Robotics", "Advanced Engineering"],
    bestFor: ["STEM", "Robotics", "Research"],
    about:
      "Technical University of Munich is one of Germany's most prestigious technical universities, known for its strong STEM reputation, research output, and industry partnerships.",
    scholarship: "DAAD and department funding",
    image: "/universities/imperial.jpg",
  },
];

export const scholarships: Scholarship[] = [
  {
    id: "s1",
    title: "Future Leaders Scholarship",
    value: "Up to $8,000",
    eligibility: "Academic excellence and leadership",
    deadline: "Aug 24, 2026",
    country: "USA",
  },
  {
    id: "s2",
    title: "Global Innovation Grant",
    value: "Up to 50% tuition",
    eligibility: "STEM and research focus",
    deadline: "Sep 10, 2026",
    country: "Germany",
  },
  {
    id: "s3",
    title: "Asia Tech Scholarship",
    value: "Up to 30% tuition",
    eligibility: "STEM applicants with strong academics",
    deadline: "Oct 1, 2026",
    country: "South Korea",
  },
];

export const programs: Program[] = [
  {
    id: "p1",
    title: "Master of Applied AI",
    description: "Build practical AI solutions for global enterprises.",
    duration: "18 months",
    country: "Germany",
  },
  {
    id: "p2",
    title: "MBA with Global Finance",
    description: "Lead cross-border business strategies with confidence.",
    duration: "12 months",
    country: "USA",
  },
  {
    id: "p3",
    title: "BSc in Computer Science",
    description: "Develop strong engineering and product foundations.",
    duration: "4 years",
    country: "South Korea",
  },
  {
    id: "p4",
    title: "Business Management in Malta",
    description: "Study in a multilingual European environment with strong career support.",
    duration: "3 years",
    country: "Malta",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amara Chen",
    role: "Master’s in Data Science",
    story: "The team simplified every step from shortlist to visa. We felt guided at every turn.",
    destination: "University of Melbourne",
  },
  {
    id: "t2",
    name: "Rohan Patel",
    role: "MBA Candidate",
    story: "They helped us compare budgets, scholarships, and timelines like a true partner.",
    destination: "Imperial College London",
  },
];

export const blogs: BlogPost[] = [
  {
    id: "b1",
    title: "How to choose the right study destination in 2026",
    excerpt: "A practical framework for comparing cost, career outcomes, and lifestyle.",
    category: "Guides",
    readTime: "6 min read",
    image: "/hero-illustration.svg",
  },
  {
    id: "b2",
    title: "Scholarships that are still open for international students",
    excerpt: "We highlight the most competitive funding options and deadlines.",
    category: "Financing",
    readTime: "4 min read",
    image: "/hero-illustration.svg",
  },
];

export const events: EventItem[] = [
  {
    id: "e1",
    title: "Study in Australia Webinar",
    date: "Aug 12, 2026",
    location: "Virtual",
    type: "Webinar",
  },
  {
    id: "e2",
    title: "Canada Admissions Clinic",
    date: "Sep 03, 2026",
    location: "Dubai",
    type: "Workshop",
  },
];

export const applications: ApplicationItem[] = [
  {
    id: "a1",
    university: "UNSW",
    course: "Applied AI",
    status: "Document Review",
    progress: 74,
  },
  {
    id: "a2",
    university: "UBC",
    course: "Computer Science",
    status: "Offer Received",
    progress: 92,
  },
];

export const tracking: TrackingItem[] = [
  {
    id: "t1",
    label: "Admission",
    currentStatus: "Interview scheduled",
    progress: 70,
    completion: "2 weeks",
  },
  {
    id: "t2",
    label: "Visa",
    currentStatus: "Document collection",
    progress: 55,
    completion: "3 weeks",
  },
];
