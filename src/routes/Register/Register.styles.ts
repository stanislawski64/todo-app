import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => ({
  lockIcon: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}))
