export enum FORMATTING_TYPE {
  BOLD = "bold",
  ITALIC = "italic",
  HORIZONTAL_ALIGN = "horizontalAlign",
  VERTICAL_ALIGN = "verticalAlign",
  STRIKE = "strike",
  UNDERLINE = "underline",
  FILL = "fill",
  COLOR = "color",
  PERCENT = "percent",
  DECIMALS = "decimals",
  CURRENCY = "currency",
  CURRENCY_SYMBOL = "currencySymbol",
  FONT_SIZE = "fontSize",
  FONT_FAMILY = "fontFamily",
  CUSTOM_FORMAT = "format",
  WRAP = "wrap",
  ROTATION = "rotation"
}

export enum FONT_WEIGHT {
  BOLD = "bold",
  NORMAL = "normal"
}

export enum FONT_STYLE {
  ITALIC = "italic",
  NORMAL = "normal"
}

export enum TEXT_DECORATION {
  STRIKE = "line-through",
  NONE = "",
  UNDERLINE = "underline"
}

export enum VERTICAL_ALIGNMENT {
  TOP = "top",
  MIDDLE = "middle",
  BOTTOM = "bottom",
  JUSTIFY = "justify",
  DISTRIBUTED = "distributed"
}

export enum HORIZONTAL_ALIGNMENT {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
  FILL = "fill",
  CENTER_CONTINOUS = "centerContinuous",
  JUSTIFY = "justify",
  DISTRIBUTED = "distributed"
}

export enum DATATYPE {
  Number = "number",
  String = "string",
  Date = "date",
  Formula = "formula",
  RichText = "richtext",
  Boolean = "boolean",
  Error = "error",
  Hyperlink = "hyperlink"
}

export enum STROKE_FORMATTING {
  STROKE = "stroke",
  STROKE_TOP_COLOR = "strokeTopColor",
  STROKE_RIGHT_COLOR = "strokeRightColor",
  STROKE_BOTTOM_COLOR = "strokeBottomColor",
  STROKE_LEFT_COLOR = "strokeLeftColor",
  STROKE_WIDTH = "strokeWidth",
  STROKE_TOP_WIDTH = "strokeTopWidth",
  STROKE_RIGHT_WIDTH = "strokeRightWidth",
  STROKE_BOTTOM_WIDTH = "strokeBottomWidth",
  STROKE_LEFT_WIDTH = "strokeLeftWidth",
  STROKE_DASH = "strokeDash",
  STROKE_TOP_DASH = "strokeTopDash",
  STROKE_RIGHT_DASH = "strokeRightDash",
  STROKE_BOTTOM_DASH = "strokeBottomDash",
  STROKE_LEFT_DASH = "strokeLeftDash"
}

export interface CellFormatting extends CellDataFormatting {
  datatype?: DATATYPE;
  plaintext?: boolean;
  [FORMATTING_TYPE.BOLD]?: boolean;
  [FORMATTING_TYPE.COLOR]?: string;
  [FORMATTING_TYPE.ITALIC]?: boolean;
  [FORMATTING_TYPE.HORIZONTAL_ALIGN]?: HORIZONTAL_ALIGNMENT;
  [FORMATTING_TYPE.VERTICAL_ALIGN]?: VERTICAL_ALIGNMENT;
  [FORMATTING_TYPE.UNDERLINE]?: boolean;
  [FORMATTING_TYPE.STRIKE]?: boolean;
  [FORMATTING_TYPE.FILL]?: string;

  stroke?: string;
  strokeTopColor?: string;
  strokeRightColor?: string;
  strokeBottomColor?: string;
  strokeLeftColor?: string;
  strokeWidth?: number;
  strokeTopWidth?: number;
  strokeRightWidth?: number;
  strokeBottomWidth?: number;
  strokeLeftWidth?: number;
  strokeDash?: number[];
  strokeTopDash?: number[];
  strokeRightDash?: number[];
  strokeBottomDash?: number[];
  strokeLeftDash?: number[];
  lineCap?: string;
  padding?: number;
  fontSize?: number;
  fontFamily?: string;
  readOnly?: boolean;
  wrap?: Wrap;
  rotation?: number;
  valid?: boolean;
  dataValidation?: DataValidation;
}

export type Wrap = "wrap" | "clip" | "overflow";

export interface CellDataFormatting {
  [FORMATTING_TYPE.PERCENT]?: boolean;
  [FORMATTING_TYPE.DECIMALS]?: number;
  [FORMATTING_TYPE.CURRENCY]?: boolean;
  [FORMATTING_TYPE.CURRENCY_SYMBOL]?: string;
  format?: string;
}

export enum AXIS {
  X = "x",
  Y = "y"
}

export enum BORDER_VARIANT {
  ALL = "all",
  INNER = "inner",
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
  OUTER = "outer",
  LEFT = "left",
  RIGHT = "right",
  BOTTOM = "bottom",
  TOP = "top",
  NONE = "none"
}

export enum OPERATION_TYPE {
  CELL_ATTRIBUTE = "cell_attribute",
  CHANGE_SHEET_NAME = "change_sheet_name",
  SHEET_ADD = "sheet_add",
  SHEET_REMOVE = "sheet_remove"
}

export enum RESOURCE_TYPE {
  SHEET = "sheet",
  CELL = "cell",
  SELECTION = "selection"
}

export enum BORDER_STYLE {
  "THIN" = "thin",
  "MEDIUM" = "medium",
  "THICK" = "thick",
  "DASHED" = "dashed",
  "DOTTED" = "dotted",
  "DOUBLE" = "double"
}

export type FormatType = (
  value: React.ReactText | undefined,
  datatype?: DATATYPE,
  formatting?: CellDataFormatting
) => string | undefined;

export enum SELECTION_MODE {
  CELL = "cell",
  ROW = "row",
  COLUMN = "column",
  BOTH = "both"
}
export type DataValidationOperator =
  | "between"
  | "notBetween"
  | "equal"
  | "notEqual"
  | "greaterThan"
  | "lessThan"
  | "greaterThanOrEqual"
  | "lessThanOrEqual";

export type DataValidationType =
  | "list"
  | "whole"
  | "decimal"
  | "date"
  | "textLength"
  | "custom";

export interface DataValidation {
  type: DataValidationType;
  formulae?: any[];
  allowBlank?: boolean;
  operator?: DataValidationOperator;
  error?: string;
  errorTitle?: string;
  errorStyle?: string;
  prompt?: string;
  promptTitle?: string;
  showErrorMessage?: boolean;
  showInputMessage?: boolean;
}

export type EditorType = "text" | "list" | "date";
