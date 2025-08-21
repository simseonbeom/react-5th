import tw from "@/utils/tw"
import { useTask } from "./@context"
import { PiPushPinFill, PiPushPinLight } from "react-icons/pi"


function PinnedTaskList_() {

const {
  pinnedTaskList,
  methods: { setTask, togglePin }
} = useTask()

const handleSetTask = (taskId:string, isCompleted:boolean) => setTask(taskId, isCompleted)

const handleTogglePin = (taskId:string) => togglePin(taskId)
    
return (
    <ul className="flex flex-col gap-6">
      {
        pinnedTaskList.map((task)=>(
          <li key={task.id} className="flex justify-between gap-1.5">
            <label className={tw("text-2xl flex gap-1",task.isCompleted && 'line-through')}>
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

            </div>
          </li>
        ))
      }
    </ul>
  )
}
export default PinnedTaskList_