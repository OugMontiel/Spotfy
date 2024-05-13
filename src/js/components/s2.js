import { html,css, LitElement } from "lit";

export class s2a2 extends LitElement {
    constructor(){
        super()
    }
    static styles=css`

        div{
            display:flex;
            justify-content:space-between;
        }
    `
    render(){
        return html`
        <div>
            <h5>Top-chart</h5>
            <select name="tiemops" id="tiempos">
                <option value=""> day </option>
                <option value=""> Week </option>
                <option value=""> Monts </option>
                <option value=""> Years </option>
            </select>
        </div>
        
        `
    }
}
export class s2a3 extends LitElement {
    constructor(){
        super()
    }
    render(){
        return html`
        <h5>You may like</h5>
        `
    }
}