(function(){
var CONTACT_EMAIL="your-email@example.com"; // replace with your real email
var pages=["home","about","contact"];
function show(){
  var h=(location.hash||"#home").slice(1);
  if(pages.indexOf(h)<0)h="home";
  pages.forEach(function(p){document.getElementById(p).classList.toggle("on",p===h)});
  document.querySelectorAll("nav a.l").forEach(function(a){a.classList.toggle("on",a.dataset.p===h)});
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",show);show();
document.getElementById("y").textContent=new Date().getFullYear();
document.getElementById("cf").addEventListener("submit",function(ev){
  ev.preventDefault();
  var n=this.name.value.trim(),e=this.email.value.trim(),m=this.message.value.trim(),st=document.getElementById("st");
  if(!n||!m||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)){st.textContent="Please fill in all fields with a valid email.";return}
  location.href="mailto:"+CONTACT_EMAIL+"?subject="+encodeURIComponent("Portfolio message from "+n)+"&body="+encodeURIComponent(m+"\n\nFrom: "+n+" <"+e+">");
  st.textContent="Opening your email app…";
});
})();
