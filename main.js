let container = document.createElement("div");
container.className = "container";
document.body.append(container);

let box = document.createElement("div");
box.className = "box";
container.append(box);

let inp = document.createElement("input");
inp.type = "text";
inp.placeholder = "اكتب المهام الجديده هنا ...";
box.append(inp);
inp.after(document.createElement("hr"));

let button = document.createElement("button");
button.className = "add";
button.innerText = "اضافة مهمه جديده"
box.append(button);

let boxTasks = document.createElement("div");
boxTasks.className = "box-tasks";
box.append(boxTasks);


inp.addEventListener("focus", function () {
    inp.placeholder = "";
});
inp.addEventListener("blur", function () {
    inp.placeholder = "اكتب المهام الجديده هنا ...";
});

button.addEventListener("click", function (e) {
    if (inp.value.trim() === "") {
        e.preventDefault();
        return;
    }
    let task = document.createElement("div");
    task.className = "task";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    let inpValue = inp.value;
    let delIcon = document.createElement("i");
    delIcon.className = "fa-solid fa-trash";
    task.innerText = inpValue;
    task.append(delIcon);
    task.prepend(checkBox); 
    boxTasks.append(task);
    
    checkBox.addEventListener("change", function () {
        if(checkBox.checked) {
            task.style.cssText = "text-decoration: line-through"
            console.log(`ali`);
        }else {
            task.style.cssText = "text-decoration: none"
        }
    });

    delIcon.addEventListener("click", function () {
        task.remove();
    });

    inp.value = "";
});
