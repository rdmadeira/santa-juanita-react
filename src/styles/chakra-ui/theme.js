import {
  theme as chakraTheme,
  extendTheme,
  defineStyleConfig,
} from '@chakra-ui/react';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const Input = defineStyleConfig({
  variants: {
    filled: {
      field: {
        borderColor: 'var(--opera-mauve)',
        border: 'solid 1px',

        _focusVisible: {
          bg: 'transparent',
          borderColor: 'var(--opera-mauve)',
          outline: '1px solid var(--opera-mauve)',
          outlineOffset: '3px',
        },
      },
    },
  },
});

const FormLabel = defineStyleConfig({
  baseStyle: {
    color: 'var(--twilight-lavender)',
  },
});

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([
    'container',
    'requiredIndicator',
    'helperText',
  ]);

const Form = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      width: '70%',
      position: 'relative',
    },
    /* requiredIndicator: {
      ...chakraTheme.components.Form.baseStyle.requiredIndicator,
    },
    helperText: {
      ...chakraTheme.components.Form.baseStyle.helperText,
    }, */
  }),
});

const theme = extendTheme({
  components: {
    Input,
    Form,
    FormLabel,
  },
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
        padding: '0 0',
        margin: '0 0',
      },
      body: {
        fontFamily: 'body',
        width: '100%',
      },
      ul: {
        listStyle: 'none',
      },
      'a, a:visited': {
        textDecoration: 'none',
        color: 'unset',
      },
    },
  },
  fonts: {
    ...chakraTheme.fonts,
    heading: 'Barlow, sans-serif',
    body: 'Barlow, sans-serif',
  },

  fontWeights: {
    thin: '300',
    medium: '500',
    bold: '700',
  },
});

export default theme;
