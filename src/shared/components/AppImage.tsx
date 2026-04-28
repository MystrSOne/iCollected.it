import { Image, type ImageProps, StyleSheet, View } from 'react-native';

import { tokens } from '@/design';

export type AppImageProps = ImageProps & {
  /** Rounds corners with overflow hidden */
  rounded?: boolean;
};

export function AppImage({
  rounded,
  style,
  resizeMode = 'cover',
  ...imageProps
}: AppImageProps) {
  if (rounded) {
    return (
      <View style={[styles.roundedWrap, style]}>
        <Image resizeMode={resizeMode} {...imageProps} style={styles.imageFill} />
      </View>
    );
  }

  return <Image resizeMode={resizeMode} style={style} {...imageProps} />;
}

const styles = StyleSheet.create({
  roundedWrap: {
    borderRadius: tokens.radius.md,
    overflow: 'hidden',
  },
  imageFill: {
    width: '100%',
    height: '100%',
  },
});
