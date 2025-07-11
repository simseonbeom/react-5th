import { useState } from "react"
import { getNoteList } from "./api/getNote"
import NoteListPage from "./pages/NoteListPage"
import { ROUTES } from "./routes";




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
      return <div>Detail page</div>
    case ROUTES.create:
      return <div>create page</div>
    case ROUTES.edit:
      return <div>edit page</div>
    default: 
      return <div>404 not found</div>
  }
}


export default NoteApp









