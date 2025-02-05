import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata={
  title:'The Wild Oasis'
}


export default function RootLayout({children}){
return <html >
<body>
  <header>
<Logo/>
<nav>

  <Navigation/>
</nav>
  </header>
  <main>
    {children}
  </main>
</body>
</html>
}