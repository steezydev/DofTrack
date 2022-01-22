import React from 'react'
import { DreamData } from '../../types/TypesDream'

interface IProps extends DreamData {}

export default function DreamFinished({
  id,
  title,
  gems,
  goalGems,
  goalsNumber,
  daysNumber,
  tasksNumber,
  isActive = true,
}: IProps) {
  return (
    <div>
      
    </div>
  )
}
