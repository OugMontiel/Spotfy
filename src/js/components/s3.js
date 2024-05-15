import { html, css, LitElement } from "lit";

export class s3a1 extends LitElement {
    constructor() {
        super()
    }
    static styles = css`
        :host{
            display:flex;
            justify-content:center;
        }
        h3{
            margin:0;
        }
        `
    render() {
        return html`
        <h3>Now playing</h3>
        `
    }
}
export class s3a2 extends LitElement {
    constructor() {
        super()
    }
    static styles = css`
        h3, p,small{
            margin:0;
        }
        .one{
            display:flex;
            justify-content:center;
            align-items:center;
            align-content: space-around;
        }
        .one article{
            display:flex;
            flex-direction:column;
            width:80%;
        }
        .one div{
            display:flex;
            align-items:center;
            justify-content:space-between;
        }
        .one span{
            flex-grow:1;
            display:flex;
            flex-direction:column;
            align-items:center;
        }
        .two{
            display:flex;
            flex-direction:column;
            align-items: center;
        }
        .two span{
            width:100%;
            display:flex;
            justify-content: space-between;
        }
        .two div{
            display:flex;
            align-items: center;
            justify-content: center;            
            width:100%;
        }
        .two progress{
            flex-grow:1;
        }

    `
    render() {
        return html`
            <section class="one">
                <article>
                    <img src="/vite.svg" alt="vite">
                    <div>
                        <box-icon name='plus'></box-icon>
                        <span>
                            <h3>name</h3>
                            <p>autor</p>
                        </span>
                        <box-icon name='heart'></box-icon>
                    </div>
                </article>
            </section>
            <section class="two">
                <span>
                    <small>2:15</small>
                    <small>-5:21</small>
                </span>
                <div>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <box-icon name='shuffle'></box-icon>
                    <box-icon name='rewind'></box-icon>
                    <box-icon name='play-circle'></box-icon>
                    <box-icon name='fast-forward' ></box-icon>
                    <box-icon name='sync'></box-icon>
                </div>
                <div>
                    <box-icon name='volume-low'></box-icon>
                    <progress value="50" max="100"></progress>
                    <box-icon name='volume-full' ></box-icon>
                </div>
            </section>
        `
    }
}


