import Child from "./Child"

function Parent({username}:{username:string}) {
  return (
    <div style={{
      border:'1px solid gray',
      padding:'10px'
    }}>
      <h2>바뀐다111111</h2>
      <Child username={username}/>
    </div>
  )
}
export default Parent