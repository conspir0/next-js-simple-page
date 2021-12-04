import Link from "next/link";

const Navbar = () => {
  return ( 
    <nav>
      <h1 className="logo">
        Users list
      </h1>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/users"><a>Users</a></Link>
    </nav>
   );
}
 
export default Navbar;