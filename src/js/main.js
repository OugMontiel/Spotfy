import{
    s2a2,
    s2a3
}from"./components/s2.js"
import{
    s1a1,
    s1a2,
    s1a3
} from "./components/s1.js"
// import{ 
//     s4s2
// } from "./components/s4.js"
import{
    one,
    two
}from "./components/consultas.js"

customElements.define("s1-a1", s1a1 )
customElements.define("s1-a2", s1a2 )
customElements.define("s1-a3", s1a3 )

customElements.define("s2-a2",s2a2)
customElements.define("s2-a3",s2a3)

// customElements.define("s4-a2",s4s2)

customElements.define("consulta-one",one)
customElements.define("consulta-two",two)