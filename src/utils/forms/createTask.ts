import { type ISchema, type ICreateTaskForm } from '~/utils/interfaces'
import * as yup from 'yup'

const exec = (): ISchema<ICreateTaskForm<string>, ICreateTaskForm<any>> => {
  return yup.object().shape({
    title: yup
      .string()
      .trim()
      .required('Campo obrigatório')
      .min(4, 'Titulo muito curto'),
    description: yup.string().trim().min(4, 'Descrição muito curta'),
    status: yup.string().trim(),
    file: yup.string().trim()
  })
}

export const createTaskSchema = exec()
