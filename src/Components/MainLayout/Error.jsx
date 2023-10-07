import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
        <div className="card">
        <h1>OPS!!!There has no content</h1>
        <Link to='/'>Go Back</Link>
        </div>

        </div>
    );
};

export default Error;