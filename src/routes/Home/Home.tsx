import { Container, Grid } from '@mui/material'
import { useState } from 'react'

import { Card } from '../../components/Card/Card'
import { AddNewCard } from '../../components/AddNewCard/AddNewCard'
import { HomeDialog } from '../../components/HomeDialog/HomeDialog'

import { CardInterface } from './Home.interface'
import { initialCards } from './initialCards'

export const Home = () => {
  const [cards, setCards] = useState<CardInterface[]>(initialCards)
  const [selectedCard, setSelectedCard] = useState<CardInterface>()
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
            <Card
              title={card.title}
              description={card.description}
              viewCard={() => viewCard(card.id)}
              editCard={() => editCard(card.id)}
              removeCard={() => removeCard(card.id)}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AddNewCard addCard={addCard} />
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
