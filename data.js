const EXAM_DATE = '2026-11-28';

const syllabus = [
  {
    block:'general', title:'1. Constitució espanyola de 1978',
    tags:['general','normativa'],
    points:['Estructura i principis generals','Drets i deures fonamentals','Articles bàsics: 1, 9.3, 14, 18, 23, 24, 25, 53, 137, 140, 141 i 142'],
    task:'Fer esquema de títol preliminar + drets fonamentals.'
  },
  {
    block:'general', title:'2. Organització municipal',
    tags:['general','ajuntament'],
    points:['Òrgans necessaris i complementaris','Alcalde/essa, Ple, Junta de Govern Local i tinents d’alcalde','Atribucions dels òrgans necessaris'],
    task:'Taula Ple vs Alcaldia: atribucions i delegació.'
  },
  {
    block:'general', title:'3. Òrgans col·legiats locals',
    tags:['general','ple'],
    points:['Convocatòria i ordre del dia','Debats, votacions i quòrums','Actes i certificats d’acords'],
    task:'Practicar preguntes de quòrum, majoria simple i majoria absoluta.'
  },
  {
    block:'general', title:'4. Procediment administratiu comú',
    tags:['general','llei 39/2015'],
    points:['Concepte d’interessat','Fases del procediment','Terminis, notificacions, silenci i recursos'],
    task:'Memoritzar iniciació, ordenació, instrucció, finalització i execució.'
  },
  {
    block:'general', title:'5. Contractació administrativa',
    tags:['general','contractació'],
    points:['Concepte de contracte administratiu','Tipus de contractes','Contractes subjectes i no subjectes a regulació harmonitzada'],
    task:'Diferenciar serveis, subministraments, obres i concessions.'
  },
  {
    block:'general', title:'6. Gestió del servei públic',
    tags:['general','serveis públics'],
    points:['Gestió directa','Gestió indirecta','Relació amb serveis municipals i concessions'],
    task:'Fer mapa de gestió directa/indirecta amb exemples municipals.'
  },
  {
    block:'general', title:'7. Drets i deures dels empleats públics',
    tags:['general','EBEP'],
    points:['Classes d’empleats públics','Drets individuals i col·lectius','Deures, codi de conducta i confidencialitat'],
    task:'Fitxa de drets, deures i principis ètics.'
  },
  {
    block:'general', title:'8. Hisendes locals',
    tags:['general','tributs'],
    points:['Recursos dels municipis','Impostos, taxes i contribucions especials','Diferència taxa / preu públic / contribució especial'],
    task:'Fer taula IBI, IAE, IVTM, ICIO i IIVTNU.'
  },
  {
    block:'web', title:'Web municipal i continguts digitals',
    tags:['web','comunicació'],
    points:['Notícia web, agenda, avís, ban i pàgina informativa','Titular, subtítol, entradeta, cos, data, lloc i enllaços','Accessibilitat, llenguatge clar i estructura visual'],
    task:'Convertir un text brut en notícia web + agenda + xarxes.'
  },
  {
    block:'protocol', title:'Protocol institucional municipal',
    tags:['protocol','actes'],
    points:['Actes oficials i recepcions institucionals','Presidència, ordre d’intervencions i tractaments','Invitacions, disposició d’autoritats, fotografia i nota posterior'],
    task:'Dissenyar l’escaleta d’una recepció institucional.'
  },
  {
    block:'imatge', title:'Imatge institucional de Lloret',
    tags:['imatge','marca'],
    points:['Ús correcte del logotip o marca institucional','Jerarquia visual en cartells, pantalles i xarxes','Errors: deformació, mala llegibilitat, excés de text, fonts incoherents'],
    task:'Analitzar un cartell: què està bé, què falla i com millorar-lo.'
  },
  {
    block:'web', title:'Xarxes socials institucionals',
    tags:['xarxes','comunicació'],
    points:['To institucional clar i proper','Respostes a comentaris crítics','Informació de servei, crisis i actualitzacions'],
    task:'Redactar resposta institucional a 5 comentaris ciutadans.'
  }
];

