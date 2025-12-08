const sections=[
    {
        title:"section  1", 
        content:"section 1 content displayed"
    },
        {
        title:"section 2", 
        content:"section 2 content displayed"
    },
        {
        title:"section 3", 
        content:"section 3 content displayed"
    }
]

document.addEventListener("DOMContentLoaded", function(){
    const accordianContainer = document.querySelector("#accordian")
     

    //render all sections
     sections.forEach((section)=>{
       const sectionItem= document.createElement("div")
       sectionItem.className="accordian-item"

       const sectionHeader= document.createElement("div")
       sectionHeader.classList.add("accordian-header")
       sectionHeader.textContent=section.title
    
       const sectionContent= document.createElement("div")
       sectionContent.classList.add("accordian-content")
       sectionContent.innerHTML=`<p>${section.content}</p>`


       sectionItem.appendChild(sectionHeader)
       sectionItem.appendChild(sectionContent)
       accordianContainer.appendChild(sectionItem)

        })

       accordianContainer.addEventListener("click", function(event){
            const header= event.target.closest(".accordian-header")
            console.log(header)
            if(!header) return ;

            const sectionItem= header.parentNode
            const content= sectionItem.querySelector(".accordian-content")
            if(!content) return;
            const isActive= sectionItem.classList.contains("active")

            document.querySelectorAll('.accordian-item').forEach((item)=>{
                item.classList.remove("active")
                item.querySelector(".accordian-content").style.display="none"
            })

            if(!isActive){
                sectionItem.classList.add("active")
                content.style.display="block"
            }
       })



})