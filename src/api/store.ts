import { configureStore } from '@reduxjs/toolkit'
import {api} from './api'
import currentChatReducer from './slices/currentChat.service'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,    
    currentChat: currentChatReducer,
  },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            api.middleware,
        ])
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
