import { useContext } from "react";
import TitleContext from "../hooks/useTitle";

export default function Home() {
  const { updateTitle } = useContext(TitleContext);

  updateTitle("About");

  return <h1>You are on the about page</h1>;
}
