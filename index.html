<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Realistic Tactics Board 2026</title>
    <style>
        :root {
            --pitch-green: #2e7d32;
            --line-white: rgba(255, 255, 255, 0.8);
            --arsenal-red: #EF0107; --kobe-crimson: #800000; --barca-blue: #004D98;
            --bench-gray: #1a1a1a;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            display: flex; flex-direction: column; align-items: center;
            background-color: #050505; margin: 0; padding: 10px; color: white;
        }

        /* AI Prediction Panel - More Data-focused */
        #ai-prediction {
            position: fixed; top: 20px; right: 20px; width: 240px;
            background: rgba(20, 20, 20, 0.9); border: 1px solid #333;
            border-radius: 8px; padding: 15px; z-index: 1000;
            border-left: 4px solid #2ecc71;
        }
        .ai-header { font-size: 9px; color: #888; text-transform: uppercase; letter-spacing: 1px; }
        .match-up { font-size: 14px; font-weight: 800; margin: 5px 0; display: flex; justify-content: space-between; }
        .win-bar-container { height: 6px; background: #333; border-radius: 3px; overflow: hidden; display: flex; margin: 12px 0; }
        .win-bar-home { transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .win-bar-away { background: #444; transition: width 1.2s ease; }
        .prob-detail { display: flex; justify-content: space-between; align-items: baseline; }
        .prob-val { font-size: 20px; font-weight: 900; font-family: 'Courier New', monospace; }
        .prob-label { font-size: 9px; color: #666; }

        .team-selectors {
            display: flex; gap: 10px; margin-bottom: 20px; z-index: 10;
        }
        select { padding: 10px; border-radius: 4px; background: #222; color: white; border: 1px solid #444; font-weight: bold; }
        .btn-apply { background: #fff; color: #000; padding: 10px 20px; border-radius: 4px; border: none; cursor: pointer; font-weight: 800; text-transform: uppercase; }

        .main-wrapper { display: flex; flex-direction: row; gap: 15px; }
        #pitch-container { position: relative; padding: 15px 0; }
        #pitch {
            width: 440px; height: 640px; background-color: var(--pitch-green);
            background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.05) 40px);
            position: relative; border: 2px solid #fff;
        }
        .goal { position: absolute; left: 50%; transform: translateX(-50%); width: 75px; height: 10px; border: 2px solid #fff; background: rgba(255,255,255,0.05); }
        .goal-top { top: -10px; border-bottom: none; }
        .goal-bottom { bottom: -10px; border-top: none; }

        .line { position: absolute; border: 1.5px solid var(--line-white); pointer-events: none; }
        .center-line { top: 50%; width: 100%; transform: translateY(-50%); }
        .center-circle { top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90px; height: 90px; border-radius: 50%; }
        .penalty-area-top { top: 0; left: 18%; width: 64%; height: 14%; border-top: none; }
        .penalty-area-bottom { bottom: 0; left: 18%; width: 64%; height: 14%; border-bottom: none; }

        .bench-area {
            width: 140px; background: #111; border-radius: 4px; padding: 10px;
            display: flex; flex-direction: column; gap: 4px; border: 1px solid #222;
            height: 640px; overflow-y: auto;
        }
        .bench-label { font-size: 9px; color: #555; text-align: center; border-bottom: 1px solid #222; margin-bottom: 10px; }

        .player {
            width: 36px; height: 36px; color: white; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 10px; font-weight: 900; position: absolute;
            cursor: grab; z-index: 10; border: 1.5px solid #fff;
            transform: translate(-50%, -50%);
        }
        .player-name {
            position: absolute; top: 38px; background: #000; color: #fff;
            padding: 1px 4px; font-size: 8px; white-space: nowrap; pointer-events: none;
        }

        .bench-slot { position: relative; width: 36px; height: 36px; margin: 6px auto; }

        .color-ARS { background: var(--arsenal-red); }
        .color-VIS { background: var(--kobe-crimson); }
        .color-BAR { background: var(--barca-blue); border-color: #A31B37; }
    </style>
</head>
<body>

    <div id="ai-prediction">
        <div class="ai-header">Match Probability Engine 2.6</div>
        <div class="match-up"><span id="h-tag">HOME</span> vs <span id="a-tag">AWAY</span></div>
        <div class="win-bar-container"><div id="bar-h" class="win-bar-home"></div><div id="bar-a" class="win-bar-away"></div></div>
        <div class="prob-detail">
            <div><span class="prob-label">HOME WIN</span><div id="h-prob" class="prob-val">50%</div></div>
            <div style="text-align: right;"><span class="prob-label">AWAY WIN</span><div id="a-prob" class="prob-val">50%</div></div>
        </div>
        <div style="margin-top: 10px; font-size: 8px; color: #444; border-top: 1px solid #222; padding-top: 5px;">
            Factors: League Coeff, Elo Rating, Home Advantage
        </div>
    </div>

    <div class="team-selectors">
        <select id="homeSelect" onchange="updateAI()"><option value="VIS">Vissel Kobe</option><option value="ARS">Arsenal</option><option value="BAR">Barcelona</option></select>
        <select id="awaySelect" onchange="updateAI()"><option value="ARS" selected>Arsenal</option><option value="VIS">Vissel Kobe</option><option value="BAR">Barcelona</option></select>
        <button class="btn-apply" onclick="deployAll()">Update Analytics</button>
    </div>

    <div class="main-wrapper">
        <div class="bench-area" id="bench-away"><div class="bench-label">AWAY RESERVES</div></div>
        <div id="pitch-container">
            <div class="goal goal-top"></div>
            <div id="pitch">
                <div class="line center-line"></div>
                <div class="line center-circle"></div>
                <div class="line penalty-area-top"></div>
                <div class="line penalty-area-bottom"></div>
            </div>
            <div class="goal goal-bottom"></div>
        </div>
        <div class="bench-area" id="bench-home"><div class="bench-label">HOME RESERVES</div></div>
    </div>

    <script>
        // 2026 Reality Ratings (League Coefficient incorporated)
        const teamData = {
            VIS: { color: "color-VIS", elo: 1650, league: 0.75, starters: [{name:"Maekawa",num:1,pos:{t:5,l:50}},{name:"Thuler",num:3,pos:{t:15,l:60}},{name:"Yamakawa",num:4,pos:{t:15,l:40}},{name:"Sakai",num:24,pos:{t:22,l:85}},{name:"Diego",num:15,pos:{t:22,l:15}},{name:"Ideguchi",num:7,pos:{t:28,l:50}},{name:"Ogihara",num:6,pos:{t:35,l:65}},{name:"Sasaki",num:13,pos:{t:35,l:35}},{name:"Muto",num:11,pos:{t:45,l:80}},{name:"Osako",num:10,pos:{t:47,l:50}},{name:"Miyashiro",num:9,pos:{t:45,l:20}}], bench: [{name:"Gonda",num:71},{name:"Kikuchi",num:19},{name:"Hatsuse",num:11},{name:"Ide",num:18},{name:"Yuruqi",num:14},{name:"Patric",num:26},{name:"Jean",num:11}] },
            ARS: { color: "color-ARS", elo: 2050, league: 1.0, starters: [{name:"Raya",num:1,pos:{t:5,l:50}},{name:"Saliba",num:2,pos:{t:15,l:62}},{name:"Gabriel",num:6,pos:{t:15,l:38}},{name:"Timber",num:12,pos:{t:22,l:85}},{name:"Calafiori",num:33,pos:{t:22,l:15}},{name:"Zubimendi",num:36,pos:{t:28,l:50}},{name:"Rice",num:41,pos:{t:35,l:30}},{name:"Odegaard",num:8,pos:{t:35,l:70}},{name:"Saka",num:7,pos:{t:45,l:85}},{name:"Gyökeres",num:14,pos:{t:47,l:50}},{name:"Eze",num:10,pos:{t:45,l:15}}], bench: [{name:"Kepa",num:13},{name:"B.White",num:4},{name:"Tomiyasu",num:18},{name:"Merino",num:23},{name:"Nwaneri",num:22},{name:"Havertz",num:29},{name:"Martinelli",num:11}] },
            BAR: { color: "color-BAR", elo: 2010, league: 0.98, starters: [{name:"Ter Stegen",num:1,pos:{t:5,l:50}},{name:"Cubarsí",num:2,pos:{t:15,l:60}},{name:"Iñigo",num:5,pos:{t:15,l:40}},{name:"Koundé",num:23,pos:{t:22,l:85}},{name:"Balde",num:3,pos:{t:22,l:15}},{name:"Casadó",num:17,pos:{t:28,l:50}},{name:"Pedri",num:8,pos:{t:35,l:35}},{name:"Olmo",num:20,pos:{t:35,l:65}},{name:"Yamal",num:19,pos:{t:45,l:85}},{name:"Lewandowski",num:9,pos:{t:47,l:50}},{name:"Raphinha",num:11,pos:{t:45,l:15}}], bench: [{name:"Pena",num:13},{name:"Araujo",num:4},{name:"Gavi",num:6},{name:"De Jong",num:21},{name:"Fermin",num:16},{name:"Ansu",num:10}] }
        };

        function updateAI() {
            const hK = document.getElementById('homeSelect').value, aK = document.getElementById('awaySelect').value;
            const h = teamData[hK], a = teamData[aK];

            // Reality Engine: (Elo * League Weight) + Home Advantage
            const hScore = (h.elo * h.league) + 100; // +100 for home
            const aScore = (a.elo * a.league);

            const prob = Math.round((hScore / (hScore + aScore)) * 100);

            document.getElementById('h-prob').innerText = prob + "%";
            document.getElementById('a-prob').innerText = (100 - prob) + "%";
            document.getElementById('h-tag').innerText = hK;
            document.getElementById('a-tag').innerText = aK;
            document.getElementById('bar-h').style.width = prob + "%";
            document.getElementById('bar-h').style.backgroundColor = (hK==='VIS') ? '#800000' : (hK==='ARS' ? '#EF0107' : '#004D98');
        }

        function deployAll() {
            const pitch = document.getElementById('pitch');
            pitch.querySelectorAll('.player').forEach(el => el.remove());
            document.querySelectorAll('.bench-slot').forEach(el => el.remove());
            const hKey = document.getElementById('homeSelect').value, aKey = document.getElementById('awaySelect').value;
            const hT = teamData[hKey], aT = teamData[aKey];

            hT.starters.forEach(d => {
                const p = createP(hT.color, d); p.style.top = (100-d.pos.t)+'%'; p.style.left = d.pos.l+'%';
                pitch.appendChild(p);
            });
            hT.bench.forEach(d => {
                const s = document.createElement('div'); s.className = 'bench-slot';
                s.appendChild(createP(hT.color, d)); document.getElementById('bench-home').appendChild(s);
            });
            aT.starters.forEach(d => {
                const p = createP(aT.color, d); p.style.top = d.pos.t+'%'; p.style.left = (100-d.pos.l)+'%';
                pitch.appendChild(p);
            });
            aT.bench.forEach(d => {
                const s = document.createElement('div'); s.className = 'bench-slot';
                s.appendChild(createP(aT.color, d)); document.getElementById('bench-away').appendChild(s);
            });
            updateAI();
        }

        function createP(c, d) {
            const p = document.createElement('div'); p.className = `player ${c}`; p.innerText = d.num;
            const n = document.createElement('div'); n.className = 'player-name'; n.innerText = d.name;
            p.appendChild(n); return p;
        }

        let activePlayer = null, offset = { x: 0, y: 0 };
        function handleStart(e) {
            const t = e.target.closest('.player'); if (!t) return;
            activePlayer = t; const cX = e.touches ? e.touches[0].clientX : e.clientX, cY = e.touches ? e.touches[0].clientY : e.clientY;
            const r = activePlayer.getBoundingClientRect(); offset.x = cX - (r.left + r.width/2); offset.y = cY - (r.top + r.height/2);
            if (activePlayer.parentElement.classList.contains('bench-slot')) document.getElementById('pitch').appendChild(activePlayer);
            activePlayer.style.zIndex = 1000;
        }
        function handleMove(e) {
            if (!activePlayer) return; if (e.cancelable) e.preventDefault();
            const cX = e.touches ? e.touches[0].clientX : e.clientX, cY = e.touches ? e.touches[0].clientY : e.clientY;
            const pR = document.getElementById('pitch').getBoundingClientRect();
            activePlayer.style.left = (cX - pR.left - offset.x) + 'px'; activePlayer.style.top = (cY - pR.top - offset.y) + 'px';
        }
        function handleEnd() { if (activePlayer) { activePlayer.style.zIndex = 10; activePlayer = null; } }

        document.addEventListener('mousedown', handleStart); document.addEventListener('touchstart', handleStart, {passive: false});
        window.addEventListener('mousemove', handleMove, {passive: false}); window.addEventListener('touchmove', handleMove, {passive: false});
        window.addEventListener('mouseup', handleEnd); window.addEventListener('touchend', handleEnd);
        window.onload = deployAll;
    </script>
</body>
</html> 
