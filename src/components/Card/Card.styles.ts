import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => ({
  cardText: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 6,
    WebkitBoxOrient: 'vertical',
    wordBreak: 'break-word',
    whiteSpace: 'pre-line',
  },
  cardTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(2),
  },
}))
