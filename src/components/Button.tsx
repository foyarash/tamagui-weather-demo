import { GetProps, styled } from '@tamagui/core';
import Box from './Box';
import Text from './Text';

const ButtonFrame = styled(
  Box,
  {
    name: 'Button',
    fd: 'row',
    px: '$sm',
    bg: '$background',
    borderRadius: '$sm',
    variants: {
      size: {
        '...space': (value, { tokens }) => ({
          py: tokens.space[value as keyof typeof tokens.space] ?? value,
        }),
      },
      centered: {
        true: {
          jc: 'center',
        },
      },
      disabled: {
        true: {
          opacity: 0.7,
        },
      },
    } as const,
    pressStyle: {
      opacity: 0.8,
    },
  },
  {
    defaultVariants: {
      centered: true,
    },
  },
);

export type ButtonProps = GetProps<typeof ButtonFrame> & {
  title: string;
  type: 'primary' | 'destructive' | 'unstyled';
};

const ButtonText = styled(Text, {
  color: '$color',
  fos: '$md',
  fow: '$bold',
});

const Button = ButtonFrame.extractable(({ title, type = 'primary', ...props }: ButtonProps) => {
  return (
    <ButtonFrame theme="primary_Button" size="$md" {...props}>
      <ButtonText fontSize="$md" fow="$bold">
        {title}
      </ButtonText>
    </ButtonFrame>
  );
});

export default Button;
