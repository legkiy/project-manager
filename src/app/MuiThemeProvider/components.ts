import { Theme } from '@mui/material';

const SHADOWS_MAP = {
  contained: '0px 2px 16px 0px rgba(24, 143, 255, 0.24)',
};

const components: Theme['components'] = {
  MuiTextField: {
    defaultProps: {
      autoComplete: 'off',
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      contained: {
        width: 'fit-content',
        boxShadow: SHADOWS_MAP.contained,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      contained: {
        boxShadow: SHADOWS_MAP.contained,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      elevation1: ({ theme }) => ({
        boxShadow: 'none',
        borderColor: theme.palette.grey[200],
        borderWidth: 1,
        borderStyle: 'solid',
      }),
    },
  },
  MuiCard: {
    defaultProps: {
      elevation: 5,
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 12,
        '&:last-child': {
          paddingBottom: 12,
        },
      },
    },
  },
};

export default components;
