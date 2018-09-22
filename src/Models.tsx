/* Data representations, business logic should be placed here. */
export interface IBlock {
  code: string;
  good: boolean;
  highlighted: boolean;
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

export const SAMPLE_LESSON: ILesson = {
  exercises: [
    {
      title: 'Find the meaning of Schmubleck.',
      content: {
        blocks: [
          {code: 'def main():\n', good: false, highlighted: false},
          {code: '    print("hello")\n    print("world")\n', good: true, highlighted: false},
        ],
        lang: 'python',
      },
    },
    {
      title: 'Highlight the bad code in this sample.',
      content: {
        blocks: [
          {code: 'int main() {\n', good: true, highlighted: false},
          {code: '    std::cout << "hi\\n";\n', good: false, highlighted: false},
          {code: '}', good: true, highlighted: false},
        ],
        lang: 'clike',
      },
    },
  ],
  title: 'What is Yiddish Cornstarch?',
};
