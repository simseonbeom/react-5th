
// import Playground from './components/Playground'
import Button_twMerge from './components/Button_twMerge'
import ChatCard from './components/ChatCard'
import Profile from './components/Profile'
import ProfileCard from './components/ProfileCard'
import '/src/styles/style.css'



function App() {
  return (
    <div>
      <h1 className='flex justify-center items-center bg-indigo-500 text-white px-4 py-2 text-shadow-lg'>hello tailwind</h1>
      
      <hr className='my-5'/>
      {/* <Playground /> */}

      <ChatCard />
      
      <hr className='my-5'/>

      <ProfileCard />

      <hr className='my-5'/>

      <Profile />

      <hr className='my-5'/>

      <Button_twMerge className="bg-red-500">Call To Action</Button_twMerge>


    </div>
  )
}
export default App


