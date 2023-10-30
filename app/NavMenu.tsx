import Link from "next/link";
import Image from "next/link";

export default function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
