import { useEffect, useState } from "react";
import useCollection from "./useCollection";

export default function useNounList() {
  const [list, setList] = useState([]);
  const collection = useCollection({
    db: "XDX",
    collection: "random",
  });
  useEffect(() => {
    if (collection) {
      collection.find().then((list) => setList(list));
    }
  }, [collection]);
  return list;
}
