import Navigation from "./_components/Navigation";

export default function RootLayout({children}){
  return <html>
    <body>
      <nav>
        <Navigation/>
      </nav>
      <main>
        {children}
      </main>
    </body>
  </html>
}