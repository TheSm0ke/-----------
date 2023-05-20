import { dataFromApi } from "../../data/data";
import "./post.css";

export interface PostProps {
  data: dataFromApi;
}

function Post({ data }: PostProps) {
  const circle: JSX.Element = (
    <svg
      className="post-autor-circle"
      width="3"
      height="4"
      viewBox="0 0 3 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="1.5" cy="2" r="1.5" fill="#D7D7D7" />
    </svg>
  );

  return (
    <div className="post">
      <div className="post-img">
        <img
          src={data.img}
          alt={data.title}
          srcSet={data.img_2x}
          width="360px"
          height="230px"
          loading="lazy" /* srcSet={`${data.img},${}`} */
        />
      </div>
      <div className="post-tags">
        <p>{data.tags}</p>
      </div>
      <div className="post-title">
        <p>{data.title}</p>
      </div>
      <div className="post-autor-date-views">
        {data.autor}
        {circle} {data.date} {circle} {data.views}
      </div>
      <div className="post-text">
        <p>{data.text}</p>
      </div>
    </div>
  );
}

export default Post;
