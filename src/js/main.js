import {
    s1a1,
    s1a2,
    s1a3
} from "./components/s1.js"
import { playingNext } from "./components/playing_next"


customElements.define("s1-a1", s1a1 )
customElements.define("s1-a2", s1a2 )
customElements.define("s1-a3", s1a3 )

customElements.define("playing-next",playingNext)