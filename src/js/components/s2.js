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
        h5{
            margin: 0;
        }
        consulta-one{
            max-height:35vh;
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
        <consulta-one></consulta-one>
        `
    }
}
export class s2a3 extends LitElement {
    constructor(){
        super()
    }
    static styles = css`
        h5{
            margin: 0;
        }
        consulta-two{
            max-height:35vh;
        }
    `
    render(){
        return html`
        <h5>You may like</h5>
        <consulta-two></consulta-two>
        `
    }
}