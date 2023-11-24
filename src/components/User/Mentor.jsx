import React from 'react'
import { ProfileCard} from '../'
import mentors from '../mentors'

function CreateCard(mentors){
  return (
    <ProfileCard
      key = {mentors.id}
      name = {mentors.Name}
      img = {mentors.imgUrl}
      description = {mentors.description}
    />
  );
}

function Mentor() {
    return (
      <div className='p-5 px-11 grid grid-cols-4 gap-10'>
        {/* <ProfileCard img="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" name="Angela Yu" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Aiony Haust" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Juan Encalada" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Joel Mott" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Petr Sevcovic" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1611403119860-57c4937ef987?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Hà Nguyễn" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Mason Wilkes" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Alexander Hipp" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Nicolas Horn" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/>
        <ProfileCard img="https://images.unsplash.com/photo-1532032877540-0793b44545a2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Clint McKoy" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"/> */}
        {mentors.map(CreateCard)}
      </div>
    )
}

export default Mentor
