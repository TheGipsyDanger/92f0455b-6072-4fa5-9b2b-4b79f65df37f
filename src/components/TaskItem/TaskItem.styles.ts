import styled from 'styled-components/native'
import { Div } from '../Atomics'
import { theme } from '~/styles/theme'
import { type IStatus } from './TaskItem.types'
import Swipeable from 'react-native-swipeable'

export default {
  Container: styled(Swipeable)``,
  Content: styled(Div)`
    border-width: 1px;
    border-color: red;
    border-color: ${theme.colors['grey-clean']};
    border-radius: ${theme.raddi.medium}px;
    background-color: ${theme.colors.white};
  `,
  Status: styled(Div)<IStatus>`
    width: 12px;
    background-color: ${({ status }: { status: IStatus }) =>
      status === 'done' ? theme.colors.green : theme.colors.yellow};
    border-top-left-radius: ${theme.raddi.medium}px;
    border-bottom-left-radius: ${theme.raddi.medium}px;
  `
}
