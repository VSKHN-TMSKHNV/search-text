function search(target){
    if ( target.value == '') return false;
    let content = document.querySelector('.content');

    let newContent = content.textContent.split(' ').map((item)=>{
        if ( item == target.value){
            return "<mark>"+target.value+"</mark>"
        }
        return item;
    }).join(' ');
    content.innerHTML = newContent;
}

function search2(target){
    let content = document.querySelector('.content');
    content.innerHTML = content.textContent.replace(new RegExp(target.value, "g"), `<mark>${target.value}</mark>`)
}