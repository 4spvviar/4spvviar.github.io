(function(){
  var root=document.documentElement,btn=document.getElementById('theme');
  var dark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  try{var s=localStorage.getItem('theme');if(s){root.setAttribute('data-theme',s);dark=s==='dark'}}catch(e){}
  btn.addEventListener('click',function(){
    dark=!dark;var t=dark?'dark':'light';root.setAttribute('data-theme',t);
    try{localStorage.setItem('theme',t)}catch(e){}
  });
})();
