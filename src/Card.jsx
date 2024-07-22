import React from 'react'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { NoteProvider } from './context/NoteContext'
function Card(
  {
    id,
    text,
    date,
    color,
    updateNote,
    deleteNote,
    addNote,
    saveNote,
  }
) 
{
  
    const textRef = useRef(null)
    
  return (
  
    <div    
    className="w-full sm:w-70 md:w-80 h-auto rounded-3xl drop-shadow-lg p-4 md:p-5 text-black mt-10 bg-pink-600 "
    style={{ backgroundColor: color }}>
      <textarea 
       className='rounded-3xl scrollbar w-full h-20 md:h-35 bg-transparent border-none focus:outline-none resize-none text-left p-5'
       placeholder='Write here..'
       ref={textRef}
      >
        {text}
      
      </textarea>
      <footer className='flex justify-center gap-5 rounded-xl'>
        <div>
          {date}
        </div>
        <div className='inline-flex gap-3 ml-auto'>
        <button 
        className='bg-black px-4 py-2 text-white rounded-3xl'
        onClick={()=>updateNote(id, textRef.current.value)}>
          save
        </button>
        <button 
        className='bg-black px-4 py-2 text-white rounded-3xl'
        onClick={()=>deleteNote(id)}>
        <FontAwesomeIcon icon={faTrashCan} />
        </button>
        </div>
      </footer>
    </div>

  )
}
export default Card
