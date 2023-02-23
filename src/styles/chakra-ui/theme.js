import {
  theme as chakraTheme,
  extendTheme,
  /* defineStyleConfig, */
  defineStyle,
} from '@chakra-ui/react';

const headingtheme = defineStyle({
  baseStyle: {
    ...chakraTheme.components.Heading.baseStyle,
    color: 'var(--twilight-lavender)',
    fontFamily: 'Barlow, sans-serif',
  },
});

const theme = extendTheme({
  components: {
    Heading: headingtheme,

    Button: {
      variants: {
        ...chakraTheme.components.Button.variants,
        outline: {
          ...chakraTheme.components.Button.variants.outline,
          borderColor: '#c082a442',
          backgroundColor: '#b6b6b65e',
          _hover: {
            backgroundColor: '#c082a442',
          },
        },
        santaJuanita: {
          padding: '6px',
          width: '50%',
          maxWidth: '290px',
          alignSelf: 'center',
          color: 'var(--snow)',
          backgroundColor: 'var(--mulberry)',
          border: 'none',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'var(--pink-lavender)',
          },
        },
      },
    },
    Menu: {
      ...chakraTheme.components.Menu,
      baseStyle: {
        ...chakraTheme.components.Menu.baseStyle,
        divider: {
          ...chakraTheme.components.Menu.baseStyle.divider,
          borderColor: '#c082a470',
        },
      },
    },
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
      'h1, h2, h3': {
        fontWeight: 'bold',
      },
    },
  },
  fonts: {
    ...chakraTheme.fonts,
    body: 'Barlow, sans-serif',
  },
  fontSizes: {
    h1: 'var(--step-1)',
    h2: 'var(--step-0)',
  },
  fontWeights: {
    thin: '300',
    medium: '500',
    bold: '700',
  },
});

export default theme;
