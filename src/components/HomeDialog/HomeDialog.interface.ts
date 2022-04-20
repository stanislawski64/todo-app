import { Dispatch, SetStateAction } from 'react'
import { Card } from '../Home/Home.interface'

export interface HomeDialogProps {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  isEdit: boolean
  setIsEdit: Dispatch<SetStateAction<boolean>>
  cards: Card[]
  setCards: Dispatch<SetStateAction<Card[]>>
  selectedCard: Card | undefined
  removeCard: (id: number) => void
}

export interface HomeDialogInterface {
  title: string
  description: string
}
