import React from 'react'
import { useParams } from 'react-router-dom'
/*
  --------< USE OF useParams()
this method is used in searching the username or id that we
 have put at the end of url and will fetch data from
  data base etc as we do while searching any person facebook profile etc
  >------------------
  */
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
    // this will  just display the username that we have entered at the end of urld
  )
}

export default User