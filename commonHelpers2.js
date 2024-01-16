import"./assets/modulepreload-polyfill-ec808ebb.js";const m=`<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>`;document.body.style.backgroundColor="lightgray";document.querySelector(".main-section").insertAdjacentHTML("beforeend",m);const o=document.querySelector(".feedback-form"),n="feedback-form-state";let e={email:"",message:""};const l=localStorage.getItem(n);if(l!==null&&l!=="")try{e=JSON.parse(l);for(const t in e)o.elements[t].value=e[t]}catch{}o.addEventListener("input",t=>{const a=t.target.nodeName;if(a==="INPUT"||a==="TEXTAREA"){for(const r in e)e[r]=o.elements[r].value.trim();localStorage.setItem(n,JSON.stringify(e))}});o.addEventListener("submit",t=>{t.preventDefault();for(const a in e)if(!o.elements[a].value){alert("All field must be filled!");return}for(const a in e)o.elements[a].value="";localStorage.removeItem(n),console.dir(e)});
//# sourceMappingURL=commonHelpers2.js.map
