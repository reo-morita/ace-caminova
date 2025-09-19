// 年表示
document.getElementById('y').textContent = new Date().getFullYear();

// 公開予定日カウントダウン
const target = new Date('2025-10-01T09:00:00+09:00');
const $t = document.getElementById('timer'); $t.hidden = false;
setInterval(() => {
  const now = new Date();
  const diff = Math.max(0, target - now);
  const sec = Math.floor(diff / 1000);
  const d   = Math.floor(sec / 86400);
  const h   = Math.floor((sec % 86400) / 3600);
  const m   = Math.floor((sec % 3600) / 60);
  const s   = sec % 60;
  d!==undefined && (document.getElementById('d').textContent = d);
  h!==undefined && (document.getElementById('h').textContent = h);
  m!==undefined && (document.getElementById('m').textContent = m);
  s!==undefined && (document.getElementById('s').textContent = s);
}, 1000);