const questions = [
  {cat:'general', q:'Quina és la seqüència correcta de fases del procediment administratiu comú?', a:['Iniciació, ordenació, instrucció, finalització i execució','Ordenació, iniciació, prova, notificació i recurs','Iniciació, resolució, instrucció i arxiu','Audiència, prova, informe i notificació'], correct:0, exp:'Les fases generals són iniciació, ordenació, instrucció, finalització i execució.'},
  {cat:'general', q:'Quin òrgan municipal és necessari en tots els ajuntaments?', a:['La comissió especial de comptes','El Ple','El consell sectorial de comunicació','La junta de portaveus'], correct:1, exp:'El Ple és un òrgan necessari, juntament amb l’alcaldia i altres segons població i règim aplicable.'},
  {cat:'general', q:'En una pregunta de taxes i preus públics, quina idea és més segura?', a:['La taxa sempre és voluntària','El preu públic mai el paga el ciutadà','La taxa es vincula a serveis o activitats administratives en determinades condicions legalment previstes','La contribució especial és igual que una multa'], correct:2, exp:'La taxa és un tribut; no s’ha de confondre amb preu públic ni sanció.'},
  {cat:'general', q:'Què cal vigilar en una pregunta sobre contractes harmonitzats?', a:['No tots els contractes públics estan subjectes a regulació harmonitzada','Tots els contractes menors són harmonitzats','Només les concessions poden ser harmonitzades','La regulació harmonitzada elimina la publicitat'], correct:0, exp:'La subjecció a regulació harmonitzada depèn del tipus de contracte i llindars, no del simple fet que sigui públic.'},
  {cat:'general', q:'Què és un interessat en un procediment?', a:['Qualsevol persona que llegeix una notícia municipal','Qui promou el procediment o pot veure afectats els seus drets o interessos legítims','Només el representant polític de l’àrea','Només qui paga una taxa'], correct:1, exp:'La idea clau és afectació de drets o interessos legítims, o promoció del procediment.'},
  {cat:'web', q:'Quin element és imprescindible en una entrada d’agenda municipal?', a:['Una opinió política extensa','Data, hora, lloc i informació essencial de l’activitat','Un text jurídic complet','Només una fotografia sense context'], correct:1, exp:'L’agenda és informació pràctica: què, quan, on i com participar.'},
  {cat:'web', q:'Quina diferència pràctica hi ha entre notícia web i avís?', a:['La notícia explica una actuació o fet amb context; l’avís informa d’una afectació o informació de servei','Són exactament el mateix','L’avís sempre ha de ser en anglès','La notícia no pot portar data'], correct:0, exp:'Una notícia contextualitza; un avís prioritza instrucció clara i servei.'},
  {cat:'web', q:'Quina és la millor entradeta per una notícia municipal?', a:['Un paràgraf llarg amb totes les dades tècniques','Una frase clara que resumeix què passa, quan, on i per què és rellevant','Una cita sense context','Un eslògan sense informació'], correct:1, exp:'La primera lectura ha de permetre entendre la informació essencial.'},
  {cat:'web', q:'Quina pràctica millora l’accessibilitat d’una publicació web?', a:['Posar tot el text dins una imatge','Fer servir enllaços amb text descriptiu','Eliminar tots els títols','Utilitzar només majúscules'], correct:1, exp:'Els enllaços descriptius i l’estructura amb títols faciliten lectura i accessibilitat.'},
  {cat:'web', q:'En xarxes institucionals, davant una queixa ciutadana correcta però crítica, què és millor?', a:['Respondre amb ironia','No contestar mai','Agrair l’avís, donar informació útil i derivar al canal corresponent si cal','Demanar que esborri el comentari'], correct:2, exp:'El to ha de ser institucional, útil i no confrontatiu.'},
  {cat:'protocol', q:'En una recepció institucional municipal, quin element ha d’estar previst abans de l’acte?', a:['Només la foto final','Objectiu, assistents, espai, ordre d’intervencions, tractaments i necessitats tècniques','Només el càtering','Només una publicació a Instagram'], correct:1, exp:'El protocol és planificació ordenada de l’acte, no només imatge.'},
  {cat:'protocol', q:'Quina és una escaleta coherent per una recepció institucional?', a:['Foto, marxar, discursos, benvinguda','Benvinguda, parlaments, lliurament o reconeixement, fotografia i tancament','Discurs ciutadà anònim i final sense foto','Només roda de premsa sense ordre'], correct:1, exp:'L’ordre ha de facilitar comprensió, solemnitat i comunicació posterior.'},
  {cat:'protocol', q:'En protocol municipal, qui presideix ordinàriament un acte de l’Ajuntament?', a:['La persona convidada més jove','L’alcalde/essa o autoritat municipal que correspongui','El fotògraf','La persona que arriba primer'], correct:1, exp:'La presidència correspon a l’autoritat municipal segons acte, delegació i representació.'},
  {cat:'protocol', q:'Quin error és habitual en una invitació institucional?', a:['Indicar data, hora i lloc','No concretar l’acte, l’hora o el lloc','Incloure entitat organitzadora','Fer-la clara i breu'], correct:1, exp:'La invitació ha de ser precisa i operativa.'},
  {cat:'imatge', q:'Quin error d’imatge institucional és més greu en un cartell?', a:['Fer jerarquia clara','Deformar el logotip o fer-lo il·legible','Indicar data i lloc','Usar contrast suficient'], correct:1, exp:'La marca institucional no s’ha de deformar ni perdre llegibilitat.'},
  {cat:'imatge', q:'Què cal revisar en adaptar un cartell a pantalla municipal?', a:['Només que sigui bonic','Llegibilitat, jerarquia, mida del text, contrast, data, lloc i web','Que tingui molt text petit','Que el QR sigui l’únic element'], correct:1, exp:'En pantalla cal lectura ràpida i dades essencials visibles.'},
  {cat:'imatge', q:'Quina opció és més institucional?', a:['Cinc tipografies diferents i molts efectes','Una composició clara, coherent amb la marca i amb informació essencial visible','Tot en majúscules i sense marges','Logotip estirat per omplir espai'], correct:1, exp:'La coherència visual reforça la credibilitat institucional.'},
  {cat:'imatge', q:'Quina és una bona jerarquia per una peça de comunicació?', a:['Títol, data/hora, lloc, informació complementària i web','Web en gran i títol amagat','Text legal abans del títol','Tots els elements amb la mateixa mida'], correct:0, exp:'La jerarquia guia la lectura i evita perdre informació essencial.'},
  {cat:'general', q:'Què és una acta d’un òrgan col·legiat?', a:['Un resum lliure sense valor formal','El document que recull el desenvolupament essencial de la sessió i els acords adoptats','Una notícia per xarxes','Una invitació de protocol'], correct:1, exp:'Les actes documenten formalment sessions i acords.'},
  {cat:'web', q:'Quin titular és millor per una notícia web municipal?', a:['Coses que passen aquest dissabte','Lloret celebra dissabte una jornada familiar al passeig marítim','Informació important','Nota de premsa general'], correct:1, exp:'És concret: subjecte, acció, data i lloc.'},
  {cat:'protocol', q:'Després d’un acte institucional, quina peça comunicativa és habitual?', a:['Una nota o notícia amb titular, context, assistents i fotografia','Una resposta sense data','Un formulari de contractació','Un decret'], correct:0, exp:'La comunicació posterior converteix l’acte en informació pública.'},
  {cat:'imatge', q:'Per què no convé posar massa text en una story o pantalla?', a:['Perquè la gent no sap llegir','Perquè el temps de lectura és curt i es perd la informació essencial','Perquè la marca ho prohibeix sempre','Perquè només es poden posar imatges'], correct:1, exp:'Cal prioritzar lectura ràpida: títol, data, lloc i crida.'},
  {cat:'general', q:'Quina afirmació és correcta sobre els empleats públics?', a:['Tots són eventuals','Poden ser funcionaris de carrera, interins, laborals o eventuals segons règim aplicable','Només existeixen funcionaris de carrera','No tenen deures de confidencialitat'], correct:1, exp:'L’EBEP diferencia diverses classes d’empleats públics.'},
  {cat:'web', q:'Quina resposta institucional és millor davant “No funciona l’enllaç de la notícia”?', a:['Doncs a mi sí','Gràcies per avisar. Ho revisem i actualitzarem l’enllaç tan aviat com sigui possible.','Això no és problema nostre','Esborrem el comentari'], correct:1, exp:'Resposta clara, amable, operativa i institucional.'}
];

