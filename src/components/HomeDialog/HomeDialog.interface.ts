import { Dispatch, SetStateAction } from 'react'

import { CardInterface } from '../../routes/Home/Home.interface'

export interface HomeDialogProps {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  isEdit: boolean
  setIsEdit: Dispatch<SetStateAction<boolean>>
  cards: CardInterface[]
  setCards: Dispatch<SetStateAction<CardInterface[]>>
  selectedCard: CardInterface | undefined
  removeCard: (id: number) => void
}

export interface HomeDialogInterface {
  title: string
  description: string
}
