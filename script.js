window.addEventListener("load",()=>{setTimeout(()=>document.querySelector(".loader")?.classList.add("done"),650)});
const CFG=window.PORTFOLIO_CONFIG||{};
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll("[data-telegram]").forEach(a=>{if(CFG.telegram){a.href=CFG.telegram}else{a.href="#contact";a.addEventListener("click",e=>{e.preventDefault();alert("Добавь свой Telegram в config.js");})}});
const projectData={
 zisvpn:{type:"VPN SERVICE",title:"ZisVPN",text:"Собственный VPN-сервис для комфортного и стабильного подключения к интернету. Здесь можно рассказать о функциях, тарифах и особенностях сервиса.",url:CFG.links?.zisvpn||""},
 ipaworld:{type:"IOS APP CATALOG",title:"iPAWORLD",text:"Каталог приложений и игр для iPhone с удобным поиском, категориями и простым сценарием установки.",url:CFG.links?.ipaworld||"https://ipaworld.ru/"},
 ipawsign:{type:"TELEGRAM AUTOMATION",title:"iPAWSign",text:"Telegram-бот для работы с сертификатами и подписания IPA-файлов. Можно добавить ссылку на бота и подробности проекта.",url:CFG.links?.ipawsign||""}
};
const modal=document.querySelector("#projectDialog");
function showProject(key){const p=projectData[key];if(!p)return;document.querySelector("#modalType").textContent=p.type;document.querySelector("#modalTitle").textContent=p.title;document.querySelector("#modalText").textContent=p.text;const l=document.querySelector("#modalLink");if(p.url){l.href=p.url;l.style.display="inline-block"}else{l.style.display="none"}modal.showModal()}
document.querySelectorAll("[data-project]").forEach(el=>{el.addEventListener("click",()=>showProject(el.dataset.project));el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();showProject(el.dataset.project)}})});
document.querySelector(".close-dialog").addEventListener("click",()=>modal.close());modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector(".mobile-nav");menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
if(matchMedia("(pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){const glow=document.querySelector(".cursor-glow");window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"},{passive:true});document.querySelectorAll(".magnetic").forEach(el=>{el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;el.style.transform=`translate(${x*.08}px,${y*.08}px)`});el.addEventListener("pointerleave",()=>el.style.transform="")})}
