import { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";

export default function Details() {
  const { post, comments } = useLoaderData();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/">Back</Link>
        </div>
      </div>
      <div className="row">
        {
          <div className="col-12">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        }
        <Suspense fallback={<p>Loading comments...</p>}>
          <div className="col-12">
            <Await resolve={comments}>
              {(comments) =>
                comments.map((el) => <li key={el.id}>{el.body}</li>)
              }
            </Await>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export const loadAll = async ({ params }) => {
  const post = await getPost(params.id);
  const comments = getComments(params.id);

  return defer({ post, comments });
};

export const getPost = async (id) => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (r) => r.json(),
  );
};

export const getComments = async (id) => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  ).then((r) => r.json());
};
