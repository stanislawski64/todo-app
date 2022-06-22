import { Box, IconButton, Stack, Toolbar, Tooltip } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import LogoutIcon from '@mui/icons-material/Logout'
import { useThemeMode } from '../../theme/ThemeProvider/ThemeProvider'
import {
  useAuthToken,
  useLogout,
} from '../../context/AuthContextProvider/AuthContextProvider'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const colorMode = useThemeMode()
  const theme = useTheme()
  const logout = useLogout()

  return (
    <>
      <Box>
        <Toolbar sx={{ p: 3 }}>
          <Stack
            direction="row"
            spacing={2}
            width="100%"
            sx={{
              justifyContent: 'flex-end',
              [theme.breakpoints.down('sm')]: {
                justifyContent: 'space-between',
              },
            }}
          >
            <Tooltip title="Change Theme">
              <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                  <Brightness7 />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>
            </Tooltip>
            {useAuthToken() ? (
              <Tooltip title="Logout">
                <IconButton color="inherit" onClick={logout}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            ) : null}
          </Stack>
        </Toolbar>
      </Box>
      {children}
    </>
  )
}
