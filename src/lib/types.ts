import { links } from './data';

export type SectionName = (typeof links)[number]['hash'];

export type Link = {
  nameEng: string;
  nameFr: string;
  hash: string;
};

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
