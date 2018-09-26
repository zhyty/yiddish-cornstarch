/* Data representations, business logic should be placed here. */
export interface IBlock {
  code: string;
  good: boolean;
  highlighted: boolean;
}

export interface IExercise {
  // We need the ID to be able to find the exercise when updating state.
  id: number;
  title: string;
  blocks: IBlock[];
  lang: string;
}

export interface ILesson {
  title: string;
  exercises: IExercise[];
}

export const SAMPLE_LESSON: ILesson = {
  exercises: [
    {
      id: 1,
      title: 'Find the meaning of Schmubleck.',
      blocks: [
        {code: 'def main():\n', good: false, highlighted: false},
        {code: '    print("hello")\n    print("world")\n', good: true, highlighted: false},
      ],
      lang: 'python',
    },
    {
      id: 2,
      title: 'Highlight the bad code in this sample.',
      blocks: [
        {code: 'int main() {\n', good: true, highlighted: false},
        {code: '    std::cout << "hi\\n";\n', good: false, highlighted: false},
        {code: '}', good: true, highlighted: false},
      ],
      lang: 'clike',
    },
  ],
  title: 'What is Yiddish Cornstarch?',
};