const flashcards = [
  ['Interessat', 'Persona que promou un procediment o que pot veure afectats els seus drets o interessos legítims.'],
  ['Fases del procediment', 'Iniciació, ordenació, instrucció, finalització i execució.'],
  ['Ple municipal', 'Òrgan necessari que integra tots els regidors i exerceix atribucions rellevants de control, aprovació i decisió.'],
  ['Alcaldia', 'Òrgan unipersonal que presideix la corporació i dirigeix el govern i l’administració municipal.'],
  ['Quòrum', 'Nombre mínim de membres necessaris perquè un òrgan col·legiat es constitueixi o adopti acords vàlidament.'],
  ['Taxa', 'Tribut vinculat a determinats serveis o activitats administratives. No confondre amb preu públic.'],
  ['Notícia web', 'Peça informativa amb titular, entradeta, cos, context i dades essencials.'],
  ['Agenda', 'Fitxa pràctica d’activitat: què, quan, on i com participar.'],
  ['Avís', 'Comunicació breu i clara sobre una afectació o informació de servei.'],
  ['Ban', 'Comunicació formal d’alcaldia adreçada a la ciutadania.'],
  ['Entradeta', 'Primer resum d’una notícia: ha de respondre les preguntes bàsiques de manera clara.'],
  ['Llenguatge clar', 'Redacció entenedora, directa i orientada a la ciutadania.'],
  ['Accessibilitat web', 'Fer continguts comprensibles i navegables per al màxim nombre de persones.'],
  ['Protocol institucional', 'Conjunt de criteris que ordenen actes, precedències, intervencions i formes institucionals.'],
  ['Escaleta', 'Guió temporal d’un acte: arribada, obertura, parlaments, acció central, foto i tancament.'],
  ['Presidència de l’acte', 'Autoritat o càrrec que dirigeix formalment l’acte segons representació institucional.'],
  ['Ordre d’intervencions', 'Seqüència dels parlaments, habitualment pensada per jerarquia i coherència de l’acte.'],
  ['Imatge institucional', 'Criteris visuals i verbals que garanteixen coherència i reconeixement de l’Ajuntament.'],
  ['Jerarquia visual', 'Ordre de lectura: títol, data, lloc, informació secundària i crida final.'],
  ['Logotip deformat', 'Error greu: la marca no s’ha d’estirar, retallar o fer il·legible.'],
  ['Comunicació de crisi', 'Informació clara, actualitzada, prudent i útil davant una incidència.'],
  ['Xarxes institucionals', 'Canals de servei públic; to clar, respectuós i no partidista.'],
  ['Resposta a comentaris', 'Ha de ser útil, professional i en el mateix idioma del comentari quan sigui possible.'],
  ['Publicitat activa', 'Informació pública que l’administració ha de publicar sense sol·licitud prèvia.']
];

