export type Country = {
  slug: string;
  name: string;
  region: string;
  tint: string;
  description: string;
  topUniversities: string[];
};

export type University = {
  id: string;
  name: string;
  country: string;
  ranking: number;
  tuition: string;
  acceptance: string;
  programs: string[];
  categories: string[];
  bestFor: string[];
  about: string;
  scholarship: string;
  image: string;
};

export type Scholarship = {
  id: string;
  title: string;
  value: string;
  eligibility: string;
  deadline: string;
  country: string;
};

export type Program = {
  id: string;
  title: string;
  description: string;
  duration: string;
  country: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  story: string;
  destination: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
};

export type ApplicationItem = {
  id: string;
  university: string;
  course: string;
  status: string;
  progress: number;
};

export type TrackingItem = {
  id: string;
  label: string;
  currentStatus: string;
  progress: number;
  completion: string;
};
