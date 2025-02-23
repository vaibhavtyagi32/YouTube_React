import { useSelector } from "react-redux"

const SideBar = () => {
    const isOpenMenu=useSelector(store=> store.app.isOpenMenu);
    if(isOpenMenu==false){
        return null;
    }
  return (
    <div className="w-[200px] shadow-lg p-4">
        <ul className="p-2">
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <hr />
        <ul className="p-2">
            <li>History</li>
            <li>Playlists</li>
            <li>Your Videos</li>
            <li>Your Course</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
            <li>Your Clips</li>
        </ul>
        <hr />
        <h3 className="font-bold">Subscriptions</h3>
        <ul className="p-2">
            <li>Akshay Saini</li>
            <li>OnlineStudy4U</li>
            <li>Gabru Style</li>
            <li>Sheriyans Coding School</li>
            <li>KN ACADEMY</li>
        </ul>
    </div>
  )
}

export default SideBar