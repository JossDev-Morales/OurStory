let dayOption=document.querySelector(".day")
let nightOption=document.querySelector(".night")
let btnStart=document.querySelector(".start")
let startT=document.querySelector("#StartText")
let PClabel=document.querySelector("#PClabel")
let PCtext=document.querySelector(".textPC")
let titleOS=document.querySelector(".TitleOS")
let primaryCont=document.querySelector(".primaryCont")
let root =document.querySelector("body")
let nameExp=document.querySelector("#Expectator")
let SaveExp=document.querySelector(".SaveExp")
let width=window.innerWidth
let body=document.body
//icons
let Ierror="fa-solid fa-circle-exclamation"
//require
import { sceneFunction,end } from "./slider.js"
if (localStorage.getItem("NameExpectator")!=undefined) {
    nameExp.value=localStorage.getItem("NameExpectator")
}
if (localStorage.getItem("mode")==undefined) {
    changeColors(false)
    let css=document.getElementById("animateBg")
    root.insertAdjacentHTML("afterbegin",`<div class="container">
        <div class="bubbles">
            <span style="--i:11"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:12"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:24"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:10"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:14"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:23"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:18"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:16"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:19"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:20"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:22"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:25"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:18"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:21"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:15"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:13"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:26"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:17"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:13"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:28"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:27"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:15"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:14"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:23"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:11"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:12"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:24"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:12"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:24"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
        </div>
    </div>`)
    css.setAttribute("href","/sources/backgroundfiles/bg-sakura.css")
}else{
    if (localStorage.getItem("mode")=="DayMode") {
        changeColors(false)
        let css=document.getElementById("animateBg")
        root.insertAdjacentHTML("afterbegin",`<div class="container">
            <div class="bubbles">
                <span style="--i:11"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
                <span style="--i:12"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
                <span style="--i:24"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
                <span style="--i:10"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
                <span style="--i:14"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
                <span style="--i:23"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
                <span style="--i:18"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
                <span style="--i:16"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:19"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:20"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:22"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:25"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:18"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:21"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:15"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:13"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:26"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
                <span style="--i:17"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:13"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:28"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:27"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:15"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:14"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:23"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:11"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:12"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:24"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:12"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
                <span style="--i:24"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            </div>
        </div>`)
        css.setAttribute("href","/sources/backgroundfiles/bg-sakura.css")
    }else if (localStorage.getItem("mode")=="NightMode") {
        changeColors(true)
        nightOption.style.setProperty("background","white")
        dayOption.style.setProperty("background","var(--maincolor)")
        let css=document.getElementById("animateBg")
        root.insertAdjacentHTML("afterbegin",`<div class="container">
    <div class="bubbles">
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:24"></span>
        <span style="--i:10"></span>
        <span style="--i:14"></span>
        <span style="--i:23"></span>
        <span style="--i:18"></span>
        <span style="--i:16"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
        <span style="--i:22"></span>
        <span style="--i:25"></span>
        <span style="--i:18"></span>
        <span style="--i:21"></span>
        <span style="--i:15"></span>
        <span style="--i:13"></span>
        <span style="--i:26"></span>
        <span style="--i:17"></span>
        <span style="--i:13"></span>
        <span style="--i:28"></span>
        <span style="--i:27"></span>
        <span style="--i:15"></span>
        <span style="--i:14"></span>
        <span style="--i:23"></span>
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:24"></span>
        <span style="--i:12"></span>
        <span style="--i:24"></span>
    </div>
</div>`)
    css.setAttribute("href","/sources/backgroundfiles/bg-particulas.css")
    }
}

