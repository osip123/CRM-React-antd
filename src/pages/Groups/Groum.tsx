import React from 'react'
import Group from '../../components/ui/Group/Group'

import './pageGpoup.scss'

const Groum = () => {
  return (
    <>
    <div className='main_gr'> 
      <h2>Your Groups</h2>
      <Group _id={8397489} name='osip' role='mainAdm' />
    </div>
    </>
  )
}

export default Groum
