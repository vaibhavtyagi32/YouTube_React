import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

const Body = () => {
  return (
    <div className="flex gap-3">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body