//functions
function alerta(reason,message,icon,where) {
    //elements
    const alertContainer=document.createElement("alert")
    alertContainer.classList.add("Alert")
    const alertReason=document.createElement("h2")
    alertReason.classList.add("Areason")
    alertReason.textContent=reason
    const alertMessage=document.createElement("p")
    alertMessage.classList.add("Amessage")
    alertMessage.textContent=message
    const alertIcon=document.createElement("i")
    alertIcon.setAttribute("class",`${icon} IconPrimary`)
    const alertClose=document.createElement("i")
    alertClose.setAttribute("class","fa-solid fa-xmark IconClose")
    //insertions
    alertContainer.insertAdjacentElement("beforeend",alertReason)
    alertContainer.insertAdjacentElement("beforeend",alertClose)
    alertContainer.insertAdjacentElement("beforeend",alertIcon)
    alertContainer.insertAdjacentElement("beforeend",alertMessage)
    //events
    
    //insert body
    const blurDiv= document.createElement("div")
    blurDiv.classList.add("blur")
    document.querySelector(`${where}`).insertAdjacentElement("beforeend",blurDiv)
    document.querySelector(`${where}`).insertAdjacentElement("beforeend", alertContainer)
    //animation
    setTimeout(() => {
        document.querySelector(".blur").style.setProperty("opacity","1")
    }, 200);
    setTimeout(() => {
        
        if (width<=1300&&width>800) {
            alertContainer.style.setProperty("left","30%")
        }else if (width<=800&&width>600) {
            alertContainer.style.setProperty("left","25%")
        }else if (width<=600&&width>450) {
            alertContainer.style.setProperty("left","20%")
        }else if (width<=450&&width>350) {
            alertContainer.style.setProperty("left","15%")
        }else if (width<=350) {
            alertContainer.style.setProperty("left","10%")
        }
    }, 500);
    alertClose.addEventListener("click",(e)=>{
        setTimeout(() => {
            alertContainer.style.setProperty("left","-100%")
        }, 300);
        /*close*/
        setTimeout(()=>{
            blurEl.style.setProperty("opacity","0")
        },800)
        let click=e.target
        let blurEl=document.querySelector(".blur")
       setTimeout(() => {
        document.querySelector("body").removeChild(click.parentElement)
        document.querySelector("body").removeChild(blurEl)
       }, 1200);
    })
}
function succes() {
    const suceesCont=document.createElement("succes")
    suceesCont.classList.add("succesCont")
    suceesCont.insertAdjacentHTML("beforeend",'<i class="fa-solid fa-circle-check"></i>')
    let body = document.querySelector("body")
    body.insertAdjacentElement("beforeend", suceesCont)
    //animation
    setTimeout(() => {
        suceesCont.style.setProperty("top", "2%")
    }, 200);
    setTimeout(() => {
        suceesCont.style.setProperty("opacity","0")
    }, 1500);
    setTimeout(() => {
        body.removeChild(suceesCont)
    }, 2000);
}
function start(keren,user) {
    const preStart=document.createElement("div")
    preStart.classList.add("preStart")
    const title=document.createElement("h2")
    const main=document.createElement("div")
    main.classList.add("startDis")
    const btn =document.createElement("continuar")
    btn.textContent="Continuar"
    btn.classList.add("btnContinuar")
    btn.classList.add("btnsS")
    const btnReturn=document.createElement("return")
    btnReturn.textContent="Regresar"
    btnReturn.classList.add("btnReturn")
    btnReturn.classList.add("btnsS")
    if (keren==true) {
        title.textContent="Amor pon atencion uwu"
        main.textContent='Antes, para una mejor experiencia deberias ponerte audifonos y quizas colocar la web en pantalla completa(F11), dicho eso, esta historia cuenta el como te conoci y como fue para mi enamorarme tanto de ti, es vergonzoso, pero bb, es tu dia, espero la estes pasando muy bien, o te la hays pasado bien, en caso de no ser exactamente el dia JAJA, disfrutalo tqm, con amor "cheche".'
    }else{
        title.textContent=`${user} pon atencion`
        main.textContent=`Antes, para una mejor experiencia colocate audifinos y pon la web en pantalla completa(F11), dicho eso, esta historia cuenta el como dos personas se conocieron y se enamoraron poco a poco en esas hermosas noches de primavera. Dedicado a Keren con amor.`
    }
    
    //events
    btn.addEventListener("click",()=>{
        setTimeout(() => {
            preStart.style.setProperty("transition"," all 1s ease-in-out")
            preStart.style.setProperty("bottom","-100%")
            titleOS.style.setProperty("top","-15%")
        }, 200);
        setTimeout(() => {
            preStart.style.setProperty("display","none")
        }, 1000);
       end()
       setTimeout(()=>{
            body.removeChild(preStart)
       },1000)
    })
    btnReturn.addEventListener("click",()=>{
        preStart.style.setProperty("left","-100%")
        primaryCont.style.setProperty("display","inline-flex")
        setTimeout(() => {
            primaryCont.style.setProperty("bottom","10%")
        }, 400);
        setTimeout(() => {
            document.querySelector("body").removeChild(preStart)
        }, 800);
    })

    preStart.insertAdjacentElement("beforeend",title)
    preStart.insertAdjacentElement("beforeend",main)
    preStart.insertAdjacentElement("beforeend",btnReturn)
    preStart.insertAdjacentElement("beforeend",btn)
    document.querySelector("body").insertAdjacentElement("beforeend",preStart)
    //animation
    setTimeout(() => {
        if (width<=425) {
            preStart.style.setProperty("left","5%")
        }else{
            preStart.style.setProperty("left","20%")
        }
    }, 520);
}
function mainAnimation() {
    PClabel.style.setProperty("left","5%")
    PCtext.style.setProperty("left","5%")
    btnStart.style.setProperty("right","10%")
    setTimeout(() => {
        titleOS.style.setProperty("top","5%")
    }, 500);
}
function changeColors(mode) {
    if (mode==true) {
        root.style.setProperty("--maindegreed","rgba(5, 43, 83, 0.329)")
        root.style.setProperty("--maincolor","rgb(5 43 83)")
        root.style.setProperty("--btn-color","rgb(9 75 122)")
        root.style.setProperty("--btn-hover","#076b98")
        root.style.setProperty("--btn-active","rgb(106 167 174)")
        root.style.setProperty("--background","url(/sources/Bg-nigth.png)")
        root.style.setProperty("--alert","url('/sources/pattern-background-desktop.svg'),rgb(183 141 235)")
    }else{
        root.style.setProperty("--maindegreed","rgba(128, 61, 86, 0.267)")
        root.style.setProperty("--maincolor","rgb(128, 61, 86)")
        root.style.setProperty("--btn-color","rgb(165 46 90)")
        root.style.setProperty("--btn-hover","#d45682")
        root.style.setProperty("--btn-active","rgba(242, 215, 243, 0.856)")
        root.style.setProperty("--background","url(/sources/sajuraBG.jpg)")
        root.style.setProperty("--alert","url('/sources/pattern-background-desktop.svg'),rgb(254 187 204)")
    }
}
//events
document.addEventListener("DOMContentLoaded",()=>{
    mainAnimation()
    
    //if width
    if (width<=800&&width>600) {
        btnStart.style.setProperty("right","30%")
 
    }else if (width<=600&&width>450) {
        btnStart.style.setProperty("right","25%")

    }else if (width<=450&&width>350) {
        btnStart.style.setProperty("right","20%")

    }else if (width<=350) {
        btnStart.style.setProperty("right","40%")

    }
})
dayOption.addEventListener("click",()=>{
    dayOption.style.setProperty("background","white")
    nightOption.style.setProperty("background","var(--maincolor)")
    changeColors(false)
    localStorage.setItem("mode","DayMode")
    let cont=document.querySelector(".container")
    root.removeChild(cont)
    let css=document.getElementById("animateBg")
    root.insertAdjacentHTML("afterbegin",`<div class="container">
        <div class="bubbles">
            <span style="--i:11"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:12"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:24"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:10"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:14"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:23"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:18"><img src="/sources/backgroundfiles/petalo1.png" alt="petalos"></span>
            <span style="--i:16"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:19"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:20"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:22"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:25"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:18"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:21"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:15"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:13"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:26"><img src="/sources/backgroundfiles/petalo3.png" alt="petalos"></span>
            <span style="--i:17"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:13"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:28"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:27"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:15"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:14"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:23"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:11"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:12"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:24"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:12"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
            <span style="--i:24"><img src="/sources/backgroundfiles/petalo2.png" alt="petalos"></span>
        </div>
    </div>`)
    css.setAttribute("href","/sources/backgroundfiles/bg-sakura.css")
    
})
nightOption.addEventListener("click",()=>{
    nightOption.style.setProperty("background","white")
    dayOption.style.setProperty("background","var(--maincolor)")
    changeColors(true)
    localStorage.setItem("mode","NightMode")
    let cont=document.querySelector(".container")
    root.removeChild(cont)
    let css=document.getElementById("animateBg")
    root.insertAdjacentHTML("afterbegin",`<div class="container">
    <div class="bubbles">
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:24"></span>
        <span style="--i:10"></span>
        <span style="--i:14"></span>
        <span style="--i:23"></span>
        <span style="--i:18"></span>
        <span style="--i:16"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
        <span style="--i:22"></span>
        <span style="--i:25"></span>
        <span style="--i:18"></span>
        <span style="--i:21"></span>
        <span style="--i:15"></span>
        <span style="--i:13"></span>
        <span style="--i:26"></span>
        <span style="--i:17"></span>
        <span style="--i:13"></span>
        <span style="--i:28"></span>
        <span style="--i:27"></span>
        <span style="--i:15"></span>
        <span style="--i:14"></span>
        <span style="--i:23"></span>
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:24"></span>
        <span style="--i:12"></span>
        <span style="--i:24"></span>
    </div>
</div>`)
    css.setAttribute("href","/sources/backgroundfiles/bg-particulas.css")
})
SaveExp.addEventListener("click",()=>{
    if (nameExp.value=="") {
        alerta("Error","El nombre no puede estar vacio",Ierror,"body")
        
    } else if (nameExp.value.length > 12) {
        alerta("Error","El nombre no puede ser mayor a 12 caracteres, lo siento...", Ierror,"body")
    } else{
        localStorage.setItem("NameExpectator",nameExp.value)
        succes()
    }

})
btnStart.addEventListener("click",()=>{
    if (typeof(localStorage.getItem("NameExpectator"))== typeof("")){
        primaryCont.style.setProperty("bottom","-100%")
        setTimeout(() => {
        primaryCont.style.setProperty("display","none")
        }, 1000);
        start(false,localStorage.getItem("NameExpectator"))
    }else{alerta("Error","Primero deberias poner tu nombre amigo...",Ierror,"body")}
})
