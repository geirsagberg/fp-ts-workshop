import { AppState } from '.'

export const selectUsers = (state: AppState) => state.user.users
export const selectMessages = (state: AppState) => state.message.messages
