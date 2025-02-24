import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
        className="rounded-xl m-5"
        width="942"
        height="530"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="ZUDIO LATEST COLLECTION 2025 | ZUDIO SHOPPING | ZUDIO HAUL |"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
