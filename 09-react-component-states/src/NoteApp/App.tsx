import { useState } from "react"
import { getNoteList, type Note } from "./api/getNote"
import NoteListPage from "./pages/NoteListPage"
import { ROUTES } from "./routes";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteCreatePage from "./pages/NoteCreatePage";
import NoteEditPage from "./pages/NoteEditPage";




function NoteApp() {

  const [routeInfo, setRouteInfo] = useState<{
    route:string;
    noteId: number | null;
  }>({
    route:'list',
    noteId:null
  });

  const [list, setList] = useState(()=> getNoteList())
  

  const handleChangeRoute = (nextRoute:string,pickNoteId:number = 0) => {

    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
      noteId: pickNoteId ? pickNoteId : routeInfo.noteId
    })
  }

  // 노트 생성 함수 
  const handleCreateNote = (newNoteItem:Note) => {
    setList([
      ...list,
      newNoteItem
    ])
  }

  const handleEditNote = () => {
    
  }

  const handleDeleteNote = () => {
    
  }
  
  
  // 파생 상태 
  const newNoteId = list.length + 1;
  
  switch (routeInfo.route) {
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute}/>
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId}  onChangeRoute={handleChangeRoute}/>
    case ROUTES.create:
      return <NoteCreatePage newNoteId={newNoteId} onCreate={handleCreateNote} onChangeRoute={handleChangeRoute}/>
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} onChangeRoute={handleChangeRoute} onEdit={handleEditNote} onDelete={handleDeleteNote}/>
    default: 
      return <div>404 not found</div>
  }
}


export default NoteApp









