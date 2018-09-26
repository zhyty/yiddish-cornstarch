// All actions must implement this.
export interface IAction {
  type: string;
}

// TODO(zhyty) a highlight line action needs to know what block it is. We need
// an associated id with each block...

// Represents the user highlighting a line of code.
export const HIGHLIGHT_LINE = 'HIGHLIGHT_LINE';
export const highlightLine = (lineNo: number, exerciseId: number) => ({
  type: HIGHLIGHT_LINE,
  exerciseId,
  lineNo,
});
