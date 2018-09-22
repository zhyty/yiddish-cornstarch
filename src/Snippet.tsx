import * as React from 'react';

import Prism from 'prismjs';

import 'prismjs/components/prism-python.min.js';
import 'prismjs/themes/prism-okaidia.css';

import './snippet.css';

import { highlightLine } from './actions/';
import { Block } from './Block';
import { ISnippet } from './Models';

Prism.highlightAll();

const blockOnClick = (lineNo: number) => (
  () => highlightLine(lineNo)
);

export const Snippet = (props: ISnippet) => (
  <pre className={"language-" + props.lang}>
    {props.blocks.map((block, ii) =>
      <Block
        key={ii}
        {...props.blocks[ii]}
        language={props.lang}
        onClick={blockOnClick(ii)}
      />
    )}
  </pre>
);
