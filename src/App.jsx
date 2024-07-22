
import { useState } from 'react'
import Card from 'd:/task/frontend/src/card'
import './App.css'
import { NoteProvider } from './context/NoteContext'
import { text } from '@fortawesome/fontawesome-svg-core'

function App() {

  const [note, setNote] =useState([])
  const [isOpen, setOpen]= useState(false)
  
  const addNote=()=>{
    setNote((prev)=>[{id: Date.now() , ...note},...prev])
  }
 const updateNote =(id, textRef)=>{
    setNote((prev)=>prev.map((prevNote)=>prevNote.id === id ? [{text: textRef},...note]:prevNote))
  }
  
 const deleteNote =(id)=>{
  setNote((prev)=> prev.filter((note)=> note.id !==id))
}

  const saveNote =()=>{}

  const Colors =[  
    "F7ECDE",
    "#FF9F4A",
    "#FED54A",
    "#E1A2B8",
    "#1B98F5",
    "#50DBB4",
    "#35BDD0",
    "#CAD5E2",
    "#EDBF69",]

  return (
   <>
   <main className='flex justify-between gap-5'>
   {/* button */}
    <aside className='fixed items-start justify-start w-100 h-16 md:flex-col w-100'> 
      <h1 className='capitalize text-black font-bold mb-10 text-xl'>notes</h1>
      <button 
      className='rounded-full bg-black text-white px-4 py-2 shadow-lg'
      onClick={()=>setOpen(!isOpen)}>
        
      {(isOpen)? "x":"+" }
      {console.log(isOpen)}
      </button>
      {/* color fields */}
     {isOpen && (<div className='flex-col'>
      {Colors.map((Colors, index)=>{
        return <div
        
        key={index}
        className='rounded-full w-4 h-4 cursor-pointer m-4'
        style={{backgroundColor: Colors}}
        onClick={()=>addNote(Colors)}>
         </div>
      })}
      </div>)}
    </aside>
    {/* card */}

   
    <section className='px-2 md:pl-56 flex flex-wrap gap-5 md:gap-10'>
      
      < Card
      id={note.id}
      date={note.date}
      color={note.color}
      text={note.text}
      addNote={addNote}
      saveNote={saveNote}
      deleteNote={deleteNote}
      updateNote={updateNote}
      />
    </section>
 
   </main>
   
   </>
  )
}

export default App
