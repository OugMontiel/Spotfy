//  Agregaer  ... type='solid ... cuanod se selecciona una elemnento a este espacio  
import {css, html, LitElement} from 'lit';

export class s1a1 extends LitElement{
    constructor(){
        super();
    }
    static styles =css`
        :host{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            gap:.5em;
            padding-top:1em;
            padding-bottom:1em;
        }
        box-icon{
            width:5vw;
            height:5vh;
        }
    `;
    render(){
        return html`
        <box-icon type='logo' name='meta'></box-icon>
        <box-icon name='user-circle'></box-icon>
        `
    }
}

export class s1a2 extends LitElement{
    constructor(){
        super();
    }
    static styles =css`
        :host{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            gap:.5em;
            padding-top:1em;
            padding-bottom:1em;
        }
        box-icon{
            width:5vw;
            height:5vh;
        }
    `;
    render(){
        return html`
        <box-icon  name='compass'></box-icon>
        <box-icon  name='music'></box-icon>
        <box-icon  name='heart'></box-icon>
        <box-icon  name='book'></box-icon>
        `
    }
}

export class s1a3 extends LitElement{
    constructor(){
        super();
    }
    static styles =css`
        :host{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            gap:.5em;
            padding-top:1em;
            padding-bottom:1em;
        }
        box-icon{
            width:5vw;
            height:5vh;
        }
    `;
    render(){
        return html`
        <box-icon  name='cog'></box-icon>
        <box-icon name='upload' rotate='270' ></box-icon>`
    }
}