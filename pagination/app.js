document.addEventListener("DOMContentLoaded", function(){
    const app= document.querySelector(".app")
    let products=[]
    let page=1


    const fetchProducts= async()=>{
        try{
          const res= await fetch("https://dummyjson.com/products?limit=100")
          const data= await res.json()
          if(data && data.products){
            products=data.products
            console.log(products)
            render()
          }
        }
        catch(err){
           console.log(err) 
        }

    }

    const render=()=>{
        const productContainer= document.createElement("div");
        productContainer.classList.add("products")

        const pagination =document.createElement("div")
        pagination.classList.add("pagination")
        if(products.length>0){
            products.slice(page*10-10, page*10).forEach((prod)=>{
                const productElememt=document.createElement("div")
                productElememt.classList.add("product__single")
                productElememt.innerHTML=`
                <img src="${prod.thumbnail}" alt="${prod.title}"/>
                <span>${prod.title}</span>
                `
                productContainer.appendChild(productElememt)
            })



            // previous button
            if(page>1){
                const prevButton= createPaginationButton("🔙", ()=>{
                    selectPageHandler(page-1)
                })
                pagination.appendChild(prevButton)
            }


            // display numbers in between 
            for (let i=0;i<products.length/10;i++){
                  const pageButton= createPaginationButton(i+1, ()=>{
                    selectPageHandler(i+1)
                }, page===i+1)
                pagination.appendChild(pageButton)
            }


            // next page
             if(page<products.length/10){
                const nextButton= createPaginationButton("⏭️", ()=>{
                    selectPageHandler(page+1)
                })
                pagination.appendChild(nextButton)
            }
        }
        app.innerHTML=""
        app.appendChild(productContainer)
        app.appendChild(pagination)

    }

     const createPaginationButton=(text, clickHandler, isSelelcted=false)=>{
        const button= document.createElement("button")
        button.textContent=text
        button.addEventListener("click", clickHandler)
        if(isSelelcted){
            button.classList.add("pagination_selected")
        }
        return button 
     }
     const selectPageHandler=(selectedPage)=>{
        if(selectedPage>=1 && selectedPage<=products.length/10 && selectedPage!==page){
            page=selectedPage
            render()
        }
     }


    fetchProducts()
})