let pass=document.querySelector(".pass")
let passspan=document.querySelector(".pass span")
let container=document.querySelector(".container")
let body=document.querySelector("body")





let tasks=document.querySelector("#tasks")

pass.addEventListener("click",()=>{
    pass.classList.toggle("on")
    passspan.classList.toggle("left")
   // container.classList.toggle("dark-theme")
    body.classList.toggle("dark-theme")
    
    if(localStorage.getItem("theme") =="light"){
        localStorage.setItem("theme","dark" )
    }
    else{
        localStorage.setItem("theme","light" )
    }
})
let addinput=document.querySelector(".add input")
let addbutton=document.querySelector(".add .button")
let lists=document.querySelector(".lists")




if(localStorage.getItem("theme")== "light" ){
    pass.classList.remove("on")
    passspan.classList.remove("left")
   // container.classList.toggle("dark-theme")
    body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme")== "dark" ){
    pass.classList.toggle("on")
    passspan.classList.toggle("left")
   // container.classList.toggle("dark-theme")
    body.classList.toggle("dark-theme")
}

else{
   localStorage.setItem("theme","light")
    
}




let va=[]
if(localStorage.getItem("array")===null){
    console.log("hello")
    //localStorage.setItem("array",va)
}
else{
let ss=localStorage.getItem("array")
let arr=Array.from(ss)
let ja=arr.join("")
let jat=ja.split(",")

for(let i=0;i<jat.length;i++){
    let list=document.createElement("div")
    list.className="list"
    list.id="li"
    let lspan=document.createElement("span")
    lspan.textContent=jat[i]
    let li=document.createElement("i")
    li.className="fa-solid fa-x"
    list.appendChild(lspan)
    list.appendChild(li)
    lists.appendChild(list)
 
}
remove()


removeall()
let taskbutton=document.querySelector(".tasks .button")
taskbutton.addEventListener("click",()=>{
    localStorage.clear()
})
}
  



function add(){
    
    if( addinput.value.trim()===""){
       alert("Please enter a task")
    }
    else{
        let list=document.createElement("div")
        list.className="list"
        list.id="li"
        let lspan=document.createElement("span")
        lspan.textContent=addinput.value.toLowerCase()
        let li=document.createElement("i")
        li.className="fa-solid fa-x"
        list.appendChild(lspan)
        list.appendChild(li)
        lists.appendChild(list)
    }
    //addinput.value=""
    va.push( addinput.value.split(","))
    console.log(va[2])
    addinput.value=""
    
    
}
function remove(){
    let list=document.getElementById("li")
    let list_i=document.querySelectorAll(".list i")
    console.log(list_i)
        list_i.forEach((lis)=>{
            lis.addEventListener("click",()=>{
                lis.parentElement.remove()
            })
          
        })
}
function removeall(){
    let listsbtn=document.querySelector(".tasks .button")
    let lists=document.querySelector(".lists")
    listsbtn.addEventListener("click",()=>{
        lists.textContent=""
    })
   

}
function all(){    
    add()
    remove()
    removeall() 
    localStorage.setItem("array",va)
}
//localStorage.getItem("array")


addbutton.addEventListener("click",all)
