import React from 'react'
import RightCard from './rightCard'

const Rightcontent = () => {
  return (
    <div className='h-full w-2/3 p-6 flex flex-wrap gap-6'>
     <RightCard image="https://drscdn.500px.org/photo/1060931476/q%3D90_m%3D2048/v2?sig=b0906765ff380b317e40c04a5fd911e98afa4a1bc7d84da3a5b3943edfd176"/>
     <RightCard image = "https://drscdn.500px.org/photo/1060864799/q%3D90_m%3D2048/v2?sig=914f643d0d8015ac8213bf5ea7ebfa4cd4dff9383ccaf359ef373979caf935"/>
     <RightCard image= "https://drscdn.500px.org/photo/1060931301/q%3D90_m%3D2048/v2?sig=8e084dc3064a95bdaacd0c23459e9912cd375f6926ecd81255c2805bebb5ee"/>
     <RightCard image = "https://w.wallhaven.cc/full/rd/wallhaven-rd5rr.jpg"/>
    </div>
  )
}

export default Rightcontent
