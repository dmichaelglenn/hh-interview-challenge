const e=document.getElementById("main"),t=document.getElementById("active-window"),n=document.getElementById("fake-tiles"),c=document.getElementById("pagination"),o=document.getElementById("swatch-template");function a(e,t){let n=12*t,c=[];for(var o=n-12;o<n&&!(o>e.length-1);o++)c.push(e[o]);return c}function l(e,t){let n=a(t,e.target.dataset.page);c.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),d(n)}function r(e){let t=o.content.firstElementChild.cloneNode(!0);return t.querySelector(".color").style.backgroundColor=`#${e.hex}`,t.querySelector(".label").innerText=`#${e.hex}`,t}function i(e){t.querySelector(".active-color").style.backgroundColor=`#${e.hex}`,t.querySelector(".active-label").innerText=`#${e.hex}`,function(e){n.innerHTML="";for(let t=0;t<5;t++){let t=r(e);n.append(t)}}(e),t.classList.add("open")}function d(t){e.innerHTML="",t.forEach((t=>{let n=o.content.firstElementChild.cloneNode(!0);n.querySelector(".color").style.backgroundColor=`#${t.hex}`,n.querySelector(".label").innerText=`#${t.hex}`,n.dataset.id=t._id,n.dataset.hex=t.hex,n.addEventListener("click",(function(){i(t)})),e.append(n)}))}document.getElementById("clear").addEventListener("click",(function(){t.classList.remove("open")})),async function(){let e=await async function(){let e=await fetch("/colors");return await e.json()}();d(a(e,1)),function(e){let t=Math.ceil(e.length/12);c.innerHTML="";for(let n=0;n<t;n++){let t=document.createElement("li");t.innerText=n+1,t.dataset.page=n+1,t.addEventListener("click",(function(t){l(t,e)})),0===n&&t.classList.add("active"),c.append(t)}}(e)}(),document.getElementById("random").addEventListener("click",(async function(e){i(await async function(){let e=await fetch("/colors/random");return await e.json()}())})),document.querySelector(".logo").href=window.location.href;
//# sourceMappingURL=index.87e56f9f.js.map
