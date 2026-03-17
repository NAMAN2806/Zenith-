export interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
}
