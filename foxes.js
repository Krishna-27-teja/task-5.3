let wrapper=document.getElementById("btn");
let button=document.createElement('button');
button.innerText="Click";
wrapper.appendChild(button);
button.addEventListener('click',function(){
    fetch("https://randomfox.ca/floof/")
    .then((rr)=>{
        return rr.json();
    }).then((ttt)=>{
        let img_element=document.getElementById('image');
        let img=document.createElement('img');
        img.src=ttt.image;
        img_element.appendChild(img);
    })
    .catch((err)=>{
        console.log(err);
    })

})