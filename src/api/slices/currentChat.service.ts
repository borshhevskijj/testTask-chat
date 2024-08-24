import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Chats = { [id: string]: {id:string, title:string} }
interface initialStateProps {
    chats: Chats
}

const initialState: initialStateProps = {
    chats:{},
}

export const currentChatSlice = createSlice({
  initialState,
  name: 'currentChatSlice',
  reducers: {
    setChats: (state, action: PayloadAction<{id:string, title:string}[]>) => {
      action.payload.forEach((chat) => {
        state.chats[chat.id] = chat
      })
    },
  },
})

export default currentChatSlice.reducer
export const { setChats } = currentChatSlice.actions
