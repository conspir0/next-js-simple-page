import Link from "next/link";

const NotFound = () => {
  return ( 
    <section className="not-found">
      <h1>
        Oooooops...
      </h1>
      <h2>
        That page cannot be found.
      </h2>
      <p>
        Go back to the <Link href="/"><a>Home</a></Link>
      </p>
    </section>
   );
}
 
export default NotFound;