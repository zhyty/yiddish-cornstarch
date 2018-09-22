// All actions must implement this.
export interface IAction {
  type: string;
}

// Represents the user highlighting a line of code.
export const HIGHLIGHT_LINE = 'HIGHLIGHT_LINE';
export const highlightLine = (lineNo: number) => ({
  type: HIGHLIGHT_LINE,
  lineNo
});
