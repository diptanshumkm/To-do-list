const inputBox = document.querySelector("[input-box]");
const listItems = document.querySelector("[list-items]");


function addTask(){
    if (inputBox.value === "") {
        alert("Kindly enter the task!")
    }

    else{
        let newElem = document.createElement("div")
        newElem.innerHTML = `<input type="checkbox"> ${inputBox.value} <i class="fa-solid fa-trash"></i>`
        listItems.appendChild(newElem);

        inputBox.value = "";

        let bin = newElem.querySelector("i")
        bin.style.cursor = "pointer"
        bin.addEventListener("click", () => {
            newElem.remove()
        })

        let check = newElem.querySelector("input")
        check.addEventListener("click", (event) => {
            console.log(event);
            if (newElem.style.textDecoration !== 'line-through') {
                newElem.style.textDecoration = 'line-through';
            }
            else{
                newElem.style.textDecoration = 'none'
            }
            
        })
    }
}
