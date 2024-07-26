import React from "react";
import { Animated, View, ViewStyle } from "react-native";
import { Svg, Path, G } from "react-native-svg";

interface CircularProgressProps {
  size: number;
  width: number;
  backgroundWidth?: number;
  tintColor?: string;
  tintTransparency?: boolean;
  backgroundColor?: string;
  style?: ViewStyle;
  rotation?: number;
  lineCap?: "butt" | "round" | "square";
  fillLineCap?: "butt" | "round" | "square";
  arcSweepAngle?: number;
  fill: number;
  children?: (fill: number) => React.ReactNode;
  childrenContainerStyle?: ViewStyle;
  padding?: number;
  renderCap?: (props: { center: { x: number; y: number } }) => React.ReactNode;
  dashedBackground?: { width: number; gap: number };
  dashedTint?: { width: number; gap: number };
}

export default class CircularProgress extends React.PureComponent<CircularProgressProps> {
  static defaultProps = {
    tintColor: "black",
    tintTransparency: true,
    rotation: 90,
    lineCap: "round",
    arcSweepAngle: 360,
    padding: 0,
    dashedBackground: { width: 0, gap: 0 },
    dashedTint: { width: 0, gap: 0 },
  };

  polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  circlePath(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) {
    const start = this.polarToCartesian(x, y, radius, endAngle * 0.9999999);
    const end = this.polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ];
    return d.join(" ");
  }

  clampFill = (fill: number) => Math.min(100, Math.max(0, fill));

  render() {
    const {
      size,
      width,
      backgroundWidth,
      tintColor,
      tintTransparency,
      backgroundColor,
      style,
      rotation,
      lineCap,
      fillLineCap = lineCap,
      arcSweepAngle,
      fill,
      children,
      childrenContainerStyle,
      padding = 0,
      renderCap,
      dashedBackground = { width: 0, gap: 0 },
      dashedTint = { width: 0, gap: 0 },
    } = this.props;

    const maxWidthCircle = backgroundWidth
      ? Math.max(width, backgroundWidth)
      : width;
    const sizeWithPadding = size / 2 + padding / 2;
    const radius = size / 2 - maxWidthCircle / 2 - padding / 2;

    const currentFillAngle = (arcSweepAngle! * this.clampFill(fill)) / 100;
    const backgroundPath = this.circlePath(
      sizeWithPadding,
      sizeWithPadding,
      radius,
      tintTransparency ? 0 : currentFillAngle,
      arcSweepAngle!
    );
    const circlePath = this.circlePath(
      sizeWithPadding,
      sizeWithPadding,
      radius,
      0,
      currentFillAngle
    );
    const coordinate = this.polarToCartesian(
      sizeWithPadding,
      sizeWithPadding,
      radius,
      currentFillAngle
    );
    const cap = renderCap ? renderCap({ center: coordinate }) : null;

    const offset = size - maxWidthCircle * 2;

    const localChildrenContainerStyle: ViewStyle = {
      position: "absolute",
      left: maxWidthCircle + padding / 2,
      top: maxWidthCircle + padding / 2,
      width: offset,
      height: offset,
      borderRadius: offset / 2,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      ...childrenContainerStyle,
    };

    const strokeDasharrayTint =
      dashedTint.gap > 0
        ? Object.values(dashedTint).map((value) => parseInt(value.toString()))
        : null;

    const strokeDasharrayBackground =
      dashedBackground.gap > 0
        ? Object.values(dashedBackground).map((value) =>
            parseInt(value.toString())
          )
        : null;

    return (
      <View style={style}>
        <Svg width={size + padding} height={size + padding}>
          <G
            rotation={rotation}
            originX={(size + padding) / 2}
            originY={(size + padding) / 2}
          >
            {backgroundColor && (
              <Path
                d={backgroundPath}
                stroke={backgroundColor}
                strokeWidth={backgroundWidth || width}
                strokeLinecap={lineCap}
                strokeDasharray={
                  strokeDasharrayBackground
                    ? strokeDasharrayBackground.join(",")
                    : undefined
                }
                fill="transparent"
              />
            )}
            {fill > 0 && (
              <Path
                d={circlePath}
                stroke={tintColor}
                strokeWidth={width}
                strokeLinecap={fillLineCap}
                strokeDasharray={
                  strokeDasharrayTint
                    ? strokeDasharrayTint.join(",")
                    : undefined
                }
                fill="transparent"
              />
            )}
            {cap}
          </G>
        </Svg>
        {children && (
          <View style={localChildrenContainerStyle}>{children(fill)}</View>
        )}
      </View>
    );
  }
}
