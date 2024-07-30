import "@/styles/globals.css";
import ConteudoPrincipal from "../../Components/ConteudoPrincipal/ConteudoPrincipal";

export default function App({ Component, pageProps }) {
  
  return(
    <ConteudoPrincipal>
      <Component {...pageProps} />
    </ConteudoPrincipal>
  ) 
    
}
