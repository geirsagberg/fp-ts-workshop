import { createAction } from '~/reduxUtils'
import { Message } from '.'

export const setMessages = (messages: Message[]) => createAction('setMessages', messages)
