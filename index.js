import{a as d,S as u,i as n}from"./assets/vendor-D3K94jtT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function m(a){const r="https://pixabay.com/api/",t="51439331-da55d8a3a0e541a7ddbda82f1",o=new URLSearchParams({key:t,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return d(`${r}?${o}`).then(e=>e.data).catch(e=>console.log(e))}const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="info">
            <div class="info-item">
              <span class="info-item-title">Likes</span>
              <span class="info-item-value">${t.likes}</span>
            </div>
            <div class="info-item">
              <span class="info-item-title">Views</span>
              <span class="info-item-value">${t.views}</span>
            </div>
            <div class="info-item">
              <span class="info-item-title">Comments</span>
              <span class="info-item-value">${t.comments}</span>
            </div>
            <div class="info-item">
              <span class="info-item-title">Downloads</span>
              <span class="info-item-value">${t.downloads}</span>
            </div>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function g(){c.innerHTML=""}function y(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",b);function b(a){a.preventDefault();const r=l.elements["search-text"].value.trim(),t=l.querySelector(".btn");if(!r){n.warning({message:"Please enter search query",backgroundColor:"#ffa000",messageColor:"#fff",position:"topRight"});return}t.disabled=!0,g(),y(),m(r).then(o=>{if(!o.hits||o.hits.length===0){n.error({message:"Sorry, there are no images matching <br>your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight"});return}h(o.hits)}).catch(o=>{n.error({message:"Failed to fetch data from API. <br>Please try again later.",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight"})}).finally(()=>{t.disabled=!1,v()})}
//# sourceMappingURL=index.js.map
