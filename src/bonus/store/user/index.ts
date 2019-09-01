import { createReducer, ActionsUnion } from '~/reduxUtils'

export interface User {
  id: string
  name: string
}

export interface UserState {
  users: Dictionary<User>
}

const initialState: UserState = {
  users: {}
}

type Action = ActionsUnion<typeof import('./actions')>

const reducer = createReducer<UserState, Action>(initialState, (state, action) => {
  switch (action.type) {
    case 'addUser': {
      const user = action.payload
      state.users[user.id] = user
      return
    }
    case 'setUsers': {
      const users = action.payload
      state.users = users
      return
    }
  }
})

export default reducer
