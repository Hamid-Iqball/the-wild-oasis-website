import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  console.log("heu")
  const session = await auth()
  console.log(session)
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>

       {session?.user?.image?( <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex gap-3 items-center justify-center"
          >
            

            <img src={session.user.image} className="h-10 rounded-full" alt={session.user.name} referrerPolicy="no-referrer"/>
            <span>Guest area</span>
    
          </Link>
        </li>):( <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>)}
      </ul>
    </nav>
  );
}
