import { Box, Card as MuiCard, CardActionArea } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { AddNewCardProps } from './AddNewCard.interface'
import useStyles from './AddNewCard.styles'

export const AddNewCard = ({ addCard }: AddNewCardProps) => {
  const { classes } = useStyles()
  return (
    <MuiCard className={classes.addCard} elevation={3}>
      <CardActionArea
        onClick={() => addCard()}
        className={classes.addCardAction}
      >
        <Box display="flex" justifyContent="center">
          <AddIcon fontSize="large" />
        </Box>
      </CardActionArea>
    </MuiCard>
  )
}
