import { circle, dataFromApi } from "../../data/data";
import "./post.css";

export interface PostProps {
  data: dataFromApi;
  onOpenModal: (el: Boolean) => void;
  onContent: (el) => void;
}

const Post = ({ data, onOpenModal, onContent }: PostProps) => {
  const handleClick = () => {
    onContent(data);
    onOpenModal(true);
  };

  return (
    <div className="post" onClick={handleClick}>
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
};

export default Post;
