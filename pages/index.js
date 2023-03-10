import { useContext } from "react";
import TitleContext from "../hooks/useTitle";

export default function Home() {
  const { updateTitle } = useContext(TitleContext);

  updateTitle("Home");

  return <h1>You are on the homepage</h1>;
}
