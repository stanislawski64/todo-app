import { createContext, useContext, useMemo, useState } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { ThemeProvider } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import buildTheme from '../buildTheme/buildTheme'

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export function useThemeMode() {
  return useContext(ColorModeContext)
}

const ThemeProviders: React.FC = ({ children }) => {
  const localStorageMode = localStorage.getItem('mode')
  const initialMode: PaletteMode =
    localStorageMode === 'dark' || localStorageMode === 'light'
      ? localStorageMode
      : 'dark'

  const [mode, setMode] = useState<PaletteMode>(initialMode)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === 'dark' ? 'light' : 'dark'
        setMode(newMode)
        localStorage.setItem('mode', newMode)
      },
    }),
    [mode]
  )

  const theme = useMemo(() => buildTheme(mode), [mode])

  return (
    <CacheProvider value={muiCache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  )
}

export default ThemeProviders
