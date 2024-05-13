import{
    s2a2,
    s2a3
}from"./components/s2.js"
import {
    s1a1,
    s1a2,
    s1a3
} from "./components/s1.js"
import { playingNext } from "./components/playing_next"


customElements.define("s1-a1", s1a1 )
customElements.define("s1-a2", s1a2 )
customElements.define("s1-a3", s1a3 )

customElements.define("s2-a2",s2a2)
customElements.define("s2-a3",s2a3)

customElements.define("playing-next",playingNext)