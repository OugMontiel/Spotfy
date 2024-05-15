import { html,css, LitElement } from "lit";

export class s4a1 extends LitElement{
    constructor(){
        super()
    }
    static styles =css`
        h1{
            margin:0;
        }
    `
    render(){
        return html`
        <h1>Track list</h1>
        <div>
        <box-icon name='shuffle'></box-icon>
        <box-icon name='sync'></box-icon>
        </div>
        `
    }
}
export class s4a2 extends LitElement{
    constructor(){
        super()
    }
    static styles =css`
        h5{
            margin:0;
        }
        consulta-two{
            max-height:80vh;
        }
    `
    render(){
        return html`
        <h5>playing next</h5>
        <consulta-two></consulta-two>
        `
    }
}


