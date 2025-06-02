export type Gate = {
  id: string;
  name: string;
  formalName: string;
  hiragana: string;
  history: string;
  image: string;
  photo: string;
  feature: string;
  descriptions: string[];
}

export type Content = {
  title: string;
  gates: Gate[];
}
