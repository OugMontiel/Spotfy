import {css, html, LitElement} from 'lit';

export class one extends LitElement{
    constructor(){
        super()
    }
    static styles = css`
        :host{
            display:grid;
            grid-template-columns:1fr 1fr;

            max-height:35vh;

            overflow:auto;
            overflow-y:auto;
        }
        h5, h6{
            margin:0;
        }
        div{
            position: relative;
            width: 100%;
            padding-bottom: 100%; /* Establece la altura en relación al ancho para que sea cuadrado */
            overflow: hidden;
        }
        div img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ajusta la imagen para que ocupe todo el espacio sin distorsionarse */
        }
    `
    render(){
        return html`
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
            <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <h5> Name </h5>
            <h6> Autor, fecha</h6>
            </article>
        `
    }
}
export class two extends LitElement{
    constructor(){
        super()
    }
    static styles =css`
        :host{
            display:flex;
            flex-direction:column;
            
            max-height:35vh;
            
            overflow:auto;
            overflow-y:auto;
        }
        article{
            display:flex;
            justify-content: space-between;
        }
        h5, h6{
            margin:0;
        }
        span {
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: flex-end;
        }
    `
    render(){
        return html`
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        <article>
            <div> <img src="/vite.svg" alt="vite"></div>
            <div> 
                <h5>Name</h5>
                <h6>autor, album</h6>
            </div>
            <span> 
                <h5>10:10</h5>
                <h6>2010</h6>
            </span>
        </article>
        `
    }
}