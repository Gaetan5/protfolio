export type Link = {
  key: string;
  hash: string;
};

export type SectionName =
  | '#home'
  | '#about'
  | '#experience'
  | '#projects'
  | '#skills'
  | '#certifications'
  | '#blog'
  | '#contact'
  | '#testimonials'
  | '#executive-summary'
  | '#github-stats';

type About = {
  title: string;
  im: string;
  job: string;
  description: string;
  stacks: string;
  otherStacks: string;
  otherPassion: string;
  conclusion: string;
};

export type Texts = {
  about: About;
};
