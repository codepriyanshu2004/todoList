let inputs =document.getElementById("inp");
let text = document.querySelector(".text");

let btn = document.getElementById("btt")
btn.addEventListener("click",Add)



function Add(){

    if(inputs.value==""){
        alert("Enter the Task")
    }else {
        let newEle = document.createElement("ul")
        newEle.innerHTML =`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        console.log(newEle)
        text.appendChild(newEle)
        inputs.value =""

        
        newEle.querySelector("i").addEventListener("click",remove);

        function remove(){
            newEle.remove()
        }
    }
}