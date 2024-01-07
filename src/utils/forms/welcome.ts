import {type ISchema, type IWelcomeForm} from '~/utils/interfaces';
import * as yup from 'yup';

const exec = (): ISchema<IWelcomeForm<string>, IWelcomeForm<any>> => {
  return yup.object().shape({
    name: yup
      .string()
      .trim()
      .required('Campo obrigatório')
      .min(4, 'Nome muito curto'),
  });
};

export const welcomeSchema = exec();
