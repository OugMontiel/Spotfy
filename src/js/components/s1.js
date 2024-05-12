import {css, html, LitElement} from 'lit';

export class s1a1 extends LitElement{
    constructor(){
        super();
    }
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
    render(){
        return html`
        <box-icon type='solid' name='compass'></box-icon>
        <box-icon type='solid' name='music'></box-icon>
        <box-icon type='solid' name='heart'></box-icon>
        <box-icon type='solid' name='book'></box-icon>
        `
    }
}

export class s1a3 extends LitElement{
    constructor(){
        super();
    }
    render(){
        return html`
        <box-icon type='solid' name='cog'></box-icon>
        <box-icon name='upload' rotate='270' ></box-icon>`
    }
}