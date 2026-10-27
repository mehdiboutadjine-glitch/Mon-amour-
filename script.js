/*
  PERSONNALISATION — modifie les valeurs ci-dessous.
  PIN : écris la date exactement comme elle sera saisie, par ex. "14/02/2025".
  Important : ce PIN côté navigateur est une surprise ludique, pas une vraie sécurité.
*/
const CONFIG = {
  pin: "24/08/2026",
  musicUrl: "https://www.youtube.com/watch?v=G_5pzLWjQjY", // Colle ici un lien vers ta chanson (YouTube/Spotify, par exemple), si tu veux.
  gifts: [
    {id:"cadeau1", title:"Un bouquet pour toi", emoji:"🌹", message:"Mon amour,\n\nSi je pouvais, je t’offrirais une rose pour chaque pensée tendre que j’ai pour toi. En attendant, voici ce petit bouquet symbolique, avec toute la douceur que tu mérites.\n\nTu rends les jours ordinaires plus beaux. 💗"},
    {id:"cadeau2", title:"Quelques mots du cœur", emoji:"💌", message:"Mon amour,\n\nIl y a mille façons de dire « je t’aime », mais aucune ne me semble assez grande pour tout ce que je ressens. Alors je veux simplement te rappeler que ta présence compte énormément pour moi.\n\nMerci d’être une si belle partie de mon histoire. 🌷"},
    {id:"cadeau3", title:"Une promesse tendre", emoji:"🎀", message:"Mon amour,\n\nJe ne te promets pas une histoire parfaite, mais je veux continuer à y mettre de la tendresse, de l’écoute, des rires et de petites attentions.\n\nQue ce cadeau soit un rappel : tu mérites de te sentir aimée, aujourd’hui et tous les jours. 💞"}
  ]
};
const $ = s => document.querySelector(s);
let currentGifts = CONFIG.gifts.map(g => ({...g}));
const pinForm=$("#pinForm"), pin=$("#pin"), error=$("#error"), welcome=$("#welcome"), lock=$("#lock");
pinForm.addEventListener("submit", e=>{
  e.preventDefault();
  if(pin.value.trim() === CONFIG.pin){
    lock.classList.add("hidden"); welcome.classList.remove("hidden"); error.textContent="";
    renderGifts(); renderEditors();
    if(CONFIG.musicUrl.trim()) $("#musicLine").innerHTML = `🎵 <a href="${escapeHtml(CONFIG.musicUrl)}" target="_blank" rel="noopener">Écouter notre chanson</a>`;
    const requestedGift = location.hash.slice(1);
    if(CONFIG.gifts.some(g => g.id === requestedGift)) openGift(requestedGift);
  } else error.textContent="Ce n’est pas la bonne date… essaie encore, Mon amour 💗";
});
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renderGifts(){
  const container=$("#gifts"); container.innerHTML="";
  currentGifts.forEach((g,i)=>{
    const card=document.createElement("article"); card.className="gift";
    card.innerHTML=`<div class="emoji">${g.emoji}</div><h2>${escapeHtml(g.title)}</h2><p class="muted">Cadeau ${i+1} sur 3</p><button type="button">Découvrir 💝</button>`;
    card.querySelector("button").addEventListener("click",()=>openGift(g.id));
    container.appendChild(card);
  });
}
function openGift(id){
  const g=currentGifts.find(x=>x.id===id); if(!g)return;
  $("#giftEmoji").textContent=g.emoji; $("#giftTitle").textContent=g.title; $("#message").textContent=g.message;
  $("#gifts").classList.add("hidden"); $("#giftView").classList.remove("hidden");
}
$("#back").addEventListener("click",()=>{$("#giftView").classList.add("hidden");$("#gifts").classList.remove("hidden");});
function renderEditors(){
  const root=$("#editors"); root.innerHTML="";
  currentGifts.forEach((g,i)=>{
    const wrap=document.createElement("div");wrap.className="card";
    wrap.innerHTML=`<label><b>Titre du cadeau ${i+1}</b><input data-title="${g.id}" value="${escapeHtml(g.title)}"></label><p><label><b>Message</b><textarea rows="5" data-message="${g.id}">${escapeHtml(g.message)}</textarea></label></p>`;
    root.appendChild(wrap);
  });
}
$("#save").addEventListener("click",()=>{
  currentGifts=currentGifts.map(g=>({...g,title:$(`[data-title="${g.id}"]`).value.trim()||g.title,message:$(`[data-message="${g.id}"]`).value}));
  try{localStorage.setItem("monAmourGifts",JSON.stringify(currentGifts));}catch(e){}
  renderGifts();$("#saved").textContent="Messages enregistrés sur cet appareil 💗";
});
$("#reset").addEventListener("click",()=>{
  currentGifts=CONFIG.gifts.map(g=>({...g}));
  try{localStorage.removeItem("monAmourGifts");}catch(e){}
  renderEditors();renderGifts();$("#saved").textContent="Messages d’origine restaurés.";
});
try{
 const saved=localStorage.getItem("monAmourGifts");
 if(saved){const parsed=JSON.parse(saved);if(Array.isArray(parsed)&&parsed.length===3)currentGifts=parsed;}
}catch(e){}
