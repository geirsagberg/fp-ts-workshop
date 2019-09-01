import { createReducer, ActionsUnion } from '~/reduxUtils'

export interface Message {
  timestamp: string
  text: string
  userId: string
}

export interface MessageState {
  messages: Message[]
}

const initialState: MessageState = {
  messages: []
}

type Action = ActionsUnion<typeof import('./actions')>

const reducer = createReducer<MessageState, Action>(initialState, (state, action) => {
  switch (action.type) {
    case 'setMessages': {
      state.messages = action.payload
      return
    }
    case 'addMessage': {
      state.messages.push(action.payload)
      return
    }
  }
})

export default reducer
