import { createTheme, PaletteMode } from '@mui/material'
import { orange } from '@mui/material/colors'

const buildTheme = (mode: PaletteMode) => {
  let theme = createTheme({
    palette: {
      mode,
      ...(mode === 'dark' && {
        primary: {
          main: orange[500],
        },
        secondary: {
          main: orange[900],
        },
        background: {
          default: '#121212',
          paper: '#212121',
        },
      }),
    },
  })
  theme = createTheme(theme, {
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            '&:-webkit-autofill': {
              // changes TextField autofill background
              WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.default} inset`,
            },
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: { width: '100%' },
        },
      },
    },
  })
  return theme
}

export default buildTheme
