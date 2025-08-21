import tw from "@/utils/tw";
import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import { useTaskStore, useUnpinnedTasks } from "./@store";



function UnpinnedTaskList() {

  const deleteTask = useTaskStore((s)=> s.deleteTask);
  const togglePin = useTaskStore((s)=> s.togglePin);
  const setTask = useTaskStore((s)=> s.setTask);


  const unpinnedTaskList = useUnpinnedTasks();

  const handleSetTask = (taskId:string, isCompleted:boolean) => setTask(taskId, isCompleted)

  const handleTogglePin = (taskId:string) => togglePin(taskId)

  const handleDeleteTask = (taskId:string) => deleteTask(taskId)

  /* 
  리스트 렌더링, 이벤트 바인딩 
  */
  return (
    <ul className="flex flex-col gap-6">
      {
        unpinnedTaskList.map((task)=>(
          <li key={task.id} className="flex justify-between gap-1.5">
            <label className={tw("flex gap-1",task.isCompleted && 'line-through')}>
              <input 
                type="checkbox" 
                onChange={(e)=> handleSetTask(task.id, e.target.checked)}
              />
              { task.content }
            </label>
            <div className="flex gap-2">
              <button type="button" onClick={() => handleTogglePin(task.id)}>
                { task.isPin ? <PiPushPinFill/> : <PiPushPinLight/> }
              </button>
              <button type="button" 
                onClick={()=> handleDeleteTask(task.id)}
              >
                <RxCross1/>
              </button>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
export default UnpinnedTaskList