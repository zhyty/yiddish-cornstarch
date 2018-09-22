import * as React from 'react';

enum Highlight {
  None = 1,
  Good,
  Bad,
}

function highlightCssClass(codeIsGood: boolean, codeIsHighlighted: boolean) {
  let highlightType = Highlight.None;
  if (codeIsHighlighted) {
    highlightType = (codeIsGood) ? Highlight.Good : Highlight.Bad;
  }

  return Highlight[highlightType].toLowerCase();
}

interface IBlockProps {
  language: string;
  code: string;
  good: boolean;
  highlighted: boolean;
  onClick: () => void;
}

function Block(props: IBlockProps) {
  const classes = "language-" + props.language + " block " +
    highlightCssClass(props.good, props.highlighted);
  return (
    <code className={classes} onClick={props.onClick}>
      {props.code}
    </code>
  );
}

export {Block, IBlockProps};
