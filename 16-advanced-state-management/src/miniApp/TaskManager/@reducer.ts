



export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
  isPin: boolean;
}

export type State = Task[];


const ACTION_TYPES = {
  ADD_TASK: '태스크 추가',
  SET_TASK: '태스크 토글',
  TOGGLE_PIN: '핀 토글',
  DELETE_TASK: '태스크 삭제',
} as const 

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ActionType = typeof ACTION_TYPES[keyof typeof ACTION_TYPES];


// 데이터 fetch 
export const INITIAL_TASK:Task[] = [
  {
    id:'4bd80a04-855a-47f6-9ad7-30660f86536e',
    content:'Context + Reducer',
    isCompleted: false,
    isPin: false
  },
  {
    id:'00398dd0-70b7-4b96-a06e-90e2c83848ee',
    content:'Zustand',
    isCompleted: false,
    isPin: false
  },
]


type Action = 
  | { type: typeof ACTION_TYPES.ADD_TASK; payload: string }
  | { type: typeof ACTION_TYPES.DELETE_TASK; payload: string } // task id
  | { type: typeof ACTION_TYPES.TOGGLE_PIN; payload: string } // task id
  | { type: typeof ACTION_TYPES.SET_TASK; payload: { taskId:string, isCompleted:boolean } } // { taskId, isCompleted }



export default function reducer(state:State, action:Action):State{


  switch (action.type) {
    case ACTION_TYPES.ADD_TASK: {   // 추가
      // 태스크 생성
      const newTask = {
        id: crypto.randomUUID(),
        content: action.payload,
        isCompleted: false,
        isPin:false
      }

      // 태스크 병합
      const nextState = [newTask, ...state];

      return nextState // 배열 리턴
    }
      
    // 제거 : ACTION_TYPES.DELETE_TASK => task.id
    case ACTION_TYPES.DELETE_TASK : {
      const deleteId = action.payload;
      const nextState = state.filter((item) => item.id !== deleteId);
      return nextState
    }

    // 핀 토글 : ACTION_TYPES.TOGGLE_PIN => task.id
    case ACTION_TYPES.TOGGLE_PIN : {
      const taskId = action.payload;
      const nextState = state.map((item)=> {
        if( item.id === taskId){
          const nextTask = { ...item, isPin: !item.isPin }
          return nextTask
        }else{
          return item
        }
      });
      return nextState
    }

    // dispatch({type:ACTION_TYPES.SET_TASK, payload: {taskId:string, isCompleted:boolean}})
    // 체크 토글 : ACTION_TYPES.SET_TASK => task.id, isCompleted
    case ACTION_TYPES.SET_TASK : {
      const { taskId, isCompleted } = action.payload

      // setState
      const nextState = state.map((item)=> {
        if( item.id === taskId){
          const nextTask = { ...item, isCompleted }
          return nextTask
        }else{
          return item
        }
      })

      return nextState
    }
  

  }
}








































