import React from "react";
import { Animated, Easing, View, StyleSheet, Text } from "react-native";
import CircularProgress from "./CircularProgress";
import AnimatedText from "./AnimatedText";

const AnimatedProgress = Animated.createAnimatedComponent(CircularProgress);

interface AnimatedCircularProgressProps {
  fill: number;
  count: number;
  prefill?: number;
  duration?: number;
  easing?: (value: number) => number;
  onAnimationComplete?: () => void;
  useNativeDriver?: boolean;
  delay?: number;
  onFillChange?: (value: number) => void;
  [key: string]: any; // Allow other props from CircularProgress
}

interface AnimatedCircularProgressState {
  fillAnimation: Animated.Value;
  countAnimation: Animated.Value;
}

export default class AnimatedCircularProgress extends React.PureComponent<
  AnimatedCircularProgressProps,
  AnimatedCircularProgressState
> {
  static defaultProps = {
    duration: 500,
    easing: Easing.out(Easing.ease),
    prefill: 0,
    useNativeDriver: false,
    delay: 0,
  };

  constructor(props: AnimatedCircularProgressProps) {
    super(props);
    this.state = {
      fillAnimation: new Animated.Value(props.prefill || 0),
      countAnimation: new Animated.Value(props.prefill || 0),
    };
    if (props.onFillChange) {
      this.state.fillAnimation.addListener(({ value }) =>
        props.onFillChange!(value)
      );
    }
  }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate(prevProps: AnimatedCircularProgressProps) {
    if (
      prevProps.fill !== this.props.fill ||
      prevProps.count !== this.props.count
    ) {
      this.animate();
    }
  }

  reAnimate(
    prefill: number,
    toVal: number,
    dur?: number,
    ease?: (value: number) => number
  ) {
    this.setState(
      {
        fillAnimation: new Animated.Value(prefill),
        countAnimation: new Animated.Value(prefill),
      },
      () => this.animate(toVal, dur, ease)
    );
  }

  animate(toVal?: number, dur?: number, ease?: (value: number) => number) {
    const toValue = toVal ?? this.props.fill;
    const duration = dur ?? this.props.duration!;
    const easing = ease ?? this.props.easing!;
    const useNativeDriver = this.props.useNativeDriver!;
    const delay = this.props.delay!;

    const anim = Animated.timing(this.state.fillAnimation, {
      useNativeDriver,
      toValue,
      easing,
      duration,
      delay,
    });

    const countAnim = Animated.timing(this.state.countAnimation, {
      useNativeDriver,
      toValue: this.props.count,
      easing,
      duration,
      delay,
    });

    Animated.parallel([anim, countAnim]).start(this.props.onAnimationComplete);

    return anim;
  }

  animateColor() {
    if (!this.props.tintColorSecondary) {
      return this.props.tintColor;
    }

    const tintAnimation = this.state.fillAnimation.interpolate({
      inputRange: [0, 100],
      outputRange: [this.props.tintColor, this.props.tintColorSecondary],
    });

    return tintAnimation;
  }

  render() {
    const { fill, prefill, count, ...other } = this.props;

    return (
      <View style={styles.container}>
        <AnimatedProgress
          {...other}
          fill={this.state.fillAnimation as any} // TypeScript workaround for Animated.Value type
          tintColor={this.animateColor()}
        />
        <View style={styles.center}>
          <Text style={styles.text}>{count}</Text>
          <Text style={styles.subtext}>calories eaten</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    fontFamily: "InterBlack",
    textAlign: "center",
  },
  subtext: {
    //backgroundColor: "black",
    fontFamily: "Inter",
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});
