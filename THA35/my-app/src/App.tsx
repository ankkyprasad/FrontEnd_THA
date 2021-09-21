import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { User, updateUser } from "./actions/index";

export interface PostType {
  username: string;
  post: string;
}

function App() {
  const user = useSelector((state: any) => state.user);
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
    fetch("/data/post.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Landing posts={posts} />
    </div>
  );
}

export default App;
