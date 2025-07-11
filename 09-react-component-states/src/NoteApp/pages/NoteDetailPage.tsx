import { getNoteItem } from "../api/getNote";
import PrintError from "../components/PrintError";

interface Props {
  noteId: number | null;
  onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
}


function NoteDetailPage({noteId,onChangeRoute}:Props) {


  // noteId가 없다면 PrintError 컴포넌트를 화면에 렌더링
  if(!noteId) {
    return <PrintError>노트 정보를 불러오지 못했습니다!</PrintError>
  }

  const note = getNoteItem(noteId);
  

  console.log( note );
  

  return (
    <div>NoteDetailPage</div>
  )
}
export default NoteDetailPage