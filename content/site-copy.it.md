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
- **Title SEO (<=60 car.):** DentalCraft - CAD odontoiatrico nativo, in sviluppo
- **Meta description (<=155 car.):** DentalCraft è un CAD odontoiatrico nativo, offline-first, scritto in Rust. Parte dagli allineatori. Fase iniziale. Non è un dispositivo medico.
- **Titolo OG:** DentalCraft - CAD odontoiatrico nativo, in sviluppo
- **Descrizione OG:** Scritto in Rust, con viewport 3D su GPU. Primo modulo: Allineatori. Fase iniziale. Non è un dispositivo medico, non per uso clinico.
- **Alt immagine OG:** Logo DentalCraft su un'arcata dentale 3D, con la dicitura "In sviluppo".
- **Parole chiave (opz.):** CAD odontoiatrico, allineatori, software ortodonzia, scansione intraorale, STL, Rust, Linux, Windows

### Navigazione
Presentazione / Visione / Allineatori / Roadmap / Tecnologia / Normativa / Download / FAQ
**Pulsante header:** Segui lo sviluppo
**Cambio lingua:** EN | IT

---

## 1. Hero

- **Badge:** In sviluppo
- **Titolo:** Un CAD odontoiatrico nativo, costruito da zero.
- **Sottotitolo:** DentalCraft è un'applicazione desktop per l'odontoiatria digitale, scritta in Rust con un viewport 3D su GPU. Parte dalla pianificazione degli allineatori ed è pensata per crescere modulo dopo modulo.
- **CTA primaria:** Guarda la presentazione
- **CTA secondaria:** Segui lo sviluppo
- **Avviso (ben visibile, sotto le CTA):** In sviluppo. Non è un dispositivo medico. Non per uso clinico.
- **Microcopy:** Fase iniziale. Prima Linux e Windows. Made in Italy.
- **Alt immagine hero:** Vista 3D stilizzata di un'arcata superiore nel viewport di DentalCraft, con i denti contornati e numerati.

---

## 2. Presentazione - cosa esiste oggi

- **Etichetta sezione:** Presentazione
- **Titolo:** Che cos'è DentalCraft e a che punto siamo
- **Testo:**
  DentalCraft è un CAD odontoiatrico nativo. Nasce da uno strumento di pianificazione per allineatori ortodontici che l'autore aveva realizzato come add-on di Blender. DentalCraft riprende quel lavoro e lo ricostruisce come applicazione dedicata, autonoma e più veloce, con un'impostazione ispirata alle suite CAD dentali professionali: un nucleo comune più moduli.

  Il progetto è in fase iniziale. Oggi esistono la struttura dell'applicazione, il formato di progetto e il viewport 3D. L'importazione delle scansioni e gli algoritmi clinici sono in fase di porting e validazione.
- **Elenco di stato (con etichette):**
  - Struttura dell'applicazione - `Esiste oggi`
  - Formato di progetto (.dcprj) - `Esiste oggi`
  - Viewport 3D su GPU - `Esiste oggi`
  - Importazione delle scansioni - `In corso` (porting e validazione)
  - Algoritmi clinici - `In corso` (porting e validazione)

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
  - Alt: Schermata iniziale di DentalCraft con l'elenco dei progetti e l'accesso al modulo Allineatori.
- **Schermata 2 - Area Allineatori**
  - Didascalia: Area di lavoro Allineatori con il viewport 3D. Lavoro in corso.
  - Alt: Area di lavoro Allineatori di DentalCraft con una scansione dentale nel viewport 3D su GPU e i gruppi di menu a lato.
- **Badge su ogni immagine:** Lavoro in corso

*(Gli alt descrivono le schermate previste; adattarli alle catture finali.)*

---

## 3. Visione / Intenzioni

- **Etichetta sezione:** Visione
- **Banner:** Quanto segue è un'intenzione, non la descrizione di funzioni già pronte.
- **Titolo:** Perché un CAD odontoiatrico nativo
- **Testo:**
  Pianificare in digitale significa lavorare con dati 3D pesanti, per sessioni lunghe. Crediamo che il software debba restare veloce, restare in locale e restare sotto il controllo del clinico. DentalCraft nasce su queste idee.

- **Principi (card):**
  1. **Prestazioni native.** Applicazione in Rust con viewport su GPU (wgpu / Vulkan). L'obiettivo: nessun blocco dell'interfaccia, anche con scansioni di grandi dimensioni.
  2. **Offline-first.** I progetti restano sul tuo computer. Il software non dovrebbe aver bisogno di connessione per lavorare.
  3. **Un solo file di progetto aperto.** Un unico file `.dcprj` documentato: contenitore ZIP versionato, con checksum.
  4. **Dati paziente pseudonimizzati.** I file di progetto sono pensati per non contenere nomi di pazienti.
  5. **Interfaccia in italiano e inglese.** Entrambe le lingue fin dall'inizio.
  6. **Prima Linux e Windows.** macOS in seguito.
  7. **Approccio regolatorio fin dall'inizio.** Requisiti, gestione del rischio e tracciabilità sono parte del lavoro.
  8. **Indipendente e made in Italy.** Uno sviluppatore, una visione di lungo periodo.
