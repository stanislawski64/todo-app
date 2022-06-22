import { createContext, useContext, useMemo, useState } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import { buildTheme } from '../buildTheme/buildTheme'

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export function useThemeMode() {
  return useContext(ColorModeContext)
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  )
}
