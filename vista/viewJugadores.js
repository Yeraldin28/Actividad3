const jugadoresViewList = (resp) =>{
    let listado = document.getElementById("listJugadores");
    const fragment = new DocumentFragment();
    const tem = document.getElementById("templateList").content;
    //console.log(tem);  
    resp.forEach(element => {
        tem.querySelector("li").textContent = element;
        const miElemento = tem.cloneNode(true); 
        fragment.appendChild(miElemento);
    });  
    listado.appendChild(fragment);
}


export{ jugadoresViewList};