export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}

export interface Highlight {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
