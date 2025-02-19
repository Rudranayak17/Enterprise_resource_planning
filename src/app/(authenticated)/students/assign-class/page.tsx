import AssignedComp from '@/components/assignedClassComp'
import { userData } from '@/constant/userData'
import React from 'react'

const page = () => {
  return (
<AssignedComp users={userData}/>
  )
}

export default page