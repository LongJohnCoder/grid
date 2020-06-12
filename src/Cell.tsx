import React, { memo, useEffect } from "react";
import { RendererProps } from "./Grid";
import { Group, Rect, Text } from "react-konva";
import { KonvaEventObject } from "konva/types/Node";

export interface CellProps extends RendererProps {
  value?: string;
  textColor?: string;
  padding?: number;
  onClick?: (e: KonvaEventObject<MouseEvent>) => void;
}

/**
 * Default cell component
 * @param props
 */
const Cell: React.FC<CellProps> = memo((props) => {
  const {
    x,
    y,
    width,
    height,
    value,
    fill = "white",
    strokeWidth = 0.5,
    stroke = "#aaa",
    align = "left",
    verticalAlign = "middle",
    textColor = "#333",
    padding = 5,
    fontFamily = "Arial, sans-serif",
    fontSize = 12,
    onClick,
    children,
  } = props;
  return (
    <>
      <Rect
        x={x}
        y={y}
        height={height}
        width={width}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        shadowForStrokeEnabled={false}
        hitStrokeWidth={0}
        strokeHitEnabled={false}
      />
      {value === void 0 ? null : (
        <Text
          x={x}
          y={y}
          height={height}
          width={width}
          text={value}
          fill={textColor}
          verticalAlign={verticalAlign}
          align={align}
          fontFamily={fontFamily}
          fontSize={fontSize}
          padding={padding}
          wrap="none"
          hitStrokeWidth={0}
          strokeHitEnabled={false}
        />
      )}
      {children}
    </>
  );
});

/**
 * Default CellRenderer
 * @param props
 */
const CellRenderer = (props: RendererProps) => {
  return <Cell {...props} />;
};

export default CellRenderer;
export { CellRenderer, Cell };
