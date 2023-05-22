import Post from "components/post/post";
import { dataFromApi } from "data/data";
import { useEffect, useState } from "react";

interface useDataFromJsonProps {
  urlForDataPosts: string;
  onOpenModal: (el) => void;
  onContent: (el) => void;
}

export const useDataFromJson = ({
  urlForDataPosts,
  onOpenModal,
  onContent,
}: useDataFromJsonProps) => {
  const [newData, setNewData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch(urlForDataPosts)
      .then((res) => res.json())
      .then((data: dataFromApi[]) => {
        const newData = data.map((el, index) => {
          return (
            <Post data={el} key={index} onOpenModal={onOpenModal} onContent={onContent} />
          );
        });
        setNewData(newData);
      });
  }, [onContent, onOpenModal, urlForDataPosts]);
  return newData;
};
