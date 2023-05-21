import { useEffect, useState } from "react";
import { urlForDataPosts, dataFromApi } from "../../data/data";
import Post from "../post/post";
import "./posts.css";

const Posts = () => {
  const [dataForPosts, setDataForPosts] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch(urlForDataPosts)
      .then((res) => res.json())
      .then((data: dataFromApi[]) => {
        const newData = data.map((el, index) => {
          return <Post data={el} key={index} />;
        });
        setDataForPosts(newData);
        console.log(newData);
      });
  }, []);
  return <div className="posts">{dataForPosts}</div>;
};

export default Posts;
