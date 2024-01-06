import {ISchema, ICreateTaskForm} from '~/utils/interfaces';
import * as yup from 'yup';

const exec = (): ISchema<ICreateTaskForm<string>, ICreateTaskForm<any>> => {
  return yup.object().shape({
    title: yup
      .string()
      .trim()
      .required('Campo obrigatório')
      .min(4, 'Nome muito curto'),
    description: yup
      .string()
      .trim()
      .required('Campo obrigatório')
      .min(4, 'Nome muito curto'),
  });
};

export const createTaskSchema = exec();
