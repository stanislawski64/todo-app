import * as yup from 'yup'

const homeDialogSchema = yup.object({
  title: yup.string().label('Title').optional().max(1024),
  description: yup.string().label('Description').optional().max(1024),
})

export default homeDialogSchema
