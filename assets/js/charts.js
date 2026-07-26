(function(){
  const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const DPR = () => Math.min(window.devicePixelRatio || 1, 2);
  function prepare(canvas){
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(300, rect.width || Number(canvas.getAttribute('width')) || 600);
    const height = Math.max(180, rect.height || width * ((Number(canvas.getAttribute('height'))||300)/(Number(canvas.getAttribute('width'))||600)));
    const ratio = DPR();
    if(canvas.width !== Math.floor(width*ratio) || canvas.height !== Math.floor(height*ratio)){
      canvas.width=Math.floor(width*ratio); canvas.height=Math.floor(height*ratio);
    }
    const ctx=canvas.getContext('2d'); ctx.setTransform(ratio,0,0,ratio,0,0); ctx.clearRect(0,0,width,height);
    return {ctx,width,height};
  }
  function grid(ctx,w,h,pad=35){
    ctx.save();ctx.strokeStyle=css('--line');ctx.lineWidth=1;ctx.font='10px system-ui';ctx.fillStyle=css('--muted');
    for(let i=0;i<=5;i++){const y=pad+(h-pad*2)*i/5;ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke()}
    for(let i=0;i<=6;i++){const x=pad+(w-pad*2)*i/6;ctx.beginPath();ctx.moveTo(x,pad);ctx.lineTo(x,h-pad);ctx.stroke()}
    ctx.restore();
  }
  function line(canvas,series,opts={}){
    const {ctx,width:w,height:h}=prepare(canvas),pad=opts.pad||36;grid(ctx,w,h,pad);
    const all=series.flatMap(s=>s.values);let min=opts.min??Math.min(...all),max=opts.max??Math.max(...all);if(min===max){min-=1;max+=1}
    series.forEach((s,idx)=>{ctx.beginPath();ctx.strokeStyle=s.color||[css('--cyan'),css('--green'),css('--amber'),css('--violet')][idx%4];ctx.lineWidth=2;
      s.values.forEach((v,i)=>{const x=pad+(w-pad*2)*(i/Math.max(1,s.values.length-1));const y=h-pad-(h-pad*2)*((v-min)/(max-min));i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();
    });
    ctx.font='10px system-ui';ctx.fillStyle=css('--muted');ctx.fillText(String(Math.round(max*100)/100),5,pad+3);ctx.fillText(String(Math.round(min*100)/100),5,h-pad+3);
    let lx=pad;series.forEach((s,idx)=>{ctx.fillStyle=s.color||[css('--cyan'),css('--green'),css('--amber'),css('--violet')][idx%4];ctx.fillRect(lx,10,10,3);ctx.fillStyle=css('--muted');ctx.fillText(s.label||`Series ${idx+1}`,lx+15,14);lx+=ctx.measureText(s.label||'Series').width+45});
  }
  function bars(canvas,items,opts={}){
    const {ctx,width:w,height:h}=prepare(canvas),pad=40;grid(ctx,w,h,pad);const max=opts.max??Math.max(...items.map(i=>i.value),1);const bw=(w-pad*2)/items.length*.58;
    items.forEach((it,i)=>{const x=pad+(w-pad*2)*(i+.5)/items.length-bw/2;const bh=(h-pad*2)*(it.value/max);const g=ctx.createLinearGradient(0,h-pad-bh,0,h-pad);g.addColorStop(0,it.color||css('--cyan'));g.addColorStop(1,css('--blue'));ctx.fillStyle=g;ctx.fillRect(x,h-pad-bh,bw,bh);ctx.fillStyle=css('--muted');ctx.font='9px system-ui';ctx.textAlign='center';ctx.fillText(it.label,x+bw/2,h-pad+15)});ctx.textAlign='left';
  }
  function resizeAll(callback){let t;window.addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(callback,120)})}
  window.OSML_CHARTS={prepare,line,bars,grid,css,resizeAll};
})();
