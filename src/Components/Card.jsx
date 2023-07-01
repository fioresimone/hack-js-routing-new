import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Card({ post }) {
  return (
    <div className="col-12 col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <div className="card-text">{post.body}</div>
          <Link to={`/details/${post.id}`}>Go to details</Link>
        </div>
      </div>
    </div>
  );
}
