import { Thunk } from '~/reduxUtils'
import { setMessages, addMessage } from './actions'

export const loadMessages = (): Thunk => dispatch => {
  dispatch(
    setMessages([
      { text: 'Whatup Jace?', userId: '1', timestamp: '03:12' },
      { text: 'New deck. Who dis?', userId: '2', timestamp: '03:41' }
    ])
  )
}

export const newMessage = (): Thunk => async dispatch => {
  const json = await fetch('http://www.randomtext.me/api/gibberish/p-1/5-10').then(r => r.json())
  const text = json.text_out.replace(/<\/?p>/g, '')
  dispatch(
    addMessage({
      userId: Math.random() > 0.5 ? '1' : '2',
      text,
      timestamp: new Date().toLocaleTimeString()
    })
  )
}
