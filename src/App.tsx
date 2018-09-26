/* tslint:disable:max-classes-per-file */
// TODO(zhyty): reenable max-classes-per-file once we're past playing around.
import * as React from 'react';
import { connect } from 'react-redux';

import { ILesson } from './Models';
import { IState } from './reducers/';
import { Snippet } from './Snippet';

const LessonInteractiveArea = (lesson: ILesson) => (
  <div className="lesson-interactive">
    Exercises:
    <ul>
      {lesson.exercises.map((exercise) =>
        <Snippet key={exercise.title} {...exercise} />
      )}
    </ul>
  </div>
);

const LessonFrame = (lesson: ILesson) => (
  <div className="lesson-frame">
    <h1 className="lesson-frame-title">
      Lesson: {lesson.title}
    </h1>
    <LessonInteractiveArea {...lesson} />
  </div>
);

const mapStateToLessonFrameProps = (state: IState) => state.currentLesson;
const VisibleLessonFrame = connect(mapStateToLessonFrameProps)(LessonFrame);

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Yiddish Cornstarch</h1>
    </header>
    <VisibleLessonFrame />
  </div>
);

export default App;
