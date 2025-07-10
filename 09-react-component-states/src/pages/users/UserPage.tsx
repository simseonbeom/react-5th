


import userData from '@/data/users.json'
import { useState } from 'react'
import UserList from './components/UserList';
import UserSearchBox from './components/UserSearchBox';



function UserPage() {

  const [users] = useState(userData);
  

  return (
    <div className="UserPage">
      <UserSearchBox />
      <UserList users={users} />
    </div>
  )
}
export default UserPage