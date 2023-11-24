import React from 'react'
import mentee from '../mentee';
import {ProfileCard} from '../index'

function CreateCard(mentee){
  return (
    <ProfileCard
      key = {mentee.id}
      name = {mentee.name}
      img = {mentee.imgUrl}
      description = {mentee.description}
    />
  );
}

function Mentee() {
    return (
      <div className='p-5 px-11 grid grid-cols-4 gap-10 py-5'>
        {mentee.map(CreateCard)}
      </div>
    
    )
}

export default Mentee
