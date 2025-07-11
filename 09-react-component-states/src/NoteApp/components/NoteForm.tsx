import type { Note } from "../api/getNote";

interface Props {
  mode:string;
  newNoteId:number;
  onCreate: (newNoteItem:Note)=>void;
  onBackLink:()=> void;
}

function NoteForm() {
  return (
    <div>NoteForm</div>
  )
}
export default NoteForm