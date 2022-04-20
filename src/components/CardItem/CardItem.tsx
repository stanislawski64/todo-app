import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { CardItemProps } from './CardItem.interface'
import useStyles from './CardItem.styles'

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  viewCard,
  editCard,
  removeCard,
}) => {
  const { classes } = useStyles()
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
      }}
      elevation={3}
    >
      <CardActionArea sx={{ height: 1 }} onClick={viewCard}>
        <CardContent sx={{ height: 1 }}>
          <Typography
            variant="h6"
            component="h2"
            className={!description ? classes.cardText : classes.cardTitle}
          >
            {title}
          </Typography>
          <Typography className={classes.cardText}>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Stack direction="row" spacing={2}>
          <IconButton color="primary" onClick={editCard} aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton color="primary" onClick={removeCard} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  )
}

export default CardItem
