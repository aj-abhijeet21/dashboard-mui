import React, { createContext, useReducer } from 'react'
import { StateType, ActionType, initialState, reducer } from './Reducer'

export type GlobalContextType = {
  state: StateType
  dispatch: React.Dispatch<ActionType>
}

type Props = {
  children?: React.ReactNode
}

export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null,
})

export function GlobalContextProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
