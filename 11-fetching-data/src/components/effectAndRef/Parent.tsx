import Child from "./Child"

function Parent() {
  return (
    <div>
      <h2>채팅방</h2>
      <div>
        <Child />
        <button type="button">메시지 보내기</button>
      </div>
    </div>
  )
}
export default Parent