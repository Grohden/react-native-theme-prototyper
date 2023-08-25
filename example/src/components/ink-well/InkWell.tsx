import React, { useRef, useState } from 'react';
import { Animated, Easing, Pressable } from 'react-native';
import { InkRipple, InkRippleProps } from './_InkRipple';
import { motionTokens } from '../../design-tokens';

// Should we do as flutter? the base for Ink stuff is Material
export const InkWell = ({
  role,
  rippleColor,
  duration,
  onPress,
  children,
}: React.PropsWithChildren<{
  role?: 'button';
  rippleColor: string;
  duration?: number;
  onPress?: () => void;
}>) => {
  const rippleIds = useRef(0);
  const [ripples, setRipples] = useState<(InkRippleProps & { key: number })[]>(
    []
  );

  const removeRipple = (key: number) => () => {
    setRipples((definitions) =>
      definitions.filter((value) => value.key !== key)
    );
  };

  return (
    <Pressable
      role={role}
      onPressIn={(event) => {
        const key = ++rippleIds.current;
        const ripple: InkRippleProps & { key: number } = {
          key: key,
          // same as kThemeChangeDuration in flutter
          duration: duration ?? motionTokens.duration.short2,
          easing: Easing.bezier(...motionTokens.easing.emphasized),
          color: rippleColor,
          faded: false,
          position: {
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
          },
          onComplete: removeRipple(key),
        };

        setRipples((values) => [
          ...values.map((props) => ({ ...props, faded: true })),
          ripple,
        ]);
      }}
      onPressOut={() => {
        setRipples((values) =>
          values.map((value) => ({ ...value!, faded: true }))
        );
      }}
      onPress={onPress}
    >
      <Animated.View>
        {children}
        {ripples.map((ripple) => (
          <InkRipple {...ripple} />
        ))}
      </Animated.View>
    </Pressable>
  );
};
