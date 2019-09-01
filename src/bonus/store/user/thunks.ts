import { Thunk } from '~/reduxUtils'
import { setUsers } from './actions'

export const loadUsers = (): Thunk => (dispatch, getState) => {
  dispatch(
    setUsers({
      '1': {
        id: '1',
        name: 'Chandra'
      },
      '2': {
        id: '2',
        name: 'Jace'
      }
    })
  )
}
