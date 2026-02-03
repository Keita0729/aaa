// --- 追加機能: パスコース描画ロジック ---
let isDrawing = false;
let drawMode = false;
const canvas = document.getElementById('drawing-layer');
const ctx = canvas.getContext('2d');

function toggleDrawMode() {
    drawMode = !drawMode;
    const btn = document.getElementById('drawBtn');
    btn.innerText = `ペン描画: ${drawMode ? 'ON' : 'OFF'}`;
    btn.classList.toggle('btn-active', drawMode);
    // 描画モードの時は選手のドラッグを無効化し、キャンバスを操作可能に
    canvas.style.pointer-events = drawMode ? 'auto' : 'none';
}

canvas.onmousedown = (e) => {
    if(!drawMode) return;
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
};

canvas.onmousemove = (e) => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 8]); // 2026年風のスタイリッシュな破線
    ctx.stroke();
};

window.onmouseup = () => { isDrawing = false; };

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// --- 追加機能: フォーメーション一括変更 ---
const formations = {
    attack: [
        {t:18, l:50}, // アンカー
        {t:35, l:35}, {t:35, l:65}, // 偽サイドバック/インサイド
        {t:75, l:10}, {t:85, l:30}, {t:90, l:50}, {t:85, l:70}, {t:75, l:90} // 5トップ
    ],
    defend: [
        {t:15, l:20}, {t:15, l:40}, {t:15, l:60}, {t:15, l:80}, // 4バック
        {t:35, l:20}, {t:35, l:40}, {t:35, l:60}, {t:35, l:80}, // 4MF
        {t:55, l:40}, {t:55, l:60} // 2FW
    ]
};

function switchFormation(type) {
    const hKey = document.getElementById('homeSelect').value;
    const homeTeamColor = teamData[hKey].color;
    const players = document.querySelectorAll(`#pitch .player.${homeTeamColor}`);
    
    // GK以外の10人を移動
    let i = 0;
    players.forEach((p) => {
        // 名前でGKを判定（簡易的）
        if (p.querySelector('.player-name').innerText.match(/Raya|Maekawa|Ter Stegen/)) return;
        
        if (formations[type][i]) {
            const pos = formations[type][i];
            p.style.transition = "all 0.8s cubic-bezier(0.19, 1, 0.22, 1)";
            p.style.top = (100 - pos.t) + "%";
            p.style.left = pos.l + "%";
            setTimeout(() => p.style.transition = "none", 800);
            i++;
        }
    });
}
