import tw from "@/utils/tw";
import { useReducer } from "react";
import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';


function UnpinnedTaskList_() {


  // const {handleDeleteTask} = uesTask()
  // const [tasks,dispatch] = useReducer(reducer,INITIAL_TASK)

  // const {setTask, togglePin, tasks, deleteTask} = useTask()

  const isCompleted = false;
  const isPin = false;

  const handleSetTask = () => {
    // 누구를 ? 토글 값은 뭘로 바꿀건데?
    // dispatch({type:ACTION_TYPES.TOGGLE_PIN,payload:{taskId, checked}})
  }

  const handleTogglePin = () => {

  }

  const handleDeleteTask = () => {
  }

  return (
    <ul className="flex flex-col gap-6">

      <li className="flex justify-between gap-1.5">
        <label className={tw("flex gap-1",isCompleted && 'line-through')}>
          <input 
            type="checkbox" 
            // onClick={()=> handleSetTask(taskId, target.checked)}
          />
          Zustand 배우기
        </label>
        <div className="flex gap-2">
          <button type="button">
            { isPin ? <PiPushPinFill/> : <PiPushPinLight/> }
          </button>
          <button type="button" 
            // onClick={()=> handleDeleteTask(task.id)}
          >
            <RxCross1/>
          </button>
        </div>
      </li>
    </ul>
  )
}
export default UnpinnedTaskList_