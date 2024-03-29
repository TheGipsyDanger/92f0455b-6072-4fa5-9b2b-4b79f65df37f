import {
  type Control,
  type FieldErrors,
  type UseFormTrigger,
  type UseFormHandleSubmit,
  type FieldValues
} from 'react-hook-form';

import {type IWelcomeForm, type ICreateTaskForm} from '../formSchema';

import type * as yup from 'yup';

export type IControl<T extends FieldValues> = Control<T, any>;
export type ITrigger<T extends FieldValues> = UseFormTrigger<T>;
export type IFormErros<T extends FieldValues> = FieldErrors<T>;
export type IHandlerSubmit<T extends FieldValues> = UseFormHandleSubmit<
  T,
  undefined
>;

export type ISchema<
  T1 extends yup.Maybe<yup.AnyObject>,
  T2 extends yup.Maybe<yup.AnyObject>
> = yup.ObjectSchema<T1, yup.AnyObject, T2, ''>;

export type IFormInputNameAccepeted =
  | keyof IWelcomeForm<string>
  | keyof ICreateTaskForm<string>;

export type IFormErrosAccepeted = IFormErros<IWelcomeForm<string>> &
  IFormErros<ICreateTaskForm<string>>;

export type ITriggerFormInput =
  | ITrigger<IWelcomeForm<string>>
  | ITrigger<ICreateTaskForm<string>>;
