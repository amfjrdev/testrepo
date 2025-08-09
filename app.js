// declaration
let myInput=document.getElementById("myInput")
let myAddButton=document.getElementById("myBtn")
let myList=document.getElementById("myList")
let myEroorText=document.getElementById("textError")

// add button click
myAddButton.addEventListener("click",()=>{
    // get the value from the user
    inputValue=document.getElementById("myInput").value
    if(inputValue!=""){
        myEroorText.classList.add("hide")
        myEroorText.classList.remove("play")
        myInput.classList.remove("outline")
        // create div adn adding styles
        let taskBare=document.createElement("div")
        taskBare.classList.add("taskBare")

        // create li and adding styles
        let myLi=document.createElement("li")
        myLi.classList.add("myLi")
        myLi.textContent=inputValue

        // create btns div
        let btns=document.createElement("div")
        btns.classList.add("btns")

        // create buttons
        // create dlt button
        let dltBtn=document.createElement("button")
        dltBtn.innerText="Delete"
        dltBtn.classList.add("dltBtn")

        // create upd button
        let updBtn=document.createElement("button")
        updBtn.innerText="Update"
        updBtn.classList.add("updBtn")

        // create chk button
        let chkBtn=document.createElement("button")
        chkBtn.innerText="Check"
        chkBtn.classList.add("chkBtn")



        // link parents with child
        // 1 link buttons with btns div
        btns.appendChild(dltBtn)
        btns.appendChild(updBtn)
        btns.appendChild(chkBtn)

        // 2 link li and btns div with taskBare div
        taskBare.appendChild(myLi)
        taskBare.appendChild(btns)

        // 3 link taskBare div with his parent
        myList.appendChild(taskBare)

        // new task
        myInput.value=""

    }
    else{
        myEroorText.classList.add("play")
        myEroorText.classList.remove("hide")
        myInput.classList.add("outline")
    }

   

})

 myList.addEventListener("click",(event)=>{
        if(event.target.classList.contains("dltBtn")){
            event.target.parentElement.parentElement.remove()
        }
        if(event.target.classList.contains("updBtn")){
            let newValue=prompt("update your task")
            if(newValue !=null && newValue !=""){
                myEroorText.classList.add("hide")
                myEroorText.classList.remove("play")
                myInput.classList.remove("outline")
                let myLi=event.target.parentElement.parentElement.querySelector(".myLi")
                myLi.innerText=newValue
        }
        else{
            myEroorText.classList.add("play")
            myEroorText.classList.remove("hide")
            myInput.classList.add("outline")
        }
    }
        if(event.target.classList.contains("chkBtn")){
            if(event.target.innerHTML=="Check"){
                event.target.parentElement.parentElement.classList.add("greenCheck")
                event.target.innerHTML="notYet"
            }
            else{
                event.target.parentElement.parentElement.classList.remove("greenCheck")
                event.target.innerHTML="Check"
            }
        }

    
    })