import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUsers, selectMessages } from './store/selectors'
import { loadUsers } from './store/user/thunks'
import { loadMessages, newMessage } from './store/message/thunks'

export const App = () => {
  const users = useSelector(selectUsers)
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch()

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          {messages.map((m, i) => (
            <div key={i}>
              {users[m.userId] ? users[m.userId].name : '-'}: {m.timestamp}: {m.text}
            </div>
          ))}
        </div>
        <div>
          {Object.keys(users)
            .map(id => users[id])
            .map(user => (
              <div key={user.id}>{user.name}</div>
            ))}
        </div>
      </div>
      <button onClick={() => dispatch(loadUsers())}>Load users</button>
      <button onClick={() => dispatch(loadMessages())}>Load message</button>
      <button onClick={() => dispatch(newMessage())}>New message</button>
    </div>
  )
}
