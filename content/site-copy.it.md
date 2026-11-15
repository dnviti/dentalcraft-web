# DentalCraft - Testi del sito (IT)

Stato: bozza. Visione e presentazione sono tenute separate: "Presentazione" descrive ciò che esiste oggi; tutto il resto è intenzione.

**Sorgente della build:** il sito è generato da `content/site.en.json`, `content/site.it.json` (stesse chiavi, piatte) e `content/site.data.json` (stati). Questo file è il testo editoriale: tenere i tre allineati. La build fallisce se le chiavi EN e IT differiscono.

---

## Globale

**Avviso obbligatorio (banner fisso sotto l'header, ripetuto in hero, Download e footer):**
> In sviluppo. Non è un dispositivo medico. Non per uso clinico.

**Badge di stato:** In sviluppo
**Etichette usate nel sito:** `Esiste oggi` / `In corso` / `Pianificato`

### SEO / Open Graph
- **Title SEO (<=60 car.):** DentalCraft - CAD dentale per allineatori, in sviluppo
- **Meta description (<=155 car.):** Un CAD dentale per studi e laboratori. Si parte dagli allineatori, dalla scansione intraorale alla stampa. In sviluppo. Non è un dispositivo medico.
- **Titolo OG:** DentalCraft - CAD dentale per allineatori, in sviluppo
- **Descrizione OG:** Si parte dagli allineatori, dalla scansione intraorale alla stampa. Fase iniziale. Non è un dispositivo medico, non per uso clinico.
- **Alt immagine OG:** Logo DentalCraft con le icone dei cinque ambiti di lavoro: allineatori, modelli, bite, corone e ponti, implantologia.
- **Parole chiave (opz.):** CAD dentale, allineatori, software ortodonzia, scansione intraorale, STL, Linux, Windows

### Navigazione
Presentazione / Visione / Allineatori / In programma / In pratica / Normativa / Download / FAQ
**Pulsante header:** Prova l'alpha
**Cambio lingua:** EN | IT

---

## 1. Hero

- **Badge:** In sviluppo
- **Titolo:** Un nuovo CAD dentale per studio e laboratorio.
- **Sottotitolo:** DentalCraft è un'applicazione per l'odontoiatria digitale, da installare sul computer dello studio o del laboratorio. Si parte dalla pianificazione degli allineatori; altri ambiti di lavoro sono previsti in seguito.
- **CTA primaria:** Guarda la presentazione
- **CTA secondaria:** Prova l'alpha
- **Avviso (ben visibile, sotto le CTA):** In sviluppo. Non è un dispositivo medico. Non per uso clinico.
- **Microcopy:** Fase iniziale. Prima Linux e Windows. Made in Italy.
- **Alt immagine hero:** Vista 3D stilizzata di un'arcata superiore in DentalCraft, con i denti contornati e numerati.

---

## 2. Presentazione - cosa esiste oggi

- **Etichetta sezione:** Presentazione
- **Titolo:** Che cos'è DentalCraft e a che punto siamo
- **Testo:**
  DentalCraft è un CAD dentale. Nasce da uno strumento per la pianificazione degli allineatori ortodontici che l'autore aveva già realizzato: ne riprende il lavoro e lo trasforma in un'applicazione dedicata, autonoma e più veloce. L'impostazione è quella delle suite CAD dentali professionali: una base comune e, sopra, un ambito per ogni tipo di lavoro.

  Il progetto è in fase iniziale. L'alpha copre già il percorso dall'importazione delle scansioni a un primo piano: trovare e separare i denti, costruire i denti 3D, analizzare il caso, registrare il morso, impostare una posizione finale, pianificare gli allineatori e preparare i file per la stampa. Pianificazione e produzione sono ancora in validazione rispetto allo strumento di partenza: non fare affidamento sui loro risultati.
- **Elenco di stato (con etichette):**
  - Struttura dell'applicazione - `Esiste oggi`
  - File unico per ogni caso, salvato in automatico - `Esiste oggi`
  - Vista 3D con selezione, spostamento, rotazione e scala - `Esiste oggi`
  - Importazione delle scansioni, con chiusura automatica di quelle aperte - `Esiste oggi`
  - Trovare i denti, separare denti e gengiva, denti 3D - `Esiste oggi`
  - Analisi del caso e morso - `Esiste oggi`
  - Posizione finale, allineatori e revisione clinica - `In corso`
  - Produzione ed esportazione per la stampa - `In corso`
  - Installer con aggiornamenti automatici - `Esiste oggi`
  - Comandi per script e agenti IA - `Esiste oggi`

### Blocco video
- **Titolo:** La presentazione in 75 secondi
- **Didascalia:** Una panoramica breve del progetto e della sua direzione. Le animazioni nel video sono illustrazioni concettuali del flusso di lavoro previsto.
- **Pulsante play:** Riproduci il video
- **Segnaposto (finché il video non è pronto):** Video in arrivo
- **Alt/aria-label del video:** Video di presentazione di DentalCraft, circa 75 secondi, con testi in inglese e sottotitoli in italiano.
- **Link trascrizione:** Leggi la trascrizione

### Schermate
- **Titolo:** L'applicazione oggi
- **Nota:** Le schermate mostrano un lavoro in corso e cambieranno.
- **Schermata 1 - Home**
  - Didascalia: Schermata iniziale. Lavoro in corso.
  - Alt: Schermata iniziale di DentalCraft con l'elenco dei casi e l'accesso agli Allineatori.
- **Schermata 2 - Area Allineatori**
  - Didascalia: Area di lavoro Allineatori con la vista 3D. Lavoro in corso.
  - Alt: Area di lavoro Allineatori di DentalCraft con una scansione dentale in vista 3D e, a lato, le fasi del lavoro.
- **Badge su ogni immagine:** Lavoro in corso

*(Gli alt descrivono le schermate previste; adattarli alle catture finali.)*

---

## 3. Visione / Intenzioni

- **Etichetta sezione:** Visione
- **Banner:** Quanto segue è un'intenzione, non la descrizione di funzioni già pronte.
- **Titolo:** Perché un nuovo CAD dentale
- **Testo:**
  Pianificare in digitale significa passare molte ore su scansioni e modelli 3D pesanti. Crediamo che lo strumento debba restare veloce, restare sul tuo computer e restare sotto il controllo del clinico. DentalCraft nasce su queste idee.

- **Principi (card):**
  1. **Fluido anche con scansioni pesanti.** L'obiettivo: lavorare sul modello 3D senza blocchi, anche con scansioni di grandi dimensioni.
  2. **Senza dipendere dalla connessione.** I casi restano sul tuo computer. Per lavorare non dovrebbe servire internet.
  3. **Un solo file per ogni caso.** Tutto il caso in un unico file, aperto e documentato, con un controllo di integrità.
  4. **Dati paziente pseudonimizzati.** I file dei casi sono pensati per non contenere i nomi dei pazienti.
  5. **In italiano e in inglese.** Entrambe le lingue fin dall'inizio.
  6. **Prima Linux e Windows.** macOS in seguito.
  7. **Approccio regolatorio fin dall'inizio.** Requisiti, gestione del rischio e tracciabilità sono parte del lavoro.
  8. **Indipendente e made in Italy.** Un solo autore, una visione di lungo periodo.
- **Microcopy:** Sono intenzioni di progetto. Indicano la direzione, non lo stato attuale.

---

## 4. Area Allineatori

- **Etichetta sezione:** Allineatori - primo ambito
- **Banner:** Stato di ogni fase nell'alpha. Pianificazione, produzione ed esportazione sono ancora in sviluppo: i loro risultati non sono validati e non vanno usati sui pazienti.
- **Titolo:** Dalla scansione all'allineatore, in un'unica area di lavoro
- **Testo:** L'area Allineatori segue il percorso clinico dalla scansione intraorale ai file per la stampa. Le fasi sono raggruppate come nel menu dell'applicazione e ognuna dice che cosa fa già l'alpha.
- **Legenda:** `Esiste oggi` = funziona nell'alpha, versione iniziale, non validata per l'uso clinico. `In corso` = in parte disponibile, in lavorazione o in validazione. `Pianificato` = non ancora avviato (mostrato solo se una fase lo ha).

| Gruppo | Che cosa fa l'alpha | Stato |
|---|---|---|
| **Caso** | Importazione delle scansioni intraorali (STL, OBJ, PLY). Una scansione aperta viene chiusa in automatico con una base piana. Scelta dell'arcata a mano e capovolgimento del lato occlusale. | Esiste oggi |
| **Preparazione** | Trovare i denti e numerarli (FDI), con segni che puoi aggiungere, eliminare o rinumerare a mano, e denti mancanti. Separare denti e gengiva, con un pennello e la pulizia dei bordi per le correzioni. Denti 3D, ciascuno un modello chiuso, con una gengiva che li segue. Vedere la zona e la linea di margine di un dente. | Esiste oggi |
| **Diagnosi** | Analisi del caso: spazio, affollamento, indice di irregolarità di Little, Bolton e complessità del caso. Puoi inserire i tuoi valori misurati e i risultati li seguono. | Esiste oggi |
| **Pianificazione** | Posizione finale, con parametri, linea d'arcata disegnata a mano, spostamento di un dente e ritorno alla posizione iniziale. Allineatori: stadi, calendario dei cambi, rallentare un dente, cursore degli stadi. Revisione clinica con attacchi e segni di riduzione interprossimale (IPR). | In corso |
| **Occlusione** | Relazione sul morso, scansioni del morso, registrazione sulla scansione del morso o con tre punti scelti a mano, correzione del morso e mappa dei contatti. | Esiste oggi |
| **Produzione allineatori** | Impostazioni di produzione (spessore, gioco, qualità), dove termina l'allineatore, linea di rifilatura con ponti di contatto, fori e controlli, marcature identificative, morso con gli allineatori. L'allineatore si può vedere in anteprima nella vista 3D, solo quando lo chiedi. I file ad alta qualità richiedono ancora molto tempo. | In corso |
| **Follow-up** | Visita di controllo: confronta una nuova scansione con il piano e ripianifica a partire da un allineatore consegnato. Il controllo dente per dente non c'è ancora. | In corso |
| **Esportazione** | Esporta per la stampa: file STL di ogni stadio (allineatori e modelli), calendario dei cambi, relazione e programma per il paziente. Modelli da studio, mostrati anche nella vista 3D. | In corso |

*(Regola: DONE in `docs/plan/PORT-GAP-MAP.md` è Esiste oggi, PARTIAL è In corso. Pianificazione e produzione non sono mai mostrate come validate. Il sito legge gli stati da `content/site.data.json`.)*

- **Microcopy dei gruppi:**
  - Caso: Si parte dalla scansione.
  - Preparazione: Scansioni pronte per la pianificazione.
  - Diagnosi: Misurare prima di muovere.
  - Pianificazione: Definire obiettivo e tappe. In sviluppo: non usare i risultati sui pazienti.
  - Occlusione: Verificare come si incontrano le arcate.
  - Produzione allineatori: Preparare il guscio per la stampa. In sviluppo.
  - Follow-up: Confrontare piano e andamento. Versione iniziale.
  - Esportazione: File e relazioni. In completamento.
- **Alt schema del flusso:** Flusso in otto passaggi da Caso a Esportazione, ciascuno indicato come esiste oggi o in corso.

---

## 5. In programma

- **Etichetta sezione:** In programma
- **Titolo:** Una sola applicazione, più ambiti di lavoro
- **Testo:** DentalCraft avrà una base comune e, sopra, un ambito per ogni tipo di lavoro. Gli Allineatori vengono per primi. Gli altri sono pianificati, senza date.
- **Ambiti:**
  - **Allineatori** - Primo ambito. In sviluppo attivo: dalla scansione al morso funziona già nell'alpha; pianificazione e produzione sono ancora in validazione.
  - **Model Builder** - Pianificato.
  - **Bite** - Pianificato.
  - **Corone e ponti** - Pianificato.
  - **Implantologia** - Pianificato.
- **Microcopy:** Non sono annunciate date di uscita. Ordine e contenuti possono cambiare.
- **Alt sezione In programma:** Riga di cinque schede: Allineatori in sviluppo, poi Model Builder, Bite, Corone e ponti, Implantologia come pianificati.

---

## 6. Lavoro e dati

- **Etichetta sezione:** In pratica
- **Titolo:** Il tuo lavoro, i tuoi dati
- **Testo:** Scelte pensate per la velocità, il controllo e la tracciabilità del lavoro.
- **Voci:**
  - **Un'applicazione sul tuo computer.** Si installa e si usa sul computer dello studio o del laboratorio, senza passare dal browser. Gli installer per Linux e Windows controllano gli aggiornamenti e chiedono prima di installarli.
  - **Vista 3D fluida.** Fai clic su un dente, sulla gengiva o su una scansione per selezionarlo e vederlo evidenziato, poi sposta, ruota o ridimensiona nella vista. Pensata per restare fluida anche con le scansioni più dettagliate.
  - **Un file per ogni caso.** Un file aperto e documentato, con un controllo di integrità. Si salva da solo poco dopo ogni modifica, e ogni volta che salvi.
  - **Privacy fin dalla progettazione.** I dati dei pazienti sono pseudonimizzati: nessun nome nei file dei casi.
  - **I casi restano da te.** Si lavora sui casi salvati sul tuo computer. L'account è previsto solo per licenze e assistenza.
  - **In due lingue.** Italiano e inglese.
  - **Comandabile da script e agenti IA.** Ogni azione è anche un comando di dentalcraft-cli e del suo server MCP: script e agenti di intelligenza artificiale possono eseguire gli stessi passaggi.
  - **Niente resta indietro senza dirlo.** Quando cambi un passaggio, i risultati successivi che ne dipendono vengono segnalati come non aggiornati.
- **Microcopy:** Pubblicheremo i dettagli quando il formato del file sarà definitivo.

---

## 7. Posizione normativa

- **Etichetta sezione:** Normativa
- **Titolo:** Chiari su dove siamo
- **Testo:**
  DentalCraft non è un dispositivo medico e non è certificato. Non deve essere usato a scopo clinico.

  Il progetto è costruito con un approccio regolatorio: requisiti, gestione del rischio e tracciabilità sono stati ripresi dal lavoro precedente. L'intenzione è seguire il percorso di conformità appropriato per i dispositivi medici quando il software sarà pronto. È un'intenzione, non uno stato.
- **Riquadro:** In sviluppo. Non è un dispositivo medico. Non per uso clinico.

---

## 8. Download - Prova la versione alpha

- **Etichetta sezione:** Download
- **Rail:** Alpha, da provare
- **Titolo:** Prova la versione alpha
- **Testo:** Una prima versione di prova per Linux e Windows. È in sviluppo: molte funzioni mancano e può cambiare o smettere di funzionare da una versione all'altra.
- **Card delle piattaforme:**
  - **Linux** - tag Alpha. Pulsante: Scarica per Linux (apre la pagina di download, `#linux`). Requisiti: PC a 64 bit (x86_64). Con installer (Flatpak, Fedora, Debian e Ubuntu, AppImage) o senza installazione.
  - **Windows** - tag Alpha. Pulsante: Scarica per Windows (apre la pagina di download, `#windows`). Requisiti: Windows 10 o 11 a 64 bit. Con installer o senza installazione.
  - **macOS** - tag In seguito. Pulsante (disattivato): Non ancora disponibile
- **Sotto ogni card scaricabile:** Versione {version} · {date}. Dimensioni e checksum sono nella pagina di download (sezione 13).
- **Sotto le card:** Windows potrebbe dire che l'editore è sconosciuto: i file non sono ancora firmati. Scegli «Ulteriori informazioni», poi «Esegui comunque». / Gratuita con la licenza DentalCraft, così com'è e senza garanzia. Non è un dispositivo medico: non usarla sui pazienti né per decisioni cliniche. [Licenza: link alla pagina della licenza] / Tutti i checksum (file di testo)
- **Modulo di avviso:** rimosso (decisione: nessun back end, nessuna raccolta dati). Una nota sotto le card dice: Questo sito non ha moduli e non raccoglie dati. Leggi la nota sulla privacy.
- **Problemi o suggerimenti:** hello@dentalcraft.app
- **Avviso:** In sviluppo. Non è un dispositivo medico. Non per uso clinico.

---

## 9. FAQ

1. **DentalCraft è disponibile?**
   Una versione alpha per Linux e Windows si può scaricare dalla pagina iniziale, gratuitamente, per uso non clinico (valutazione, formazione, ricerca e prove di progettazione). È in fase iniziale di sviluppo: non è un dispositivo medico e non è per uso clinico. Permette già di importare le scansioni, trovare e separare i denti, costruire i denti 3D, analizzare il caso, registrare il morso, impostare una posizione finale, pianificare gli allineatori e preparare i file per la stampa. Pianificazione e produzione sono ancora in sviluppo.

2. **È certificato? È un dispositivo medico?**
   No. DentalCraft non è un dispositivo medico e non ha alcuna certificazione. Non è per uso clinico. Lo sviluppo segue un approccio regolatorio e l'intenzione è percorrere in futuro il percorso di conformità appropriato.

3. **Su quali computer funzionerà?**
   Prima su Linux e Windows. macOS in seguito.

4. **È gratuito?**
   Sì. L'alpha si può scaricare e usare gratuitamente, per uso non clinico, con la licenza DentalCraft. I termini sono nella pagina della licenza.

5. **Che fine fanno i dati dei pazienti?**
   I casi sono pensati per restare sul tuo computer. I file dei casi sono pseudonimizzati e non contengono nomi di pazienti. L'account è previsto solo per licenze e assistenza.

6. **Posso provarlo?**
   Sì. Una versione alpha per Linux e Windows si può scaricare dalla pagina iniziale, gratuitamente, per uso non clinico: valutazione, formazione, ricerca e prove di progettazione. È fornita così com'è. Non è un dispositivo medico e non è per uso clinico.

7. **Che cosa sa fare oggi?**
   Il primo ambito è Allineatori, per la pianificazione degli allineatori trasparenti. La pagina iniziale elenca ogni fase con il suo stato. Dall'importazione delle scansioni al morso funziona già nell'alpha; posizione finale, allineatori, revisione clinica, produzione ed esportazione sono ancora in sviluppo e i loro risultati non sono validati: non vanno usati sui pazienti.

8. **Quali file posso usare?**
   Puoi importare scansioni in STL, OBJ e PLY; le scansioni aperte vengono chiuse automaticamente con una base. «Esporta per la stampa» scrive i file STL di ogni stadio, con il calendario dei cambi e una relazione: questa funzione è ancora in completamento. Ogni caso si salva in un unico file aperto, in automatico poco dopo ogni modifica e ogni volta che salvi.

9. **Posso usarlo da script o con un agente di intelligenza artificiale?**
   Sì. Ogni azione dell'applicazione è anche un comando dello strumento dentalcraft-cli, incluso nei download senza installazione e negli installer, e del suo server MCP: uno script o un agente di intelligenza artificiale può eseguire gli stessi passaggi.

10. **Come si aggiorna?**
    Le versioni Flatpak, Fedora e Debian/Ubuntu si aggiornano con il sistema. Tutte le altre controllano questo sito all'avvio di DentalCraft, chiedono prima di aggiornare e verificano la firma dell'aggiornamento prima di installarlo.

---

## 10. Footer

- **Tagline:** CAD dentale per studio e laboratorio. Made in Italy.
- **Avviso:** In sviluppo. Non è un dispositivo medico. Non per uso clinico.
- **Etichetta contatti:** Contatti
- **Contatto:** hello@dentalcraft.app
- **Link:** Presentazione / Visione / In programma / Download / FAQ
- **Licenza:** Licenza (link alla pagina della licenza)
- **Nota privacy:** Nota sulla privacy (link alla pagina Su, sezione Privacy)
- **Copyright:** © 2026 Daniele Viti
- **Cambio lingua:** English | Italiano

---

## Etichette dei pulsanti (indice)
Guarda la presentazione / Prova l'alpha / Riproduci il video / Leggi la trascrizione / Non ancora disponibile / Scrivici

## Note
- Segnaposto: alt definitivi delle schermate.
- Nessuna data, prezzo, cliente, certificazione o dato di prestazione è riportato.

---

## 11. Nuove chiavi (aggiunte per la build del sito)

| Key | Text |
|---|---|
| `disclaimer.band` | In sviluppo · Non è un dispositivo medico · Non per uso clinico |
| `disclaimer.link` | Posizione normativa |
| `a11y.skip` | Vai al contenuto |
| `presentation.rail` | Cosa esiste oggi |
| `presentation.status.title` | Stato, oggi |
| `video.kicker` | DentalCraft / Presentazione |
| `video.poster.title` | Un nuovo CAD dentale per studio e laboratorio. |
| `video.meta` | Circa 75 secondi. Testi in inglese, sottotitoli in italiano. |
| `vision.rail` | Intenzioni, non funzioni |
| `roadmap.rail` | Nessuna data annunciata |
| `roadmap.core.label` | Base comune |
| `roadmap.core.items` | Struttura dell'applicazione, file unico per ogni caso (salvato in automatico), vista 3D con selezione, spostamento, rotazione e scala |
| `roadmap.m1.note` | Primo ambito. In sviluppo attivo: dalla scansione al morso funziona già nell'alpha; pianificazione e produzione sono ancora in validazione. |
| `aligners.rail` | Primo ambito |
| `aligners.legend.exists` | Funziona nell'alpha. Versione iniziale, non validata per l'uso clinico. |
| `aligners.legend.inprogress` | In parte disponibile. In lavorazione o in validazione. |
| `aligners.legend.planned` | Non ancora avviato. |
| `downloads.rail` | Alpha, da provare |
| `downloads.terms` | Gratuita con la licenza DentalCraft, così com'è e senza garanzia. Non è un dispositivo medico: non usarla sui pazienti né per decisioni cliniche. |
| `downloads.terms.link` | Licenza |
| `downloads.note` | Questo sito non ha moduli e non raccoglie dati. Leggi la nota sulla privacy. |
| `technology.rail` | Lavoro e dati |
| `regulatory.rail` | Posizione normativa |
| `faq.headline` | Domande, risposte chiare |
| `footer.links.label` | Sito |
| `footer.language.label` | Lingua |
| `privacy.label` | Privacy |
| `privacy.rail` | Nota sulla privacy |
| `privacy.headline` | Niente cookie, niente tracciamento, niente moduli |
| `privacy.body.1` | Questo sito non imposta cookie, non usa strumenti di analisi o tracciamento, non carica nulla da terze parti e non ha moduli. Non raccogliamo dati personali tramite il sito. La lingua scelta resta solo nel tuo browser, così il sito può aprirsi nella tua lingua la volta successiva. |
| `privacy.body.2` | Come ogni sito web, anche questo può conservare i normali registri di accesso (indirizzo IP, ora, pagina richiesta) per sicurezza e diagnosi. Se scrivi a hello@dentalcraft.app, useremo il tuo messaggio solo per risponderti. |
| `footer.licence` | Licenza |
| `footer.privacy` | Nota sulla privacy |

## 12. Pagina Licenza (`/it/licence/`)

La pagina rende `content/licence.md` (il contratto di licenza d'uso, parte italiana e parte inglese, testo invariato). Ogni pagina linguistica mostra la propria parte. La pagina italiana rimanda alla traduzione inglese.

| Chiave | Testo |
| --- | --- |
| `meta.licence.title` | Licenza - Contratto di licenza d'uso di DentalCraft |
| `meta.licence.description` | Il contratto di licenza d'uso di DentalCraft: gratuito per uso non clinico, così com'è e senza garanzia. Non è un dispositivo medico. |
| `meta.licence.ogTitle` | Licenza - Contratto di licenza d'uso di DentalCraft |
| `meta.licence.ogDescription` | DentalCraft è gratuito per uso non clinico con questa licenza. Non è un dispositivo medico e non è per uso clinico. |
| `licence.label` | Licenza |
| `licence.rail` | Contratto di licenza d'uso |
| `licence.note` | Questo testo italiano prevale in caso di contrasto. Leggi la traduzione inglese. |
| `licence.note.link` | traduzione inglese |
| `licence.meta.version` | Versione |
| `licence.meta.licensor` | Licenziante |
| `licence.meta.contact` | Contatto |

## 13. Pagina di download (`/it/download/`)

Una card per sistema operativo (Linux, Windows, macOS in seguito), ognuna con due colonne: **Installer** e **Senza installazione**. Compaiono solo i tipi presenti nella versione; una colonna vuota mostra il pulsante disattivato "Non ancora disponibile". Ogni file mostra Versione {version} · {size} · {date} · nome del file e la nota chiusa con lo SHA-256. I comandi da terminale hanno il pulsante Copia. Windows aggiunge la nota su SmartScreen (`downloads.smartscreen`). Sotto le card: le condizioni, il blocco Firme con l'impronta della chiave di rilascio e i link alle due chiavi pubbliche e al file dei checksum, poi l'avviso.

| Chiave | Testo |
| --- | --- |
| `downloads.version` | Versione {version} · {date} |
| `dl.rail` | Installer o senza installazione |
| `dl.headline` | Scarica DentalCraft |
| `dl.body` | Scegli come averlo. L'installer aggiunge DentalCraft al computer e lo tiene aggiornato. La versione senza installazione funziona da una cartella che estrai, senza installare nulla. |
| `dl.updates` | Aggiornamenti: le versioni Flatpak, Fedora e Debian/Ubuntu si aggiornano con il sistema. Tutte le altre controllano questo sito all'avvio di DentalCraft, chiedono prima di aggiornare e verificano la firma dell'aggiornamento prima di installarlo. |
| `dl.req.linux` | PC a 64 bit (x86_64). |
| `dl.req.windows` | Windows 10 o 11 a 64 bit. |
| `dl.installer` | Installer |
| `dl.standalone` | Senza installazione |
| `dl.installer.linux` | Scegli quello adatto al tuo sistema. DentalCraft compare poi nel menu delle applicazioni. |
| `dl.installer.windows` | Aggiunge DentalCraft al menu Start e ad App e funzionalità, da dove puoi anche rimuoverlo. |
| `dl.standalone.linux` | Un archivio da estrarre in qualsiasi cartella. Apri il file dentalcraft che contiene. Non viene installato nulla. |
| `dl.standalone.windows` | Una cartella zip da estrarre ovunque, anche su una chiavetta USB. Apri dentalcraft.exe che contiene. Non viene installato nulla. |
| `dl.recommended` | Consigliato |
| `dl.copy` / `dl.copied` | Copia / Copiato |
| `dl.terminal` | Oppure, nel terminale: |
| `dl.flatpak.title` | Flatpak, qualsiasi distribuzione |
| `dl.flatpak.body` | Funziona in un ambiente isolato e si aggiorna con le altre app Flatpak. I centri software come GNOME Software e KDE Discover aprono direttamente il link. |
| `dl.flatpak.open` | Apri nel centro software |
| `dl.dnf.title` | Fedora (dnf) |
| `dl.dnf.body` | Nel terminale aggiungi una volta il repository di DentalCraft, poi installa. dnf ti chiede di accettare la chiave di firma: controlla che l'impronta sia quella in fondo a questa pagina. |
| `dl.rpm.link` | Oppure scarica il pacchetto .rpm |
| `dl.apt.title` | Debian e Ubuntu (apt) |
| `dl.apt.body` | Nel terminale aggiungi una volta la chiave di firma e il repository, poi installa. |
| `dl.deb.link` | Oppure scarica il pacchetto .deb |
| `dl.appimage.title` / `.body` / `.get` | AppImage / Un unico file per qualsiasi distribuzione. Rendilo eseguibile, poi aprilo. / Scarica l'AppImage |
| `dl.exe.title` / `.body` / `.get` | Setup / Installa solo per il tuo utente, senza diritti di amministratore. Durante l'installazione puoi aggiungere un collegamento sul desktop. / Scarica il setup (.exe) |
| `dl.msi.title` / `.body` / `.get` | Pacchetto MSI, per gli amministratori IT / Installa per tutti gli utenti del PC e richiede i diritti di amministratore. / Scarica l'MSI |
| `dl.msi.silent` | Installazione silenziosa, da un prompt di amministratore: |
| `dl.targz.title` / `.body` / `.get` | Archivio (.tar.gz) / Estrailo, poi apri dentalcraft. / Scarica l'archivio |
| `dl.zip.title` / `.body` / `.get` | Cartella (.zip) / Estraila, poi apri dentalcraft.exe. / Scarica lo zip |
| `dl.keys.title` | Firme |
| `dl.keys.body` | Pacchetti e repository sono firmati con la chiave di rilascio di DentalCraft. Gli aggiornamenti sono firmati con una chiave separata, che DentalCraft verifica prima di installarli. |
| `dl.keys.fpr` / `dl.keys.gpg` / `dl.keys.minisign` | Impronta della chiave di rilascio / Chiave di rilascio (OpenPGP) / Chiave degli aggiornamenti (minisign) |
| `meta.download.title` | Scarica DentalCraft - con installer o senza installazione, per Linux e Windows |
| `meta.download.description` | Scarica la versione alpha di DentalCraft per Linux (Flatpak, Fedora, Debian e Ubuntu, AppImage) e Windows (setup o MSI), o la versione senza installazione. Non è un dispositivo medico. |
| `meta.download.ogTitle` | Scarica DentalCraft - con installer o senza installazione |
| `meta.download.ogDescription` | La versione alpha di DentalCraft per Linux e Windows, con installer o senza installazione. Gratuita per uso non clinico. Non è un dispositivo medico. |

## 14. Novità (pagina di download, `/it/download/#whats-new`)

Un blocco tra l'introduzione e le schede dei sistemi operativi, con un link dalla sezione download della pagina iniziale. Elenca la release agganciata (`site.data.json` `whatsNew` = le chiavi `new.N`, in ordine). Va riscritto a ogni release dell'app, insieme alle funzioni descritte sopra.

| Chiave | Testo |
| --- | --- |
| `new.title` | Novità della versione {version} |
| `new.meta` | Rilasciata il {date} |
| `new.link` | Novità della versione {version} |
| `new.note` | Pianificazione, produzione ed esportazione sono ancora in sviluppo. Non è un dispositivo medico. Non per uso clinico. |
| `new.1` | Installer per Linux (Flatpak, Fedora, Debian e Ubuntu, AppImage) e Windows (setup e MSI). DentalCraft controlla gli aggiornamenti all'avvio e chiede prima di installarli. |
| `new.2` | Scansioni: una scansione aperta viene chiusa in automatico con una base piana quando la importi. Puoi scegliere l'arcata a mano, capovolgere il lato occlusale e vedere come è stata chiusa ogni scansione. |
| `new.3` | Il menu è raggruppato per funzione. Un clic su una voce la seleziona soltanto: nel pannello a destra trovi i suoi parametri, il pulsante per eseguirla e le correzioni manuali. |
| `new.4` | Analisi del caso: inserisci i tuoi valori (affollamento, indice di Little, linea mediana, spazio maggiore) e i risultati li seguono. |
| `new.5` | Morso: una relazione, gli spazi per le scansioni del morso, la registrazione sulla scansione del morso o con tre punti scelti a mano, e la correzione del morso. Con entrambe le arcate il morso viene prima della posizione finale. |
| `new.6` | Posizione finale: parametri, linea d'arcata disegnata a mano, spostamento di un singolo dente, un'ombra della posizione obiettivo e il ritorno alla posizione iniziale. |
| `new.7` | Allineatori: parametri, calendario dei cambi, rallentare un dente e un cursore degli stadi. Revisione clinica con attacchi e segni di IPR. |
| `new.8` | Esporta per la stampa: impostazioni di produzione, dove termina l'allineatore, ponti di contatto, fori e controlli della rifilatura, marcature. I modelli da studio e un'anteprima dell'allineatore si possono mostrare nella vista 3D; gli allineatori compaiono solo quando lo chiedi. |
| `new.9` | Vista 3D: seleziona un dente, la gengiva o una scansione, vedila evidenziata e spostala, ruotala o ridimensionala. Elimina un dente, guarda la zona e la linea di margine di un dente. Il lavoro si salva in automatico. |
| `new.10` | Correzioni: nel piano i denti non fanno più giri completi e per ogni arcata sono elencati i motivi per cui un risultato non è aggiornato. |