- **Microcopy:** Sono intenzioni di progetto. Indicano la direzione, non lo stato attuale.

---

## 4. Modulo Allineatori

- **Etichetta sezione:** Allineatori - primo modulo
- **Banner:** Flusso di lavoro previsto. Ogni fase è indicata come `Pianificato` o `In corso`. Nulla di quanto segue è ancora disponibile.
- **Titolo:** Dalla scansione all'allineatore, in un'unica area di lavoro
- **Testo:** Il modulo Allineatori è pensato per seguire il percorso clinico dalla scansione intraorale all'output stampabile. Le fasi sono raggruppate come nel menu dell'applicazione.
- **Legenda:** `In corso` = porting o validazione in atto. `Pianificato` = non ancora avviato.

| Gruppo | Fasi | Stato |
|---|---|---|
| **Caso** | Importazione delle scansioni intraorali (STL, OBJ, PLY) | In corso |
| **Preparazione** | Orientamento e arcata; numerazione dentale FDI; segmentazione; ricostruzione dei denti e della gengiva | Pianificato |
| **Diagnosi** | Analisi dello spazio; indice di irregolarità di Little; analisi di Bolton | Pianificato |
| **Pianificazione** | Setup della posizione finale; staging per allineatore con limiti di movimento per dente; IPR; attachment | Pianificato |
| **Occlusione** | Occlusione e morso, compreso il morso con gli allineatori | Pianificato |
| **Produzione allineatori** | Shell dell'allineatore con spessore e clearance; linea di taglio; marcatura identificativa; controllo di stampa | Pianificato |
| **Follow-up** | Visite di controllo | Pianificato |
| **Output** | Esportazione STL per ogni stage; report | Pianificato |

*(Decisione: solo Caso è In corso; tutte le altre fasi sono Pianificato. Il sito legge gli stati da `content/site.data.json`.)*

- **Microcopy dei gruppi:**
  - Caso: Si parte dalla scansione.
  - Preparazione: Dati pronti per essere pianificati.
  - Diagnosi: Misurare prima di muovere.
  - Pianificazione: Definire obiettivo e tappe.
  - Occlusione: Verificare come si incontrano le arcate.
  - Produzione allineatori: Preparare la shell per la stampa.
  - Follow-up: Confrontare piano e andamento.
  - Output: File e report.
- **Alt schema del flusso:** Flusso in otto passaggi da Caso a Output, ciascuno indicato come pianificato o in corso.

---

## 5. Roadmap

- **Etichetta sezione:** Roadmap
- **Titolo:** Un nucleo, più moduli
- **Testo:** DentalCraft ha un nucleo comune con i moduli sopra. Gli Allineatori vengono per primi. Gli altri sono pianificati, senza date.
- **Moduli:**
  - **Allineatori** - Primo modulo. In sviluppo attivo.
  - **Model Builder** - Pianificato.
  - **Splint (bite)** - Pianificato.
  - **Corone e ponti** - Pianificato.
  - **Implantologia** - Pianificato.
- **Microcopy:** Non sono annunciate date di rilascio. Ordine e contenuti possono cambiare.
- **Alt roadmap:** Riga di cinque schede-modulo: Allineatori in sviluppo, poi Model Builder, Splint, Corone e ponti, Implantologia come pianificati.

---

## 6. Tecnologia e dati

- **Etichetta sezione:** Tecnologia
- **Titolo:** Codice nativo, dati in locale
- **Testo:** Scelte tecniche al servizio di velocità, controllo e tracciabilità.
- **Voci:**
  - **Rust, desktop nativo.** Un'unica applicazione compilata, senza motore browser in mezzo.
  - **Viewport su GPU.** Rendering 3D con wgpu su Vulkan, per gestire con fluidità mesh dense.
  - **File di progetto aperto (.dcprj).** Contenitore ZIP con checksum, versionato e documentato.
  - **Privacy fin dalla progettazione.** I dati paziente sono pseudonimizzati: nessun nome nei file di progetto.
  - **Offline-first.** Si lavora su progetti locali. L'account (auth.dentalcraft.app) è previsto solo per licenze e assistenza.
  - **Interfaccia bilingue.** Italiano e inglese.
- **Microcopy:** I dettagli saranno pubblicati quando il formato di progetto sarà stabile.

---

## 7. Posizione normativa

- **Etichetta sezione:** Normativa
- **Titolo:** Chiari su dove siamo
- **Testo:**
  DentalCraft non è un dispositivo medico e non è certificato. Non deve essere usato a scopo clinico.

  Il progetto è costruito con un approccio regolatorio: requisiti, gestione del rischio e tracciabilità sono stati portati dal lavoro precedente. L'intenzione è seguire il percorso di conformità appropriato per i dispositivi medici quando il software sarà pronto. È un'intenzione, non uno stato.
- **Riquadro:** In sviluppo. Non è un dispositivo medico. Non per uso clinico.

---

