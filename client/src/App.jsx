import Login from "./pages/Login"
import {Routes, Route,Navigate,Outlet,useLocation} from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Tasks from './pages/Tasks'
import Users from "./pages/Users"
import Trash from "./pages/Trash"
import TaskDetails from "./pages/TaskDetails"
import {Toaster} from "sonner"

function Layout(){
  const user='';
  const location =useLocation();
  return user?(
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* <Sidebar/> */}
      </div>
      {/* <MobileSlidebar/> */}
      <div className="flex-1 overflow-y-auto">
        {/* <NavBar/> */}
        <div className="p-4 2xl:px-10">
          <Outlet/> 

        </div>

      </div>
    </div>
  ):(
    <Navigate to='/login' state={{from: location}} replace />
  )
}
function App() {

  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to="/dashboard"></Navigate>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/completed/:status" element={<DashBoard/>}/>
          <Route path="/todo/:status" element={<DashBoard/>}/>
          <Route path="/in-progress/:status" element={<DashBoard/>}/>
          <Route path="/team" element={<Users/>}/>
          <Route path="/trashed" element={<Trash/>}/>
          <Route path="/task/:id" element={<TaskDetails/>}/>
        </Route>


          <Route path="/login" element={<Login/>}/>
      </Routes>

      <Toaster richColors/>
    </main>
  )
}

export default App
