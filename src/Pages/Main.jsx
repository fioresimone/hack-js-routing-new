import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

export default function Main() {
  const data = useLoaderData();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Main</h1>
        </div>
      </div>

      <div className="row">
        {data.map((el) => (
          <Card key={el.id} post={el} />
        ))}
      </div>
    </div>
  );
}

export async function loadPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (r) => r.json(),
  );

  return data;
}
