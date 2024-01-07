import { type ITaskDetails } from '~/pages/TaskDetails/TaskDetails.types'
import { useAppSelector } from '~/utils'

export const useTaskDetails = (): ITaskDetails.IModel => {
  const selectedTask = useAppSelector(state => state.Tasks.selectedTask)
  return {
    selectedTask
  }
}
