export {sceneFunction,end}
let name =localStorage.getItem("NameExpectator")
let body=document.body
let titleOS=document.querySelector(".TitleOS")
let primaryCont=document.querySelector(".primaryCont")
function MyPerfil() {
    
}
function end() {
    const container=document.createElement("container")
    container.setAttribute("class","scene end")
    const title=document.createElement("h2")
    title.classList.add("endTitle")
    title.textContent="Muchas gracias por leer "+localStorage.getItem("NameExpectator")
    const main=document.createElement("submain")
    main.classList.add("submain")
    main.textContent="Dicho esto, quiero decir que esta web fue diseñada como algo especial para mi novia, ella es una chica muy especial para mi, si lees esto amor, sabes cuanto te aprecio. gracias por su atencion brindada, un fuerte abrazo "
    const ancla=document.createElement("a")
    ancla.textContent="Josue"
    ancla.addEventListener("click",MyPerfil())
    main.insertAdjacentElement("beforeend",ancla)
    const btnback=document.createElement("back")
    btnback.classList.add("back")
    btnback.textContent="Regresar"
    btnback.addEventListener("click",()=>{
        setTimeout(() => {
            titleOS.style.setProperty("top","5%")
        }, 500);
        container.style.setProperty("left","-100%")
        primaryCont.style.setProperty("display","inline-flex")
        setTimeout(() => {
        primaryCont.style.setProperty("bottom","10%")
        }, 400);
        setTimeout(() => {
            body.removeChild(container)
        }, 800);
        if (window.innerWidth<=425) {
            socials.style.setProperty("top","-30%")
            setTimeout(() => {
                body.removeChild(socials)
            }, 500);
        }
    })
    const ancla1=document.createElement("a")
    ancla1.classList.add("discord")
    ancla1.insertAdjacentHTML("beforeend", '<i class="fa-brands fa-discord"></i>')
    ancla1.setAttribute("href","http://discordapp.com/users/564970023479934977")
    ancla1.setAttribute("target","blank_")
    const ancla2=document.createElement("a")
    ancla2.classList.add("linkedin")
    ancla2.insertAdjacentHTML("beforeend", '<i class="fa-brands fa-linkedin"></i>')
    ancla2.setAttribute("href","https://www.linkedin.com/in/JosueMorales-js")
    ancla2.setAttribute("target","blank_")
    const ancla3=document.createElement("a")
    ancla3.classList.add("instagram")
    ancla3.insertAdjacentHTML("beforeend", '<i class="fa-brands fa-square-instagram"></i>')
    ancla3.setAttribute("href","https://www.instagram.com/sirius.js/")
    ancla3.setAttribute("target","blank_")
    const ancla4=document.createElement("a")
    ancla4.classList.add("spotify")
    ancla4.insertAdjacentHTML("beforeend", '<i class="fa-brands fa-spotify"></i>')
    ancla4.setAttribute("href","https://open.spotify.com/user/317pxe6z4hlft543g3lwpxkbiaga")
    ancla4.setAttribute("target","blank_")
    const socials=document.createElement("aside")
    socials.classList.add("socials")
    socials.insertAdjacentElement("beforeend", ancla4)
    socials.insertAdjacentElement("beforeend", ancla3)
    socials.insertAdjacentElement("beforeend", ancla2)
    socials.insertAdjacentElement("beforeend", ancla1)

    container.insertAdjacentElement("beforeend", title)
    container.insertAdjacentElement("beforeend", main)
    container.insertAdjacentElement("beforeend",btnback)
    if (window.innerWidth<=425) {
        body.insertAdjacentElement("beforeend",socials)
        socials.style.setProperty("top","-10%")
        setTimeout(() => {
            socials.style.setProperty("top","0%")
        }, 1300);
    }else{container.insertAdjacentElement("beforeend",socials)}
    body.insertAdjacentElement("beforeend",container)
    //animation 
    container.style.setProperty("bottom","-100%")
    setTimeout(()=>{
        container.style.setProperty("left","3%")
        container.style.setProperty("bottom","5%")
    },1000)
    
}
function sceneAnimation(element) {
    element.style.setProperty("bottom","-100%")
    setTimeout(()=>{
        element.style.setProperty("left","3%")
        element.style.setProperty("bottom","5%")
    },1000)
    setTimeout(()=>{
        element.style.setProperty("left","100%")
    },10000)
    setTimeout(() => {
        body.removeChild(element)
    }, 10800);
}
function sceneNormal(ExName) {
    const container=document.createElement("container")
    container.setAttribute("class","scene SNormal")
    container.textContent=ExName+" Normal"
    body.insertAdjacentElement("beforeend",container)
    sceneAnimation(container)
}
function sceneInteractive(ExName) {
    const container=document.createElement("container")
    container.setAttribute("class","scene SInteractive")
    container.textContent=ExName+" Interactive"
    body.insertAdjacentElement("beforeend",container)
    sceneAnimation(container)
}

function finalScene(ExName) {
    const container=document.createElement("container")
    container.setAttribute("class","scene SFinal")
    container.textContent=ExName+" final"
    body.insertAdjacentElement("beforeend",container)
    sceneAnimation(container)
    
}


function guide(caller,id) {
          if (caller==1) {
        sceneNormal(name)
    }else if (caller==2) {
        sceneNormal(name)
    }else if (caller==3) {
        sceneNormal(name)
    }else if (caller==4) {
        sceneInteractive(name)
    }else if (caller==4) {
        sceneNormal(name)
    }else if (caller==5) {
        sceneInteractive(name)
    }else if (caller==6) {
        sceneNormal(name)
    }else if (caller==7) {
        sceneNormal(name)
    }else if (caller==8) {
        sceneInteractive(name)
    }else if (caller==9) {
        sceneNormal(name)
    }else if (caller==10) {
         sceneNormal(name)
    }else if (caller==11) {
        finalScene(name)
    }else if (caller==12) {
        end()
        clearInterval(id)
        
    }
}

function sceneFunction() {
    guide(1)
    let caller=1
    let idk =setInterval(() => {
        caller++
        guide(caller,idk)
    }, 9300);
}