## 8. Download - In arrivo

- **Etichetta sezione:** Download
- **Titolo:** In arrivo
- **Testo:** Per ora non c'è nulla da scaricare. Torna su questa pagina per le novità, oppure scrivici.
- **Card piattaforma (disattivate):**
  - **Linux** - In arrivo
  - **Windows** - In arrivo
  - **macOS** - In seguito
- **Pulsante su ogni card (disattivato):** Non ancora disponibile
- **Modulo di avviso:** rimosso (decisione: nessun back end, nessuna raccolta dati). Una nota sotto le card dice: Questo sito non ha moduli e non raccoglie dati. Leggi la nota sulla privacy.
- **Oppure scrivici:** hello@dentalcraft.app
- **Avviso:** In sviluppo. Non è un dispositivo medico. Non per uso clinico.

---

## 9. FAQ

1. **DentalCraft è disponibile?**
   Non ancora. È in fase iniziale di sviluppo. Esistono la struttura dell'applicazione, il formato di progetto e il viewport 3D. L'importazione delle scansioni e gli algoritmi clinici sono in porting e validazione.

2. **È certificato? È un dispositivo medico?**
   No. DentalCraft non è un dispositivo medico e non ha alcuna certificazione. Non è per uso clinico. Lo sviluppo segue un approccio regolatorio e l'intenzione è percorrere in futuro il percorso di conformità appropriato.

3. **Su quali piattaforme funzionerà?**
   Prima Linux e Windows. macOS in seguito.

4. **Quanto costerà?**
   Il prezzo non è ancora stato deciso.

5. **Che fine fanno i dati dei pazienti?**
   L'impostazione è offline-first: i progetti restano sul tuo computer. I file di progetto sono pseudonimizzati e non contengono nomi di pazienti. L'account è previsto solo per licenze e assistenza.

6. **Posso provarlo?**
   Non ancora. L'accesso anticipato è previsto più avanti. Torna su questo sito per le novità.

7. **Che cosa farà per primo?**
   Il primo modulo è Allineatori, per la pianificazione di allineatori trasparenti. Il flusso previsto è descritto sopra; è in porting e validazione e nessuna parte è ancora disponibile.

8. **Quali formati di file usa?**
   Le scansioni in STL, OBJ e PLY sono previste come input. I progetti usano un unico file aperto `.dcprj`. L'esportazione per stage è prevista in STL.

---

## 10. Footer

- **Tagline:** CAD odontoiatrico nativo. Made in Italy.
- **Avviso:** In sviluppo. Non è un dispositivo medico. Non per uso clinico.
- **Etichetta contatti:** Contatti
- **Contatto:** hello@dentalcraft.app
- **Link:** Presentazione / Visione / Roadmap / Download / FAQ
- **Nota privacy:** Nota sulla privacy (link alla pagina Su, sezione Privacy)
- **Copyright:** © 2026 DentalCraft
- **Cambio lingua:** English | Italiano

---

## Etichette dei pulsanti (indice)
Guarda la presentazione / Segui lo sviluppo / Riproduci il video / Leggi la trascrizione / Non ancora disponibile / Scrivici

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
| `video.poster.title` | Un CAD odontoiatrico, costruito nativo. |
| `video.meta` | Circa 75 secondi. Testi in inglese, sottotitoli in italiano. |
| `vision.rail` | Intenzioni, non funzioni |
| `roadmap.rail` | Nessuna data annunciata |
| `roadmap.core.label` | Nucleo |
| `roadmap.core.items` | Struttura dell'applicazione, formato di progetto (.dcprj), viewport 3D su GPU |
| `roadmap.m1.note` | Primo modulo. In sviluppo attivo. |
| `aligners.rail` | Primo modulo |
| `aligners.legend.inprogress` | Porting o validazione in atto. |
| `aligners.legend.planned` | Non ancora avviato. |
| `downloads.rail` | Nulla da scaricare, per ora |
| `downloads.note` | Questo sito non ha moduli e non raccoglie dati. Leggi la nota sulla privacy. |
| `technology.rail` | Tecnologia e dati |
| `regulatory.rail` | Posizione normativa |
| `faq.headline` | Domande, risposte chiare |
| `footer.links.label` | Sito |
| `footer.language.label` | Lingua |
| `privacy.label` | Privacy |
| `privacy.rail` | Nota sulla privacy |
| `privacy.headline` | Niente cookie, niente tracciamento, niente moduli |
| `privacy.body.1` | Questo sito non imposta cookie, non usa strumenti di analisi o tracciamento, non carica nulla da terze parti e non ha moduli. Non raccogliamo dati personali tramite il sito. La lingua scelta resta solo nel tuo browser, così il sito può aprirsi nella tua lingua la volta successiva. |
| `privacy.body.2` | Come ogni server web, quello che ospita il sito può conservare i normali log di accesso (indirizzo IP, ora, pagina richiesta) per sicurezza e diagnosi. Se scrivi a hello@dentalcraft.app, useremo il tuo messaggio solo per risponderti. |
| `footer.privacy` | Nota sulla privacy |
