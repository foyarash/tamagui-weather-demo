import { styled, Stack, setupReactNative, GetProps, getTokens, themeable } from '@tamagui/core';
import { forwardRef, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

setupReactNative({ View });

const BoxFrame = styled(Stack, {
  variants: {
    shadow: {
      sm: {
        elevation: 1,
        shadowColor: '$shadow',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
      },
      md: {
        elevation: 6,
        shadowColor: '$shadow',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
      },
      lg: {
        elevation: 12,
        shadowColor: '$shadow',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
      },
    },
    boxSize: {
      '...size': (value, { tokens }) => {
        return {
          width: tokens.size[value as keyof typeof tokens.size] ?? value,
          height: tokens.size[value as keyof typeof tokens.size] ?? value,
        };
      },
    },
    contentCenter: {
      true: {
        ai: 'center',
        jc: 'center',
      },
    },
    pin: {
      full: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    edges: {
      ':number': (value: number) => {
        return {
          top: value,
          left: value,
          right: value,
          bottom: value,
        };
      },
    },
    edgesX: {
      ':number': (value: number) => {
        return {
          left: value,
          right: value,
        };
      },
    },
    edgesY: {
      ':number': (value: number) => {
        return {
          top: value,
          bottom: value,
        };
      },
    },
    thin: {
      true: {
        h: StyleSheet.hairlineWidth,
      },
    },
  } as const,
});

export type BoxProps = GetProps<typeof BoxFrame> & {
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
  safeAreaMinPaddingTop?: BoxProps['pt'];
  safeAreaMinPaddingBottom?: BoxProps['pb'];
};

const Box = BoxFrame.extractable(
  themeable(
    forwardRef<View, BoxProps>(
      (
        {
          safeAreaBottom,
          safeAreaTop,
          safeAreaMinPaddingTop = '$md',
          safeAreaMinPaddingBottom = '$md',
          ...props
        }: BoxProps,
        ref,
      ) => {
        const { top, bottom } = useSafeAreaInsets();
        const safeAreaTopMinPaddingComputed = useMemo(() => {
          const tokens = getTokens(true).space;

          return tokens[safeAreaMinPaddingTop as keyof typeof tokens]?.val ?? safeAreaMinPaddingTop;
        }, [safeAreaMinPaddingTop]);

        const safeAreaBottomMinPaddingComputed = useMemo(() => {
          const tokens = getTokens(true).space;

          return tokens[safeAreaMinPaddingBottom as keyof typeof tokens]?.val ?? safeAreaMinPaddingBottom;
        }, [safeAreaMinPaddingBottom]);

        return (
          <BoxFrame
            {...props}
            ref={ref}
            pt={safeAreaTop ? Math.max(top, safeAreaTopMinPaddingComputed) : props.pt}
            pb={safeAreaBottom ? Math.max(bottom, safeAreaBottomMinPaddingComputed) : props.pb}
          />
        );
      },
    ),
  ),
);

export default Box;
