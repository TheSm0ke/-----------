import Post from "components/post/post";
import { dataFromApi } from "data/data";
import { useEffect, useState } from "react";

interface useDataFromJsonProps {
  urlForDataPosts: string;
  onOpenModal: (el) => void;
  onContent: (el) => void;
  filter?: string;
}

export const useDataFromJson = ({
  urlForDataPosts,
  onOpenModal,
  onContent,
  filter,
}: useDataFromJsonProps) => {
  const [newData, setNewData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch(urlForDataPosts)
      .then((res) => res.json())
      .then((data: dataFromApi[]) => {
        const newData = data.map((el, index) => {
          if (Number(filter?.length) > 0) {
            console.log(filter);
          }
          return (
            <Post data={el} key={index} onOpenModal={onOpenModal} onContent={onContent} />
          );
        });
        setNewData(newData);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [filter, onContent, onOpenModal, urlForDataPosts]);
  return newData;
};
