

import AllStudent from '@/components/allStudentComponent'
import StudentsToolbar from '@/components/StudentsToolbar'
import { allStudent } from '@/constant/userData'
import React from 'react'

const page = () => {
  return (
    <div>
<StudentsToolbar/>
<AllStudent users={allStudent}/>
    </div>
  )
}

export default page