
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink'
import NoteForm from '../components/NoteForm';
import { ROUTES } from '../routes';


interface Props {
  onEdit: () => void;
  onDelete: () => void;
  onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
  noteId:number | null;
}

function NoteEditPage({onEdit, onDelete, onChangeRoute, noteId}: Props) {

  if(!noteId) return;
  const note = getNoteItem(noteId);
  const handleBackLink = () => onChangeRoute(ROUTES.list)
  
  return (
    <div className="NoteEditPage">
      <BackLink onClick={handleBackLink}/>
      <h2>노트 편집</h2>
      <NoteForm 
        mode="edit"
        onDelete={onDelete}
        onEdit={onEdit}
        note={note}
        onBackLink={handleBackLink}
      />
    </div>
  )
}
export default NoteEditPage





