import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import CardItem from '../CardItem/CardItem'
import AddNewCardItem from '../AddNewCardItem/AddNewCardItem'
import { Card } from './Home.interface'
import HomeDialog from '../HomeDialog/HomeDialog'
import initialCards from './initialCards'

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(initialCards)
  const [selectedCard, setSelectedCard] = useState<Card>()
  const [openModal, setOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const addCard = () => {
    setSelectedCard(undefined)
    setOpenModal(true)
    setIsEdit(true)
  }

  const viewCard = (id: number) => {
    setSelectedCard(cards.find((card) => card.id === id))
    setIsEdit(false)
    setOpenModal(true)
  }

  const editCard = (id: number) => {
    setSelectedCard(cards.find((card) => card.id === id))
    setIsEdit(true)
    setOpenModal(true)
  }

  const removeCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id))
    if (openModal) setOpenModal(false)
  }

  return (
    <Container component="main" maxWidth="xl" sx={{ pb: 8 }}>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <CardItem
              title={card.title}
              description={card.description}
              viewCard={() => viewCard(card.id)}
              editCard={() => editCard(card.id)}
              removeCard={() => removeCard(card.id)}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AddNewCardItem addCard={addCard} />
        </Grid>
      </Grid>
      <HomeDialog
        openModal={openModal}
        setOpenModal={setOpenModal}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        cards={cards}
        setCards={setCards}
        selectedCard={selectedCard}
        removeCard={removeCard}
      />
    </Container>
  )
}

export default Home
