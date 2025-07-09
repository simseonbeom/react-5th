import { useState } from "react"




function View() {
  return (
    <div></div>
  )
}
export default View



function RespondingToEvents(){
  
  const [text,setText] = useState(''); // Hook

  const style = {
    marginRight:'10px'
  }

  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <hr />
      <form 
        action="/?submitted"
        onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          const input = target.children[0] as HTMLInputElement;
          setText(input.value);
        }}
      >
        <input 
          name="사용자 이름" 
          type="text" 
          aria-label="사용자 이름" 
          placeholder="심선범"
          // style={style}
        />
        {' '}
        <button type="submit">보내기</button>
      </form>
      <div>
        <output>{text}</output>
      </div>
    </div>
  )
}

View.RespondingToEvents = RespondingToEvents
















