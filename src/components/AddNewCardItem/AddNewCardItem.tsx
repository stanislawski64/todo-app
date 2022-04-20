import { Box, Card, CardActionArea } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { AddNewCardItemProps } from './AddNewCardItem.interface'
import useStyles from './AddNewCardItem.styles'

const AddNewCardItem: React.FC<AddNewCardItemProps> = ({ addCard }) => {
  const { classes } = useStyles()
  return (
    <Card className={classes.addCard} elevation={3}>
      <CardActionArea
        onClick={() => addCard()}
        className={classes.addCardAction}
      >
        <Box display="flex" justifyContent="center">
          <AddIcon fontSize="large" />
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default AddNewCardItem
