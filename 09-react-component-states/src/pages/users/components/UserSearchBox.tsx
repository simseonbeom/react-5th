import { useId } from "react"


function UserSearchBox() {

  const id = useId();

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 이벤트 객체를 받아 새로고침이 일어나지 않게 만들어주세요
    // input의 값을 가져와주세요.
    const input = document.getElementById(id) as HTMLInputElement;
    const value = input.value.trim();

    if(value.length > 0){
      // 사용자가 단어를 입력했음. 검색 진행
      input.value = ''
    }else{
      // 사용자 단어 입력 x 검색 진행 x
      alert('검색어를 입력해주세요.');
      input.value = ''
      input.focus();
    }
  }

  const handleReset = () => {

  }
  
  return (
    <form
      className="UserSearchBox"
      onSubmit={handleSearch}
      onReset={handleReset}
    >
      <div className="control">
        <label htmlFor={id}>사용자 검색
          <input type="search" id={id}/>
        </label>
      </div>
      <button type="submit">찾기</button>
      <button type="reset">목록 초기화</button>
    </form>
  )
}
export default UserSearchBox

