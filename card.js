class Card extends HTMLElement{
    
    static observedAttributes = ["footer", "holder","title","body"];

    constructor() {
        super();
      }

    get items(){    
          const stringlist = this.getAttribute("footer")
          //add if statement here and also check if its a valid string with ","
          const items = stringlist.split(",")        
          return items
      }

    get getheader(){

    const child = this.firstElementChild;

        if (child){

          return child.outerHTML;

        }
    
        return ``

    }

    

      connectedCallback() {

        //default state here
        const shadow = this.attachShadow({mode:"open"});

        const container = document.createElement("div")
        const header = document.createElement("div")
        const body = document.createElement("div")

        const body_title = document.createElement("div")

        const body_content = document.createElement("div")
        const body_footer = document.createElement("div")
        
        const footer_ul = document.createElement("ul")
     
        //default state ends here

        container.classList.add("container")
        header.classList.add("header")
        body.classList.add("body")

        //body children
        body_title.classList.add("title")
        body_content.classList.add("bodycontent")
        body_footer.classList.add("footer")

        //contents here
        header.innerHTML = this.getheader
        body_title.innerHTML = `<h3>${this.getAttribute("title")}<h3>`
        body_content.innerText = this.getAttribute("body")
        footer_ul.innerHTML = `${this.items.map(hello=>`<li>${hello}</li>`).join('')}`

        


        
     

        const style = document.createElement("style")
        style.textContent = `
          .holder{
             width:900px;
             height:400px;
             background-color: rgb(71, 71, 71); 
          
         }
         
         .container{
             background-color: rgb(227, 227, 227);
             display: flex;
             padding:1rem;
             border: solid;  
         }
         
         ul{
             list-style: none;
             display: flex;
             gap:0.5rem;
             padding-inline-start:0;
         }
         
         .header{
             display: block;
             width:30rem;
             font-size: 1.17em;
             /* height:40rem; */
             margin-right: 1.5rem;
         }
         h3{
             margin: 0;
         }
         .bodycontent{
             margin-top: .5rem;
         }
         li{
             border: solid 0.1rem;
             border-radius:9999px;
             padding-left: .75rem;
             padding-right: .75rem;
             padding-top: .25rem;
             padding-bottom: .25rem;
             font-weight: 500;
             font-size: .75rem;
         }
         img{
           object-fit: contain;
           width:10rem;
           
         }`
        

        container.appendChild(header)
        container.appendChild(body) 

        body.appendChild(body_title)
        body.appendChild(body_content)
        body.appendChild(body_footer)

        body_footer.appendChild(footer_ul)
 
        shadow.appendChild(style)
        shadow.appendChild(container)
        

      }
    
      disconnectedCallback() {
        console.log("Custom element removed from page.");
      }
    
      adoptedCallback() {
        console.log("Custom element moved to new page.");
      }
    
      attributeChangedCallback() {
        console.log("Custom element moved to new page.");
      }

}


customElements.define("card-element",Card)