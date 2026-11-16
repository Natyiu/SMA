// Client-side behaviour migrated from legacy/index.html.
// Each original <script> runs in its own block, in the original order, once after hydration.
/* eslint-disable */
export function initSite() {
  // ---- script 1 ----
  try {
    
      const nav=document.getElementById('nav');
      const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>8);
      onScroll();window.addEventListener('scroll',onScroll,{passive:true});
      const els=document.querySelectorAll('.reveal');
      if('IntersectionObserver' in window){
        const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
        els.forEach(el=>io.observe(el));
      }else els.forEach(el=>el.classList.add('in'));
    
    
    /* scale app screens to their cards */
    (function(){
      const els=[...document.querySelectorAll('.shot-app')];
      const fit=()=>els.forEach(el=>{
        const app=el.firstElementChild,W=el.clientWidth,H=el.clientHeight;
        if(el.closest('.fx-panel')){ /* feature showcase: whole window, top-aligned, fit to width */
          const dw=Math.max(W,560);app.style.width=dw+'px';app.style.height=(H/(W/dw))+'px';
          app.style.transformOrigin='0 0';app.style.transform='scale('+(W/dw)+')';return}
        const sel=el.dataset.focus,t=sel&&app.querySelector(sel);
        if(!t){app.style.transform='scale('+(W/app.offsetWidth)+')';return}
        app.style.transform='none';
        const ar=app.getBoundingClientRect(),r=t.getBoundingClientRect(),s=(ar.width/app.offsetWidth)||1;
        const fw=r.width/s*(+el.dataset.w||1),k=Math.min(W/fw*0.78,1.25);
        const x=(r.left-ar.left)/s,y=(r.top-ar.top)/s,rw=r.width/s;
        const tx=(W-rw*k)/2-x*k, ty=Math.max(Math.min(14-y*k,0),H-app.offsetHeight*k);
        app.style.transformOrigin='0 0';app.style.transform='translate('+tx+'px,'+ty+'px) scale('+k+')';
      });
      fit();addEventListener('resize',fit);
    })();
    
    /* hero listing tabs */
    (function(){
      const tabs=[...document.querySelectorAll('.hc-tab')],cards=[...document.querySelectorAll('.hc')],grid=document.querySelector('.hc-grid');
      if(!grid) return; const empty=document.createElement('p');empty.className='hc-empty';empty.textContent='New listings in this category land daily inside SMB Market.';
      tabs.forEach(t=>t.addEventListener('click',()=>{
        tabs.forEach(x=>x.classList.toggle('on',x===t));
        let n=0;cards.forEach(c=>{const show=t.dataset.cat==='all'||c.dataset.cat===t.dataset.cat;c.classList.toggle('hide',!show);n+=show});
        if(!n)grid.appendChild(empty);else empty.remove();
      }));
    })();
    
  } catch (e) { console.error('[site script 1]', e); }

  // ---- script 2 ----
  try {
    
    (function(){
      var t=document.querySelector('.ic-track');if(!t)return;
      var arrows=document.querySelectorAll('.ic-arrow');
      function step(){var c=t.querySelector('.ic-card');return c?c.getBoundingClientRect().width+20:300}
      function upd(){arrows[0].disabled=t.scrollLeft<4;arrows[1].disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-4}
      arrows.forEach(function(a){a.addEventListener('click',function(){t.scrollBy({left:step()*+a.dataset.dir,behavior:'smooth'})})});
      t.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
    })();
    
  } catch (e) { console.error('[site script 2]', e); }

  // ---- script 3 ----
  try {
    
    (function(){
      var root=document.documentElement,btns=document.querySelectorAll('.font-sw button');
      function set(f){
        root.setAttribute('data-font',f);
        btns.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.f===f)});
        try{localStorage.setItem('smb-font4',f)}catch(e){}
      }
      var saved='texturina';try{saved=localStorage.getItem('smb-font4')||'texturina'}catch(e){}
      btns.forEach(function(b){b.addEventListener('click',function(){set(b.dataset.f)})});
      set(saved);
    })();
    
  } catch (e) { console.error('[site script 3]', e); }

  // ---- script 4 ----
  try {
    
    (function(){
      var hero=document.querySelector('.hero');if(!hero)return;
      var g=document.createElement('div');g.className='hero-glow';g.setAttribute('aria-hidden','true');
      g.innerHTML='<i class="g1"></i><i class="g2"></i><i class="g3"></i>';
      hero.insertBefore(g,hero.firstChild);
    })();
    
  } catch (e) { console.error('[site script 4]', e); }

  // ---- script 5 ----
  try {
    
    (function(){
      document.documentElement.removeAttribute('data-hero');try{localStorage.removeItem('smb-hero')}catch(e){}
    })();
    
  } catch (e) { console.error('[site script 5]', e); }

  // ---- script 6 ----
  try {
    
    (function(){
      var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      /* 1) smooth inertia scroll */
      var lenis=null;
      if(!reduce&&window.Lenis){
        lenis=new Lenis({duration:1.25,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t))},smoothWheel:true,wheelMultiplier:.9,touchMultiplier:1.4});
        function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf);
        document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){
          var id=a.getAttribute('href');if(id.length<2)return;var el=document.querySelector(id);if(!el)return;
          e.preventDefault();lenis.scrollTo(el,{offset:-80,duration:1.6});});});
      }
      /* 2) staggered grids */
      var grids=document.querySelectorAll('.steps,.bento,.hc-grid,.stats-grid,.plans,.rv-cards,.faq-list,.ic-track,.inc-grid');
      grids.forEach(function(g){
        g.classList.add('stg');g.classList.remove('reveal');
        Array.prototype.forEach.call(g.children,function(c,i){c.style.transitionDelay=(Math.min(i,10)*70)+'ms'});
      });
      if('IntersectionObserver' in window&&!reduce){
        var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -10% 0px'});
        grids.forEach(function(g){io.observe(g)});
      }else{grids.forEach(function(g){g.classList.add('in')})}
      /* 3) parallax photos */
      if(reduce)return;
      var px=[].slice.call(document.querySelectorAll('.ms-photo,.tq2-photo,.tq-photo,.img-band,.photo,.founder-photo,.faq-photo'));
      px.forEach(function(el){el.classList.add('px')});
      function upd(){
        var vh=window.innerHeight;
        px.forEach(function(el){var r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;
          var p=(r.top+r.height/2-vh/2)/vh;el.style.setProperty('--py',(p*-40).toFixed(1)+'px');});
      }
      if(lenis)lenis.on('scroll',upd);else window.addEventListener('scroll',upd,{passive:true});
      window.addEventListener('resize',upd);upd();
    })();
    
  } catch (e) { console.error('[site script 6]', e); }

  // ---- script 7 ----
  try {
    
    (function(){
      var sec=document.querySelector('.rv3');if(!sec)return;
      var qs=sec.querySelectorAll('.rv3-q'),ts=sec.querySelectorAll('.rv3-tab'),cur=0,timer=null;
      var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      function show(i){cur=i;qs.forEach(function(q,k){q.classList.toggle('on',k===i)});
        ts.forEach(function(t,k){t.classList.remove('on');if(k===i){void t.offsetWidth;t.classList.add('on')}});}
      if(!reduce)timer=setInterval(function(){if(!sec.classList.contains('paused'))show((cur+1)%qs.length)},6000);
      ts.forEach(function(t,k){t.addEventListener('click',function(){sec.classList.add('paused');clearInterval(timer);show(k)})});
    })();
    
  } catch (e) { console.error('[site script 7]', e); }

  // ---- script 8 ----
  try {
    
    (function(){
      var fx=document.querySelector('.fx');if(!fx)return;
      var its=fx.querySelectorAll('.fx-item'),ps=fx.querySelectorAll('.fx-panel'),cur=0,timer;
      var track=document.querySelector('.fx-track'),pin=document.querySelector('.fx-pin'),sec=document.getElementById('tools');
      var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var mq=window.matchMedia('(min-width: 901px)');
      var list=fx.querySelector('.fx-list'),hl=document.createElement('span');hl.className='fx-hl';list.prepend(hl);
      function place(){var t=its[cur];hl.style.transform='translateY('+t.offsetTop+'px)';hl.style.height=t.offsetHeight+'px'}
      if(window.ResizeObserver){var ro=new ResizeObserver(place);its.forEach(function(t){ro.observe(t)})}
      function show(i){if(i===cur&&its[i].classList.contains('on'))return;cur=i;ps.forEach(function(p,k){p.classList.toggle('on',k===i);p.classList.toggle('past',k<i)});
        its.forEach(function(t,k){t.classList.remove('on');if(k===i){void t.offsetWidth;t.classList.add('on')}});
        place();window.dispatchEvent(new Event('resize'));}
      /* transition styles, each driven by scroll progress t (0..1) between screen i and i+1 */
      var MODES={
        stack:function(k,i,t){
          if(k<i)return{tf:'scale(.92)',op:0};
          if(k===i)return{tf:'translateY('+(-4*t)+'%) scale('+(1-.08*t)+')',dim:t*.5};
          if(k===i+1)return{tf:'translateY('+((1-t)*104)+'%)'};
          return{tf:'translateY(104%)'}},
        slide:function(k,i,t){
          if(k<i)return{tf:'translateX(-104%)'};
          if(k===i)return{tf:'translateX('+(-104*t)+'%)'};
          if(k===i+1)return{tf:'translateX('+((1-t)*104)+'%)'};
          return{tf:'translateX(104%)'}},
        fade:function(k,i,t){
          if(k===i)return{op:1};
          if(k===i+1)return{op:t};
          return{op:0}},
        swap:function(k,i,t){
          if(k===i)return{op:1,st:'translateY('+(t*70)+'%)'};
          if(k===i+1)return{op:Math.min(1,t*1.6),st:'translateY('+((1-t)*70)+'%)'};
          return{op:0}},
        flip:function(k,i,t){
          if(k===i)return t<.5?{tf:'perspective(1600px) rotateX('+(t*180)+'deg)',dim:t}:{op:0};
          if(k===i+1)return t>=.5?{tf:'perspective(1600px) rotateX('+((t-1)*180)+'deg)',dim:1-t}:{op:0};
          return{op:0}}
      };
      var mode='swap';
      var sw=document.querySelectorAll('.fx-sw button');
      function setMode(m){mode=m;sw.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.t===m)});
        try{localStorage.setItem('smb-fx',m)}catch(e){}ps.forEach(function(x){x.style.transformOrigin=m==='flip'?'50% 50%':''});upd()}
      sw.forEach(function(b){b.addEventListener('click',function(){setMode(b.dataset.t)})});
      sw.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.t===mode)});
      /* desktop: scroll-linked steps */
      var step=0,scrollMode=false;
      function layout(){
        scrollMode=!reduce&&mq.matches&&!!track;
        sec.classList.toggle('fx-scroll',scrollMode);fx.classList.toggle('fx-scrub',scrollMode);
        if(!scrollMode){if(track)track.style.height='';ps.forEach(function(x){x.style.removeProperty('--tf');x.style.removeProperty('--op');x.style.removeProperty('--dim')});return}
        var vh=window.innerHeight,ph=pin.offsetHeight;
        step=Math.max(260,vh*.55);
        track.style.height=(ph+step*(its.length-.4))+'px';
        sec.style.setProperty('--fx-top',Math.max(72,(vh-ph)/2)+'px');
        upd();
      }
      function upd(){
        if(!scrollMode)return;
        var r=track.getBoundingClientRect(),top=parseFloat(getComputedStyle(sec).getPropertyValue('--fx-top'))||80;
        target=Math.max(0,top-r.top);
        if(sd==null){sd=target}
        if(!raf)raf=requestAnimationFrame(tick);
      }
      /* smoothed (laggy) follow: the transition trails behind the scroll and eases into place */
      var target=0,sd=null,raf=0,last=0;
      function tick(now){
        raf=0;var dt=last?Math.min(64,now-last):16;last=now;
        var a=1-Math.pow(1-.06,dt/16.7);sd+=(target-sd)*a;
        if(Math.abs(target-sd)<.3)sd=target;
        render(sd);
        if(sd!==target)raf=requestAnimationFrame(tick);else last=0;
      }
      function render(d){
        var i=Math.min(its.length-1,Math.floor(d/step));
        var p=Math.max(0,Math.min(1,(d-i*step)/step));
        var t=i>=its.length-1?0:Math.max(0,Math.min(1,(p-.25)/.75));t=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
        ps.forEach(function(x,k){var r=MODES[mode](k,i,t);
          x.style.setProperty('--tf',r.tf||'none');x.style.setProperty('--op',r.op==null?1:r.op);
          x.style.setProperty('--dim',r.dim||0);x.style.setProperty('--st',r.st||'none')});
        show(t>.5?i+1:i);
      }
      its.forEach(function(t,k){t.addEventListener('click',function(){
        if(scrollMode){var r=track.getBoundingClientRect(),top=parseFloat(getComputedStyle(sec).getPropertyValue('--fx-top'))||80;
          window.scrollTo({top:window.scrollY+r.top-top+k*step+2,behavior:'smooth'});return}
        fx.classList.add('paused');clearInterval(timer);show(k)})});
      window.addEventListener('scroll',upd,{passive:true});
      var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(layout,120)});
      layout();
      /* mobile / reduced motion: keep the timed rotation */
      if(!reduce){var started=false;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!started){started=true;timer=setInterval(function(){if(!scrollMode&&!fx.classList.contains('paused'))show((cur+1)%ps.length)},7000)}})},{threshold:.3});io.observe(fx)}
      setTimeout(function(){window.dispatchEvent(new Event('resize'))},50);
    })();
    
  } catch (e) { console.error('[site script 8]', e); }

  // ---- script 9 ----
  try {
    
    /* industries: scroll-linked horizontal drift (hints that the row scrolls) */
    (function(){
      var t=document.querySelector('.ic-track'),sec=t&&t.closest('section');if(!t||!sec)return;
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
      var linked=true;
      t.style.scrollSnapType='none';t.style.scrollBehavior='auto';
      function release(){if(!linked)return;linked=false;t.style.scrollSnapType='';t.style.scrollBehavior=''}
      ['pointerdown','touchstart','keydown'].forEach(function(ev){t.addEventListener(ev,release,{passive:true})});
      t.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)>Math.abs(e.deltaY))release()},{passive:true});
      document.querySelectorAll('.ic-arrow').forEach(function(a){a.addEventListener('click',release,true)});
      function upd(){
        if(!linked)return;
        var r=sec.getBoundingClientRect(),vh=window.innerHeight;
        var p=(vh-r.top)/(vh+r.height);p=Math.max(0,Math.min(1,p));
        var c=t.querySelector('.ic-card');var w=c?c.getBoundingClientRect().width+20:400;
        var e=p<.25?0:p>.75?1:(p-.25)/.5;e=e*e*(3-2*e);
        t.scrollLeft=e*w*1.15;
      }
      window.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
    })();
    
  } catch (e) { console.error('[site script 9]', e); }

  // ---- script 10 ----
  try {
    
    /* tutorial: lesson playlist drives the video, and follows playback */
    (function(){
      var t=document.querySelector('.tut');if(!t)return;
      var v=t.querySelector('.tp-v'),items=[].slice.call(t.querySelectorAll('.tp-item')),list=t.querySelector('.tp-items');
      var nowN=t.querySelector('.tp-now-n'),nowT=t.querySelector('.tp-now-t'),cur=0;
      function mark(i){if(i===cur&&items[i].classList.contains('on'))return;cur=i;
        items.forEach(function(it,k){it.classList.toggle('on',k===i)});
        nowN.textContent=i+1;nowT.textContent=items[i].querySelector('b').textContent;
        var it=items[i].parentNode,top=it.offsetTop-list.offsetTop;
        if(top<list.scrollTop||top+it.offsetHeight>list.scrollTop+list.clientHeight)list.scrollTo({top:top-8,behavior:'smooth'})}
      function play(at){t.classList.add('playing');v.controls=true;
        if(at!=null){if(v.readyState>0)v.currentTime=at;else v.addEventListener('loadedmetadata',function h(){v.currentTime=at;v.removeEventListener('loadedmetadata',h)})}
        v.play().catch(function(){})}
      t.querySelector('.tp-cover').addEventListener('click',function(){play(+items[cur].dataset.t)});
      items.forEach(function(it,k){it.addEventListener('click',function(){mark(k);play(+it.dataset.t)})});
      v.addEventListener('timeupdate',function(){var i=0;items.forEach(function(it,k){if(v.currentTime>=+it.dataset.t)i=k});mark(i)});
    })();
    
  } catch (e) { console.error('[site script 10]', e); }
}
