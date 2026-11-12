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

  Il progetto è in fase iniziale. Oggi esistono la struttura dell'applicazione, il file unico per ogni caso e la visualizzazione 3D. L'importazione delle scansioni e le funzioni cliniche vengono riprese dallo strumento di partenza e validate.
- **Elenco di stato (con etichette):**
  - Struttura dell'applicazione - `Esiste oggi`
  - File unico per ogni caso - `Esiste oggi`
  - Visualizzazione 3D - `Esiste oggi`
  - Importazione delle scansioni - `In corso` (ripresa dallo strumento di partenza e validazione)
  - Funzioni cliniche - `In corso` (ripresa dallo strumento di partenza e validazione)

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
- **Banner:** Flusso di lavoro previsto. Ogni fase è indicata come `Pianificato` o `In corso`. Nulla di quanto segue è ancora completo.
- **Titolo:** Dalla scansione all'allineatore, in un'unica area di lavoro
- **Testo:** L'area Allineatori è pensata per seguire il percorso clinico dalla scansione intraorale ai file per la stampa. Le fasi sono raggruppate come nel menu dell'applicazione.
- **Legenda:** `In corso` = in lavorazione o in validazione. `Pianificato` = non ancora avviato.

| Gruppo | Fasi | Stato |
|---|---|---|
| **Caso** | Importazione delle scansioni intraorali (STL, OBJ, PLY) | In corso |
| **Preparazione** | Orientamento e arcata; numerazione dentale FDI; segmentazione dei denti; ricostruzione dei denti e della gengiva | Pianificato |
| **Diagnosi** | Analisi dello spazio; indice di irregolarità di Little; analisi di Bolton | Pianificato |
| **Pianificazione** | Setup della posizione finale; stadiazione per allineatore, con limiti di movimento per ogni dente; riduzione interprossimale (IPR); attacchi | Pianificato |
| **Occlusione** | Occlusione e morso, compreso il morso con gli allineatori | Pianificato |
| **Produzione allineatori** | Guscio dell'allineatore con spessore e gioco; linea di rifilatura; marcatura identificativa; controllo di stampa | Pianificato |
| **Follow-up** | Visite di controllo | Pianificato |
| **Esportazione** | Esportazione STL per ogni stadio; relazioni | Pianificato |

*(Decisione: solo Caso è In corso; tutte le altre fasi sono Pianificato. Il sito legge gli stati da `content/site.data.json`.)*

- **Microcopy dei gruppi:**
  - Caso: Si parte dalla scansione.
  - Preparazione: Scansioni pronte per la pianificazione.
  - Diagnosi: Misurare prima di muovere.
  - Pianificazione: Definire obiettivo e tappe.
  - Occlusione: Verificare come si incontrano le arcate.
  - Produzione allineatori: Preparare il guscio per la stampa.
  - Follow-up: Confrontare piano e andamento.
  - Esportazione: File e relazioni.
- **Alt schema del flusso:** Flusso in otto passaggi da Caso a Esportazione, ciascuno indicato come pianificato o in corso.

---

## 5. In programma

- **Etichetta sezione:** In programma
- **Titolo:** Una sola applicazione, più ambiti di lavoro
- **Testo:** DentalCraft avrà una base comune e, sopra, un ambito per ogni tipo di lavoro. Gli Allineatori vengono per primi. Gli altri sono pianificati, senza date.
- **Ambiti:**
  - **Allineatori** - Primo ambito. In sviluppo attivo.
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
  - **Un'applicazione sul tuo computer.** Si installa e si usa sul computer dello studio o del laboratorio, senza passare dal browser.
  - **Vista 3D fluida.** Pensata per gestire con fluidità anche le scansioni più dettagliate.
  - **Un file per ogni caso.** Un file aperto e documentato, con un controllo di integrità.
  - **Privacy fin dalla progettazione.** I dati dei pazienti sono pseudonimizzati: nessun nome nei file dei casi.
  - **I casi restano da te.** Si lavora sui casi salvati sul tuo computer. L'account è previsto solo per licenze e assistenza.
  - **In due lingue.** Italiano e inglese.
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
  - **Linux** - tag Alpha. Pulsante: Scarica per Linux. Requisiti: PC a 64 bit (x86_64). Estrai l'archivio e apri dentalcraft.
  - **Windows** - tag Alpha. Pulsante: Scarica per Windows. Requisiti: Windows 10 o 11 a 64 bit. Estrai la cartella e apri dentalcraft.exe.
  - **macOS** - tag In seguito. Pulsante (disattivato): Non ancora disponibile
- **Sotto ogni card scaricabile:** Versione {version} · {size} · {date}, e una nota chiusa "Per il tuo tecnico informatico: checksum SHA-256" con l'hash.
- **Sotto le card:** Windows potrebbe dire che l'editore è sconosciuto: i file non sono ancora firmati. Scegli «Ulteriori informazioni», poi «Esegui comunque». / Gratuita con la licenza DentalCraft, così com'è e senza garanzia. Non è un dispositivo medico: non usarla sui pazienti né per decisioni cliniche. [Licenza: link alla pagina della licenza] / Tutti i checksum (file di testo)
- **Modulo di avviso:** rimosso (decisione: nessun back end, nessuna raccolta dati). Una nota sotto le card dice: Questo sito non ha moduli e non raccoglie dati. Leggi la nota sulla privacy.
- **Problemi o suggerimenti:** hello@dentalcraft.app
- **Avviso:** In sviluppo. Non è un dispositivo medico. Non per uso clinico.

---

## 9. FAQ

1. **DentalCraft è disponibile?**
   Una versione alpha per Linux e Windows si può scaricare dalla pagina iniziale, solo per valutazione. È in fase iniziale di sviluppo: non è un dispositivo medico e non è per uso clinico. Esistono la struttura dell'applicazione, il file unico per ogni caso e la visualizzazione 3D. L'importazione delle scansioni e le funzioni cliniche vengono riprese dallo strumento di partenza e validate.

2. **È certificato? È un dispositivo medico?**
   No. DentalCraft non è un dispositivo medico e non ha alcuna certificazione. Non è per uso clinico. Lo sviluppo segue un approccio regolatorio e l'intenzione è percorrere in futuro il percorso di conformità appropriato.

3. **Su quali computer funzionerà?**
   Prima su Linux e Windows. macOS in seguito.

4. **Quanto costerà?**
   Il prezzo non è ancora stato deciso.

5. **Che fine fanno i dati dei pazienti?**
   I casi sono pensati per restare sul tuo computer. I file dei casi sono pseudonimizzati e non contengono nomi di pazienti. L'account è previsto solo per licenze e assistenza.

6. **Posso provarlo?**
   Sì. Una versione alpha per Linux e Windows si può scaricare dalla pagina iniziale. È solo per valutazione: non è un dispositivo medico e non è per uso clinico.

7. **Che cosa farà per primo?**
   Il primo ambito è Allineatori, per la pianificazione degli allineatori trasparenti. Il flusso previsto è descritto nella pagina iniziale: le fasi sono in corso o pianificate e nessuna è ancora completa.

8. **Quali file potrò usare?**
   È previsto di importare le scansioni in STL, OBJ e PLY e di esportare ogni stadio in STL. Ogni caso si salva in un unico file aperto.

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
| `roadmap.core.items` | Struttura dell'applicazione, file unico per ogni caso, visualizzazione 3D |
| `roadmap.m1.note` | Primo ambito. In sviluppo attivo. |
| `aligners.rail` | Primo ambito |
| `aligners.legend.inprogress` | In lavorazione o in validazione. |
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
