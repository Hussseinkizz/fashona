import { useState, useRef, useMemo, useCallback } from 'react'


// TODO: Fix below typscript

const useStatePro = (value: any) => {
  const [state, setState] = useState(value)
  const orignalStateRef = useRef(value)

  // the derived state should be the old state + new state, however the currentState is the new state only!
  const preState = useMemo(() => orignalStateRef.current, [value])
  const currentState= state
  const derivedState = [{...orignalStateRef.current}, ...state]

  // always run when the value param changes else leave current state as is...
  // the new value can be a return of a function i.e () => 1+1  which gives 2
  const changeState = (newValue: any) => {
    useCallback(() => setState(newValue),[newValue])
  }

  return {changeState, preState, currentState, derivedState}
}

let counter = {
  value: 0
}

const { changeState, preState, currentState, derivedState } = useStatePro(counter)

changeState(1)
console.log(preState, currentState, derivedState)
// state before the modification: preState
// state after computation involving state: derivedState
// state now, computed or not: currentState

export default useStatePro