import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="section notfound">
      <h1>Nothing here</h1>
      <p>That page moved or never existed.</p>
      <Link className="btn" to="/">Go to the home page</Link>
    </section>
  );
}
