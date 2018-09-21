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

export const SAMPLE_LESSON: ILesson = {
  exercises: [
    {
      title: 'Find the meaning of Schmubleck.',
      content: {
        blocks: [
          {code: 'def main():\n', good: false},
          {code: '    print("hello")\n    print("world")\n', good: true},
        ],
        lang: 'python',
      },
    },
    {
      title: 'Highlight the bad code in this sample.',
      content: {
        blocks: [
          {code: 'int main() {\n', good: true},
          {code: '    std::cout << "hi\\n";\n', good: false},
          {code: '}', good: true},
        ],
        lang: 'clike',
      },
    },
  ],
  title: 'What is Yiddish Cornstarch?',
};
