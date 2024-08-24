import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatResponse } from '../interface/chat';
import { messageResponse } from '../interface/message';
import { setChats } from './slices/currentChat.service';
const baseUrl = 'https://api.lenzaos.com/'

export const api = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl,
      credentials: 'include',
      prepareHeaders(headers) {
        headers.set('version','0.0')
        headers.set('Accept', 'application/json');
        return headers
}
    }),
    keepUnusedDataFor: 60,
    endpoints: build => ({
        getMessages: build.query<messageResponse, string>({
         query: (chatId) => `message.get?chat_id=${chatId}`
        }),
        getChats: build.query<ChatResponse, void>({
            query: () => 'chat.get?limit=100',
            async onQueryStarted(_, { dispatch, queryFulfilled }) {

              const { data:{response} } = await queryFulfilled
              dispatch(setChats(response))
        }
          }),
  })
})

export const { useGetMessagesQuery,useGetChatsQuery } = api