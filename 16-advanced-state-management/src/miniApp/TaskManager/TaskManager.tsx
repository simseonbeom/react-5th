import tw from "@/utils/tw"
import UnpinnedTaskList from "./UnpinnedTaskList"
import PinnedTaskList from "./PinnedTaskList"


function TaskManager({className}:{className:string}) {
  return (
    <div 
      lang="en"
      className={tw('w-72 flex flex-col gap-2 p-5 border border-accent rounded text-accent',className)}
    >
      
      <PinnedTaskList />
      <UnpinnedTaskList />

    </div>
  )
}
export default TaskManager