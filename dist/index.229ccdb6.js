const e=document.getElementById("main"),t=document.getElementById("active-window"),n=document.getElementById("fake-tiles"),o=(document.getElementById("pagination"),document.getElementById("swatch-template"));function c(e,t){let n=12*t,o=[];for(var c=n-12;c<n&&!(c>e.length-1);c++)o.push(e[c]);return o}function l(e){let t=o.content.firstElementChild.cloneNode(!0);return t.querySelector(".color").style.backgroundColor=`#${e.hex}`,t.querySelector(".label").innerText=`#${e.hex}`,t}function r(e){t.querySelector(".active-color").style.backgroundColor=`#${e.hex}`,t.querySelector(".active-label").innerText=`#${e.hex}`,function(e){n.innerHTML="";for(let t=0;t<5;t++){let t=l(e);n.append(t)}}(e),t.classList.add("open")}function a(t){e.innerHTML="",t.forEach((t=>{let n=o.content.firstElementChild.cloneNode(!0);n.querySelector(".color").style.backgroundColor=`#${t.hex}`,n.querySelector(".label").innerText=`#${t.hex}`,n.dataset.id=t._id,n.dataset.hex=t.hex,n.addEventListener("click",(function(){r(t)})),e.append(n)}))}document.getElementById("clear").addEventListener("click",(function(){t.classList.remove("open")})),async function(){a(c(await async function(){let e=await fetch("http://localhost:8080/colors");return await e.json()}(),1))}(),document.getElementById("random").addEventListener("click",(async function(e){r(await async function(){let e=await fetch("http://localhost:8080/colors/random");return await e.json()}())})),document.querySelector(".logo").href=window.location.href;
//# sourceMappingURL=index.229ccdb6.js.map
