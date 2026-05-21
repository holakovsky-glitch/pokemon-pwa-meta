// Modul oslavy level-up pre PWA Pokemon
export function spustOslavu(meno) {
  const zvuk = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=');
  zvuk.play();
  
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);background:#4caf50;color:white;padding:20px 40px;border-radius:20px;font-size:24px;z-index:9999;';
  banner.textContent = `🎉 Gratulujem ${meno}! Nový level! 🎉`;
  document.body.appendChild(banner);
  
  for(let i=0;i<50;i++){
    const confetti = document.createElement('div');
    confetti.style.cssText = `position:fixed;top:-10px;left:${Math.random()*100}%;width:10px;height:10px;background:hsl(${Math.random()*360},100%,50%);animation:padaj 3s linear;`;
    document.body.appendChild(confetti);
  }
  
  setTimeout(()=>{banner.remove()},3000);
}

const style = document.createElement('style');
style.textContent = '@keyframes padaj{to{transform:translateY(100vh) rotate(720deg)}}';
document.head.appendChild(style);