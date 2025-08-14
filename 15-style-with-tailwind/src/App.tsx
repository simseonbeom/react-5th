
// import Playground from './components/Playground'
import Button_clsx from './components/Button_clsx'
import Button_cva from './components/Button_cva'
import Button_tw from './components/Button_tw'
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

      <Button_twMerge type="primary" className="bg-red-500">Call To Action</Button_twMerge>

      <hr className='my-5'/>

      <Button_clsx size='sm' className="bg-orange-400">Call To Action</Button_clsx> 

      <hr className='my-5'/>

      <Button_tw size='lg' disabled className="bg-emerald-500">Call To Action</Button_tw>

      <hr className='my-5'/>

      <Button_cva intent='secondary' block size="lg" disabled className='bg-indigo-500' loading={true}>Call To Action</Button_cva>

      <hr className='my-5'/>

      <Button_cva intent='primary' block size="lg" className='text-6xl' loading={true}>Call To Action</Button_cva>

      <hr className='my-5'/>

      <Button_cva>Call To Action</Button_cva>

    </div>
  )
}

export default App


