const e=document.getElementById("main"),t=document.getElementById("active-window"),n=document.getElementById("fake-tiles"),o=(document.getElementById("pagination"),document.getElementById("swatch-template"));function c(e,t){let n=12*t,o=[];for(var c=n-12;c<n&&!(c>e.length-1);c++)o.push(e[c]);return o}function r(e){let t=function(e,t,n){n/=100;const o=t*Math.min(n,1-n)/100,c=t=>{const c=(t+e/30)%12,r=n-o*Math.max(Math.min(c-3,9-c,1),-1);return Math.round(255*r).toString(16).padStart(2,"0")};return`${c(0)}${c(8)}${c(4)}`}(e.h,e.s,e.l),n=o.content.firstElementChild.cloneNode(!0);return n.querySelector(".color").style.backgroundColor=`#${t}`,n.querySelector(".label").innerText=`#${t}`,n}function l(e){t.querySelector(".active-color").style.backgroundColor=`#${e.hex}`,t.querySelector(".active-label").innerText=`#${e.hex}`,function(e){for(n.innerHTML="",i=0;i<5;i++){let t=r(e);n.append(t)}}(e),t.classList.add("open")}function a(t){e.innerHTML="",t.forEach((t=>{let n=o.content.firstElementChild.cloneNode(!0);n.querySelector(".color").style.backgroundColor=`#${t.hex}`,n.querySelector(".label").innerText=`#${t.hex}`,n.dataset.id=t._id,n.dataset.hex=t.hex,n.addEventListener("click",(function(){l(t)})),e.append(n)}))}document.getElementById("clear").addEventListener("click",(function(){t.classList.remove("open")})),async function(){a(c(await async function(){let e=await fetch("http://localhost:8080/colors");return await e.json()}(),1))}(),document.getElementById("random").addEventListener("click",(async function(e){l(await async function(){let e=await fetch("http://localhost:8080/colors/random");return await e.json()}())})),document.querySelector(".logo").href=window.location.href;
//# sourceMappingURL=index.bf361f12.js.map
