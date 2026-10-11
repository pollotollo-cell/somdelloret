const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

let state;
try { state = JSON.parse(localStorage.getItem('oposLloretProgress') || 'null') || {minutes:0,tests:0}; }
catch { state = {minutes:0,tests:0}; }
let currentQuiz = [];
let currentCard = 0;
let cardFlipped = false;

function save(){ localStorage.setItem('oposLloretProgress', JSON.stringify(state)); renderProgress(); }
function clamp(n,min,max){ return Math.max(min, Math.min(max,n)); }
function shuffle(arr){
  const copy = [...arr];
  for(let i = copy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderCountdown(){
  const [year, month, day] = EXAM_DATE.split('-').map(Number);
  const now = new Date();
  const todayDay = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const examDay = Date.UTC(year, month-1, day);
  const diff = Math.round((examDay - todayDay)/(1000*60*60*24));
  $('#daysLeft').textContent = diff > 0 ? diff : '0';
}
function renderProgress(){
  $('#studyMinutes').textContent = state.minutes;
  $('#testsDone').textContent = state.tests;
  const pct = clamp((state.minutes / (60*45))*100,0,100);
  $('#progressBar').style.width = pct + '%';
  $('#progressLabel').textContent = Math.round(pct) + '% de l\'objectiu';
  $('.progress-wrap').setAttribute('aria-valuenow', Math.round(pct));
}
function renderToday(){
  const day = new Date().getDay();
  const tasks = [
    'Repàs suau: 20 preguntes + 1 targeta de cada bloc.',
    'Temari general: procediment o organització municipal + 10 preguntes.',
    'Web municipal: redacta una notícia curta i revisa titulars.',
    'Protocol: fes una escaleta d’acte institucional.',
    'Imatge institucional: analitza una peça gràfica i detecta errors.',
    'Test barrejat de 20 preguntes + correcció d’errors.',
    'Pràctica llarga: cas de comunicació complet.'
  ];
  $('#todayTask').textContent = tasks[day];
}

function switchView(id){
  $$('.tab').forEach(b=>{ b.classList.toggle('active', b.dataset.view===id); if(b.dataset.view===id) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current'); });
  $$('.view').forEach(v=>v.classList.toggle('active', v.id===id));
}

function renderSyllabus(){
  const q = ($('#searchSyllabus')?.value || '').toLowerCase();
  const list = $('#syllabusList');
  list.innerHTML = '';
  const filtered = syllabus.filter(t => !q || (t.title+' '+t.points.join(' ')+' '+t.tags.join(' ')).toLowerCase().includes(q));
  $('#syllabusCount').textContent = `${filtered.length} blocs disponibles`;
  filtered.forEach((t, index)=>{
    const el = document.createElement('article');
    el.className = 'card topic';
    el.innerHTML = `<span class="topic-count">Bloc ${String(index+1).padStart(2,'0')} · ${t.block==='general' ? 'General' : 'Específic'}</span><h3>${t.title}</h3><div>${t.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div><ul>${t.points.map(p=>`<li>${p}</li>`).join('')}</ul><p class="muted"><strong>Tasca:</strong> ${t.task}</p>`;
    list.appendChild(el);
  });
  if (!list.children.length) list.innerHTML = '<p class="empty-state">No s\'ha trobat cap bloc amb aquest terme. Prova una altra cerca.</p>';
}

function generateQuiz(){
  const filter = $('#testFilter').value;
  const pool = questions.filter(q => filter === 'all' || q.cat === filter);
  currentQuiz = shuffle(pool).slice(0, Math.min(20, pool.length));
  const box = $('#quiz');
  box.innerHTML = '';
  currentQuiz.forEach((q,i)=>{
    const el = document.createElement('article');
    el.className='question';
    el.innerHTML = `<h3>${i+1}. ${q.q}</h3>` + q.a.map((op,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${String.fromCharCode(65+j)}. ${op}</label>`).join('') + `<p class="explain hidden"></p>`;
    box.appendChild(el);
  });
  $('#correctTest').classList.remove('hidden');
  $('#correctTest').disabled = false;
  $('#scoreBox').classList.add('hidden');
  $('#testMeta').textContent = `${currentQuiz.length} preguntes disponibles · correcció amb -0,25 per error`;
}

function correctQuiz(){
  if ($('#correctTest').disabled || !currentQuiz.length) return;
  let ok=0, bad=0, blank=0;
  $$('.question').forEach((el,i)=>{
    const q = currentQuiz[i];
    const selected = $(`input[name="q${i}"]:checked`);
    const options = $$('.option', el);
    options.forEach((opt,j)=>{
      opt.classList.toggle('correct', j===q.correct);
    });
    if(!selected){ blank++; }
    else if(Number(selected.value)===q.correct){ ok++; }
    else { bad++; options[Number(selected.value)].classList.add('wrong'); }
    const exp = $('.explain', el);
    exp.textContent = q.exp;
    exp.classList.remove('hidden');
  });
  const score = ok - bad*0.25;
  $('#scoreBox').innerHTML = `Resultat: ${ok} correctes · ${bad} errors · ${blank} en blanc · puntuació orientativa: ${score.toFixed(2)} / ${currentQuiz.length}`;
  $('#scoreBox').classList.remove('hidden');
  $('#correctTest').disabled = true;
  $$('#quiz input').forEach(input => input.disabled = true);
  state.tests += 1; save();
}

function renderCard(){
  const [q,a] = flashcards[currentCard];
  $('#flashQ').textContent = q;
  $('#flashA').textContent = a;
  $('#flashA').classList.toggle('hidden', !cardFlipped);
  $('#cardCounter').textContent = `Targeta ${currentCard + 1} de ${flashcards.length}`;
}

function renderPractices(){
  const list = $('#practiceList'); list.innerHTML='';
  practices.forEach(p=>{
    const el = document.createElement('article'); el.className='card topic';
    el.innerHTML = `<h3>${p.title}</h3><p>${p.text}</p><p><strong>Comprova:</strong></p><ul>${p.checklist.map(x=>`<li>${x}</li>`).join('')}</ul>`;
    list.appendChild(el);
  });
}
function renderPlan(){
  const list = $('#planList'); list.innerHTML='';
  plan.forEach(p=>{
    const el = document.createElement('article'); el.className='week';
    el.innerHTML = `<h3>${p.week}</h3><p><strong>${p.focus}</strong></p><ul>${p.tasks.map(x=>`<li>${x}</li>`).join('')}</ul>`;
    list.appendChild(el);
  });
}

$$('.tab').forEach(btn=>btn.addEventListener('click',()=>switchView(btn.dataset.view)));
$('#markStudy').addEventListener('click',()=>{state.minutes += 60; save();});
$('#resetProgress').addEventListener('click',()=>{ if(confirm('Vols reiniciar el progrés?')){ state.minutes=0; state.tests=0; save(); }});
$('#startQuickTest').addEventListener('click',()=>{switchView('tests'); generateQuiz();});
$('#newTest').addEventListener('click',generateQuiz);
$('#correctTest').addEventListener('click',correctQuiz);
$('#searchSyllabus').addEventListener('input',renderSyllabus);
$('#flashcardBox').addEventListener('click',()=>{cardFlipped=!cardFlipped; renderCard();});
$('#flashcardBox').addEventListener('keydown',(e)=>{if(e.key==='Enter' || e.key===' '){e.preventDefault();cardFlipped=!cardFlipped;renderCard();}});
$('#nextCard').addEventListener('click',()=>{currentCard=(currentCard+1)%flashcards.length; cardFlipped=false; renderCard();});
$('#prevCard').addEventListener('click',()=>{currentCard=(currentCard-1+flashcards.length)%flashcards.length; cardFlipped=false; renderCard();});
$('#shuffleCards').addEventListener('click',()=>{const mixed = shuffle(flashcards); flashcards.splice(0, flashcards.length, ...mixed); currentCard=0; cardFlipped=false; renderCard();});

if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js').catch(()=>{}); }
renderCountdown(); renderProgress(); renderToday(); renderSyllabus(); renderCard(); renderPractices(); renderPlan();