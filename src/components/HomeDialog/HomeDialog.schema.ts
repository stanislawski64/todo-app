import * as yup from 'yup'

export const homeDialogSchema = yup.object({
  title: yup.string().label('Title').optional().max(1024),
  description: yup.string().label('Description').optional().max(1024),
})
