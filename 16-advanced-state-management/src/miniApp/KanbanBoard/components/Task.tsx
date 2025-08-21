// components/Task.tsx
import tw from '@/utils/tw';
import useKanbanBoardStore from '../@store';
import { TASKS, type TaskType } from '../@types';
import { useShallow } from 'zustand/shallow';
import { MdDeleteForever } from "react-icons/md";


interface Props {
  id: string;
};

function Task({ id }: Props) {

  const {task, deleteTask, setDraggedTask} =  useKanbanBoardStore(useShallow((s)=> ({
    task: s.tasks.find((task) => task.id === id),
    deleteTask: s.deleteTask,
    setDraggedTask: s.setDraggedTask
  })))

  // const task = useKanbanBoardStore((state) =>
  //   state.tasks.find((task) => task.id === id)
  // );

  // const deleteTask = useKanbanBoardStore((state) => state.deleteTask);
  // const setDraggedTask = useKanbanBoardStore((state) => state.setDraggedTask);

  if (!task) return null; 

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  const buttonLabel = `${task.title} 삭제`;

  return (
    <div
      className="hover:cursor-move min-h-[4rem] rounded-md bg-white text-sm shadow-md shadow-slate-400/20 p-4"
      draggable
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.dropEffect = 'move';
        setDraggedTask(id);
      }}
    >
      <h3 className="font-semibold text-base">{task.title}</h3>
      <p>{task.description}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <button
            type="button"
            onClick={handleDeleteTask}
            aria-label={buttonLabel}
            title={buttonLabel}
          >
            <MdDeleteForever size={25} />
          </button>
        </div>
        <span
          className={ tw('uppercase text-xs text-right py-0.5 px-1.5 rounded-full text-white font-semibold tracking-wider',getColorClassName(task.status))} >
          {task.status}
        </span>
      </div>
    </div>
  );
}


function getColorClassName(status: TaskType): string {
  switch (status) {
    case TASKS.planned:
      return 'bg-planned';
    case TASKS.ongoing:
      return 'bg-ongoing';
    case TASKS.done:
      return 'bg-done';
  }
}

export default Task;
