import { User } from '.'
import { createAction } from '~/reduxUtils'

export const setUsers = (users: Dictionary<User>) => createAction('setUsers', users)
export const addUser = (user: User) => createAction('addUser', user)
