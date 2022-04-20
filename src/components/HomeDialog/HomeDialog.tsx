import {
  Dialog,
  Box,
  IconButton,
  Grid,
  Typography,
  DialogActions,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import SaveIcon from '@mui/icons-material/Save'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import TextFieldControl from '../TextFieldControl/TextFieldControl'
import { HomeDialogProps, HomeDialogInterface } from './HomeDialog.interface'
import homeDialogSchema from './HomeDialog.schema'
import useStyles from './HomeDialog.styles'

const HomeDialog: React.FC<HomeDialogProps> = ({
  openModal,
  setOpenModal,
  isEdit,
  setIsEdit,
  cards,
  setCards,
  selectedCard,
  removeCard,
}) => {
  const { classes } = useStyles()

  const generateId = () => {
    const highestId =
      cards.length > 0 ? Math.max(...cards.map((card) => card.id)) : -1
    return highestId + 1
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HomeDialogInterface>({
    resolver: yupResolver(homeDialogSchema),
  })

  useEffect(() => {
    if (openModal) {
      const { title, description } = selectedCard || {}
      reset({ title, description })
    }
  }, [openModal, reset, selectedCard])

  const saveChanges = (data: HomeDialogInterface) => {
    if (selectedCard) {
      const editedCardIndex = cards.findIndex(
        (card) => card.id === selectedCard.id
      )
      const cardsNew = [...cards]
      cardsNew[editedCardIndex] = {
        id: selectedCard.id,
        title: data.title,
        description: data.description,
      }
      setCards([...cardsNew])
    } else {
      const newCard = {
        id: generateId(),
        title: data.title,
        description: data.description,
      }
      setCards([...cards, newCard])
    }
  }

  const onSubmit: SubmitHandler<HomeDialogInterface> = (data) => {
    if (!data.title && !data.description) {
      setOpenModal(false)
      return
    }
    saveChanges(data)
    setOpenModal(false)
  }

  return (
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      maxWidth="sm"
      fullWidth
    >
      <Box bgcolor="background.paper">
        <IconButton
          aria-label="close"
          onClick={() => setOpenModal(false)}
          sx={{ position: 'absolute', top: '8px', right: '8px' }}
        >
          <CloseIcon />
        </IconButton>
        {isEdit ? (
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} pt={6} px={6}>
              <Grid item xs={12}>
                <TextFieldControl<HomeDialogInterface>
                  name="title"
                  control={control}
                  id="title"
                  label="Title"
                  type="text"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  defaultValue={selectedCard?.title}
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldControl<HomeDialogInterface>
                  name="description"
                  control={control}
                  id="description"
                  label="Description"
                  type="text"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  defaultValue={selectedCard?.description}
                  multiline
                />
              </Grid>
            </Grid>
            <DialogActions>
              <IconButton color="primary" type="submit" aria-label="save">
                <SaveIcon />
              </IconButton>
            </DialogActions>
          </Box>
        ) : (
          <Box pt={6} px={6}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.cardText}
            >
              {selectedCard && selectedCard.title}
            </Typography>
            <Typography sx={{ mt: 2 }} className={classes.cardText}>
              {selectedCard && selectedCard.description}
            </Typography>
          </Box>
        )}
        {!isEdit && (
          <DialogActions>
            <IconButton aria-label="edit" onClick={() => setIsEdit(true)}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => {
                if (selectedCard) removeCard(selectedCard.id)
              }}
            >
              <DeleteIcon color="primary" />
            </IconButton>
          </DialogActions>
        )}
      </Box>
    </Dialog>
  )
}

export default HomeDialog
