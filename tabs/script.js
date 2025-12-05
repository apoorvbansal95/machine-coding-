const tabData=[
    {
        id:1, 
        title:"Tab 1", 
        content:"Tab 1 content displayed"
    },
        {
        id:2, 
        title:"Tab 2", 
        content:"Tab 2 content displayed"
    },
        {
        id:3, 
        title:"Tab 3", 
        content:"Tab 3 content displayed"
    }
]


document.addEventListener("DOMContentLoaded", function(){
    let activeTab= tabData[0].id

    function render(){
        const tabcontainer= document.querySelector("#tabContainer")
        const contentContainer= document.querySelector("#tabContent")

        tabData.forEach((tab)=>{
            const tabButton= document.createElement("button")
            tabButton.className="tablink"
            tabButton.textContent=tab.title
            tabButton.setAttribute("data-id", tab.id)
            tabcontainer.appendChild(tabButton)


            const tabContent= document.createElement("div")
            tabContent.className="tabtext"
            tabContent.id=tab.id
            tabContent.innerHTML=`<h3>${tab.title}</h3> <p>${tab.content}</p>`
            contentContainer.appendChild(tabContent)

        })

        tabcontainer.addEventListener("click", function(event){
            if(event.target.matches(".tablink")){
                const tabid=event.target.getAttribute("data-id")
            
            if(tabid!==activeTab){
                opentab(tabid);
                activeTab=tabid
            }}
        })
    }


    function opentab(tabid){
        const tabcontents= document.querySelectorAll(".tabtext")
        const tabLinks= document.querySelectorAll(".tablink")

        tabcontents.forEach((tab)=>tab.classList.remove("active"))
        tabLinks.forEach((tab)=>tab.classList.remove("active"))

        document.getElementById(tabid).classList.add("active")
        document.querySelector(`button[data-id]=${tabid}`).classList.add("active")

    }
    render()
})