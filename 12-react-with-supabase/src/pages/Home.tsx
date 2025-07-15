import S from './Home.module.css'


function Home() {
  return (
    <div className={S.container}>
      <div>
        <h2>스타일의 완성 <strong>2.9cm</strong></h2>
      </div>

      <video src="/visual.mp4" autoPlay muted loop playsInline></video>
    </div>
  )
}
export default Home