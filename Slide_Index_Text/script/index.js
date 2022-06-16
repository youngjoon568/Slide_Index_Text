const $btns = [...document.querySelectorAll(".gnb li")];
const $sections = [...document.querySelectorAll("section")];

function classHandle(e, listArr, listClass) {
    listArr.map(t => {
    	t.classList.remove(listClass);
    })
    e.classList.add(listClass);
}

for (let i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", (e) => {
        classHandle(e.currentTarget, $btns, "handle1");
        classHandle($sections[i], $sections, "handle2");
    })
}