const practices = [
  {title:'Convertir una activitat en notícia web', text:'T’han passat un correu llarg sobre una activitat cultural. Prepara titular, subtítol, entradeta, cos breu, data, lloc i crida final.', checklist:['Titular concret','Entradeta amb informació essencial','Data/hora/lloc visibles','To institucional','Enllaç final o agenda']},
  {title:'Recepció institucional a una esportista local', text:'Dissenya el protocol d’una recepció a la sala de plens amb alcalde/essa, regidor/a, família i club esportiu.', checklist:['Objectiu de l’acte','Ordre d’arribada i salutacions','Parlaments','Lliurament o reconeixement','Foto final i nota posterior']},
  {title:'Anàlisi d’un cartell municipal', text:'Avalua un cartell que té molt text, logotip petit i data poc visible. Digues què falla i com l’adaptaries a pantalla 576×432.', checklist:['Jerarquia visual','Llegibilitat','Contrast','Data/lloc/web','Ús correcte de marca']},
  {title:'Resposta a una queixa a xarxes', text:'Un ciutadà escriu: “Sempre feu tard informant dels talls de carrer”. Redacta una resposta institucional breu.', checklist:['No discutir','Reconèixer la preocupació','Donar informació útil','Derivar si cal','To proper i professional']},
  {title:'Comunicat de servei públic', text:'Hi ha afectació temporal d’un equipament municipal per manteniment. Redacta avís web i versió de xarxes.', checklist:['Motiu','Durada o previsió','Serveis afectats','Alternatives o contacte','Actualització posterior']}
];

const plan = [
  {week:'12-18 octubre', focus:'Procediment administratiu + web municipal', tasks:['Interessats, fases, terminis i notificacions','Diferència notícia, agenda, avís i ban','1 pràctica de redacció web','1 test de 20 preguntes']},
  {week:'19-25 octubre', focus:'Organització municipal + protocol bàsic', tasks:['Alcalde, Ple i Junta de Govern','Recepcions, presidència i ordre d’intervencions','1 escaleta d’acte institucional','1 test temari general']},
  {week:'26 octubre-1 novembre', focus:'Òrgans col·legiats + imatge institucional', tasks:['Convocatòria, ordre del dia, quòrums i actes','Logotip, cartells, jerarquia visual','Analitzar 2 cartells','1 test barrejat']},
  {week:'2-8 novembre', focus:'Contractació + nota de premsa', tasks:['Tipus de contractes i conceptes bàsics','Titular, entradeta, cos i cita institucional','Redactar 1 nota de premsa','1 test de contractació + comunicació']},
  {week:'9-15 novembre', focus:'Empleats públics + xarxes/transparència', tasks:['Drets, deures i confidencialitat','Xarxes, comentaris, protecció de dades i informació pública','5 respostes a comentaris','1 pràctica de comunicació de crisi']},
  {week:'16-22 novembre', focus:'Hisendes locals + simulacres', tasks:['Taxes, impostos, contribucions especials i preus públics','Repàs web, protocol i imatge','2 simulacres de test','1 cas pràctic complet']},
  {week:'23-27 novembre', focus:'Repàs final', tasks:['Cap tema nou','Fitxes i errors','20 preguntes diàries','Repàs suau el dia abans']}
];