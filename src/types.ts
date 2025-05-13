export interface Character {
  id: string;
  name: string;
  profileImage: string;
  bgColor: string;
  quotes: string[];
  description: string[];
  gallery?: string[];
}

export interface Location {
  id: string;
  name: string;
  image: string;
  description: string;
  points: {
    title: string;
    description: string;
  }[];
}