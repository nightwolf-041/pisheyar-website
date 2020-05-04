import React, { useReducer, useContext } from 'react'

const globalStateContext = React.createContext()
const globalDispatchContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    // case 'INCREASE':
    //   return state + 1
    default:
      return state
  }
}

export const globalStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null)
  return (
    <globalDispatchContext.Provider value={dispatch}>
      <globalStateContext.Provider value={state}>
        {children}
      </globalStateContext.Provider>
    </globalDispatchContext.Provider>
  )
}

export const useCount = () => useContext(globalStateContext)
export const useDispatchCount = () => useContext(globalDispatchContext)
