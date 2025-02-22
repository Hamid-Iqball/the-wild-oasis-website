import { auth } from "../_lib/auth"

export const metadata = {
  title:"Account"
}
export default async function page() {
  const session = await auth()
  const firstName = session.user.name.split(" ")
  return (
    <div>
        <h2 className="font-semibold text-2xl text-accent-400 mb-4">
      Welcome {firstName.at(0)}
      </h2>
    </div>
  )
}
