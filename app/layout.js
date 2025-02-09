import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css"

export const metadata = {
 title:{
  template:"%s / The Wild Oasis",
  default:"Welcome / The Wild Oasis"
 },
 description:"Luxurious cabin hotel, located in the heart of the Italian Dolomities surrounded by the beautiful mountains and dark forests",

}
export default function RootLayout({children}){
  return <html>
    <body className="bg-primary-950 text-primary-100 min-h-screen">
      <header>
        <Logo/>
        <Navigation/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        Copyright by the wild oasis
      </footer>
    </body>
  </html>
}