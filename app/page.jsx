'use client'
import React, { useState } from 'react'
import QuickLinks from './QuickLinks';
const Page = () => {
    const [visible, setVisible] = useState(false);

    const bProps = {
        visible,
        setVisible
    }
  return (
    <div style={{ 
        width:'100%',
        height:'90vh',
        backgroundColor:'#E4E4E4'
      }}>
      <button style={{ width:"300px", height:'300px',cursor:'pointer',fontSize:25 }} onClick={_ => setVisible(p => !p)}>Show Quick Links</button>
        <QuickLinks {...bProps} />
    </div>
  )
}

export default Page
