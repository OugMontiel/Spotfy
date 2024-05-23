// import "./components/prueva.js"
import {
    one,
    two
} from "./components/consultas.js"
import {
    s2a2,
    s2a3
} from "./components/s2.js"
import {
    s1a1,
    s1a2,
    s1a3
} from "./components/s1.js"
import {
    s4a1,
    s4a2
} from "./components/s4.js"
import {
    s3a1,
    s3a2
} from "./components/s3.js"

customElements.define("s1-a1", s1a1)
customElements.define("s1-a2", s1a2)
customElements.define("s1-a3", s1a3)

customElements.define("s2-a2", s2a2)
customElements.define("s2-a3", s2a3)

customElements.define("s4-a1", s4a1)
customElements.define("s4-a2", s4a2)

customElements.define("s3-a1", s3a1)
customElements.define("s3-a2", s3a2)

customElements.define("consulta-one", one)
customElements.define("consulta-two", two)