import { useContext, createContext } from "react";

const NoteContext =createContext({
    note:[{
        id: "",
        date: "",
        text: "",
    }],
    addNote: ()=>{},
    updateNote: (id, textref)=>{},
    deleteNote: (id)=>{},
    saveNote: (id)=>{}
})

export const UseNote =()=>{
    return useContext(NoteContext)
}

export const NoteProvider = NoteContext.Provider