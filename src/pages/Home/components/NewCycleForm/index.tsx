import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome ao seu projeto"
        // list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      ></TaskInput>

      {/* <datalist id="task-suggestions">
        <option value="projeto 1" />
        <option value="projeto 2" />
        <option value="projeto 3" />
      </datalist> */}

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        min={1}
        max={90}
        {...register('minutesAmount', { valueAsNumber: true })}
      ></MinutesAmountInput>

      <span>minutos.</span>
    </FormContainer>
  )
}
