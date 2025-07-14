import { useId, useState } from "react";
import type { Note } from "../api/getNote";
import { getUser, getUserList } from "../api/getUser";
import './NoteForm.css'


interface Props {
  mode: string;
  newNoteId: number;
  onCreate: (newNoteItem: Note) => void;
  onBackLink: () => void;
}

const userList = getUserList();

type Form = React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>

function NoteForm({ mode, newNoteId, onCreate, onBackLink }: Props) {

  
  const [formData, setFormData] = useState(() => {
    return {
      title: "",
      content: "",
      userId: 0,
    };
  });

  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const handleUpdateFormData = (e:Form) => {
    const { name, value } = e.target;

    const nextFormData = {
      ...formData,
      [name]:value
    }
    setFormData(nextFormData);
  }


  const handleCreateNote = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { title, content, userId } = formData;

    const newUserId = Number(userId);
    
    const user = getUser(newUserId);
    
    // note 객체 만들기 expand: user
    // onCreate() <- 전달

    if(!user) return;
    if(!newNoteId) return;
    
    const newNote = {
      id: newNoteId,
      title: title.trim(),
      content: content,
      userId: newUserId,
      createdAt:'',
      updatedAt:'',
      expand:{
        user: user
      }
    }

    onCreate(newNote)
    onBackLink();
    
  };

  return (
    <form className="NoteForm" onSubmit={handleCreateNote}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          id={titleId}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          value={formData.content}
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={userId}>작성자</label>
        <select
          id={userId}
          name="userId"
          value={formData.userId}
          onChange={handleUpdateFormData}
        >
        <option>작성자 선택</option>
        {
          userList.map((user)=>(
            <option key={user.id} value={user.id}>{user.name}</option>
          ))
        }
        </select>
      </div>

      <div className="buttonGroup">
        <button type="submit">추가</button>
        <button type="reset">초기화</button>
      </div>


    </form>
  );
}
export default NoteForm;
