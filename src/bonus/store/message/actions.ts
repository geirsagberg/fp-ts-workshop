import { createAction } from '~/reduxUtils'
import { Message } from '.'

export const setMessages = (messages: Message[]) => createAction('setMessages', messages)
export const addMessage = (message: Message) => createAction('addMessage', message)
