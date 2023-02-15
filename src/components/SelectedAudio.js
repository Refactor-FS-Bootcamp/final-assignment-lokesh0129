import React from 'react'

const SelectedAudio = (props) => {
      
     console.log('selected')
     
  return (
    <div className='selected'>
     <h1> to be trimmed</h1>

      <audio src=  {props.recordings}></audio>
      
      
    </div>
  )
}

export default SelectedAudio
