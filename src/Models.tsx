/* Data representations, business logic should be placed here. */
export interface IBlock {
  code: string;
  good: boolean;
}

export interface ISnippet {
  blocks: IBlock[];
  lang: string;
}

export interface IExercise {
  title: string;
  content: ISnippet;
}

export interface ILesson {
  title: string;
  exercises: IExercise[];
}
