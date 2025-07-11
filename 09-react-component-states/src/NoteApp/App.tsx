import { useState } from "react"
import { getNoteList } from "./api/getNote"
import NoteListPage from "./pages/NoteListPage"
import { ROUTES } from "./routes";
import NoteDetailPage from "./pages/NoteDetailPage";




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

  
  switch (routeInfo.route) {
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute}/>
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId}  onChangeRoute={handleChangeRoute}/>
    case ROUTES.create:
      return <div>create page</div>
    case ROUTES.edit:
      return <div>edit page</div>
    default: 
      return <div>404 not found</div>
  }
}


export default NoteApp









