import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/info">Info</Link>
        </div>
      </div>
    </div>
  );
}
