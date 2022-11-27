import { Cycle } from './reducer'

export enum ActionsTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  DELETE_ALL_CYCLES = 'DELETE_ALL_CYCLES',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionsTypes.ADD_NEW_CYCLE,
    payload: { newCycle },
  }
}
export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
export function interruptCurrentCycleAction() {
  return {
    type: ActionsTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
export function deleteAllCyclesAction() {
  return {
    type: ActionsTypes.DELETE_ALL_CYCLES,
  }
}
