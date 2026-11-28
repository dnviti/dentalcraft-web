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
  - Vista 3D con selezione, spostamento, rotazione e scala, e quattro interruttori sempre visibili per colori dei denti, segni, numeri e mappa dei contatti, spenti di default - `Esiste oggi`
  - Importazione delle scansioni, con chiusura automatica di quelle aperte; scansioni e modelli importati si possono rimuovere; un caso può partire senza scansioni - `Esiste oggi`
  - Scansione 3D e piatto girevole, dalla schermata Nuovo progetto e dentro un caso (alpha) - `In corso`
  - Trovare i denti, separare denti e gengiva, denti 3D - `Esiste oggi`
  - Analisi del caso e morso - `Esiste oggi`
  - Posizione finale, allineatori e revisione clinica - `In corso`
  - Produzione ed esportazione per la stampa - `In corso`
  - Installer con aggiornamenti automatici - `Esiste oggi`
  - Comandi per script e agenti IA - `Esiste oggi`
  - Diagnostica anonima per correggere i difetti, solo se acconsenti - `Esiste oggi`
  - Impostazioni, con interfaccia semplice di default e indicatore del passo successivo (Avanti) - `Esiste oggi`
  - Stampa diretta degli allineatori sulla Elegoo Saturn 4 Ultra 16K: file salvati in una cartella o su una chiavetta USB, con il registro degli allineatori stampati e mancanti - `Esiste oggi`
  - Stampa in rete, direttamente sulla stampante - `Pianificato`
  - Verifica degli allineatori stampati con stampe reali (non ancora fatta) - `Pianificato`

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
| **Caso** | Avvio del caso dalla schermata Nuovo progetto con scansioni importate (STL, OBJ, PLY), con una scansione fatta da uno scanner 3D o senza alcuna scansione, da aggiungere poi nel caso, importandole o con lo scanner. Una scansione aperta viene chiusa in automatico in un solido pulito: una base piana sotto il suo bordo, i buchi al suo interno riempiti sul posto e un avviso che resta sullo schermo se non si riesce a chiuderla del tutto. Rimozione di una scansione o di un modello importato con il cestino nell'elenco, il pannello del componente selezionato o il tasto Canc, con conferma; Ctrl+Z la riporta. Scelta dell'arcata a mano e capovolgimento del lato occlusale. La scansione nell'applicazione, con o senza piatto girevole, è un'alpha iniziale: la scansione automatica col piatto girevole costruisce da tutte le viste una superficie a 0,1 mm, la pulisce e ne chiude i buchi da sola. | Esiste oggi |
| **Preparazione** | Trovare i denti e numerarli (FDI), con un controllo automatico contro i denti trovati dietro gli ultimi molari e contro i denti vicini uniti in uno. L'arcata termina all'ultimo molare vero anche quando la base del modello dietro di esso è alta quanto il dente, e il controllo non unisce due denti veri il cui contatto è poco profondo. Un dente del giudizio su un lato non aggiunge un dente fantasma sull'altro, e i numeri dei denti da latte vengono rifiutati con un messaggio (non sono ancora supportati). Ciò che la numerazione lascia in dubbio (la fine dell'arcata lasciata fuori, un tratto senza corona contato come spazio, come la cresta vuota di un dente mancante, o un tratto basso lasciato com'è stato trovato) viene mostrato appena il passaggio termina, e di nuovo quando riapri il progetto. Segni che puoi aggiungere, eliminare o rinumerare a mano, e denti mancanti. Separare denti e gengiva, con un pennello e la pulizia dei bordi per le correzioni; mentre il pennello dei denti è aperto, colori e numeri dei denti sono attivi, e tornano com'erano quando lo lasci. Denti 3D, ciascuno un solido chiuso e senza buchi (i piccoli tunnel che vengono dalla superficie della scansione sono chiusi; se non se ne riesce a fare uno, il passaggio dice quale non è riuscito), con una gengiva che li segue e che è chiusa con una base di 3 mm. Vedere la zona e la linea di margine di un dente. | Esiste oggi |
| **Diagnosi** | Analisi del caso: spazio, affollamento, indice di irregolarità di Little, Bolton e complessità del caso. Puoi inserire i tuoi valori misurati e i risultati li seguono. | Esiste oggi |
| **Pianificazione** | Posizione finale, con parametri, linea d'arcata disegnata a mano, spostamento di un dente e ritorno alla posizione iniziale. Allineatori: stadi, calendario dei cambi, rallentare un dente, cursore degli stadi. I limiti di movimento per allineatore vengono applicati in ogni caso, anche dall'automazione, e un valore fuori dai limiti viene rifiutato con un messaggio. Piani più stabili: un dente non viene mai ritardato rispetto a un vicino che non si muove mai, un ritardo resta solo se abbassa la sovrapposizione peggiore della sua coppia, una rotazione oltre la tolleranza viene corretta solo per l'eccesso e qualche vertice in più o in meno nella segmentazione cambia meno il piano. Le collisioni che il piano automatico non riesce a risolvere sono elencate una per una, nel pannello Allineatori e nella relazione dell'esportazione. Revisione clinica con attacchi e segni di riduzione interprossimale (IPR). | In corso |
| **Occlusione** | Relazione sul morso, scansioni del morso, registrazione sulla scansione del morso o con tre punti scelti a mano, correzione del morso e mappa dei contatti. La registrazione accetta scansioni del morso parziali o di bassa qualità: basta una buona parte anteriore e un risultato incerto è segnato ‘da verificare’ invece di essere rifiutato. La scansione del morso serve solo a fissare l'occlusione delle arcate e non viene mostrata nella vista 3D. Un progetto con una sola arcata non ha il morso: non viene stimato nulla, il passaggio Morso mostra ‘non si applica’, lo dicono anche le impostazioni di produzione per il morso con gli allineatori e per le rampe del morso, e gli allineatori si fanno da quella sola arcata. | Esiste oggi |
| **Produzione allineatori** | Impostazioni di produzione (spessore, gioco, qualità), dove termina l'allineatore, linea di rifilatura con ponti di contatto, fori e controlli, una barra sopra ogni dente mancante che tiene l'allineatore in un solo pezzo, estremità pulite dietro gli ultimi molari, marcature identificative, morso con gli allineatori. Il bordo dell'allineatore resta lontano dalle papille tra i denti, le aggira con un'incavatura arrotondata e lascia un piccolo spazio sopra la gengiva che copre; con Opzioni e parametri avanzati attivi entrambi i valori si possono regolare, e l'aderenza ai denti non cambia. È corretto un caso in cui il bordo di rifilatura poteva lasciare un piccolo foro nella parete vicino ai denti posteriori. L'allineatore si può vedere in anteprima nella vista 3D, solo quando lo chiedi: viene disegnato anche sopra la scansione e sopra il modello da studio e segue il cursore degli stadi. I file ad alta qualità richiedono ancora molto tempo. Stampa: gli allineatori si stampano direttamente sulla Elegoo Saturn 4 Ultra 16K. Ognuno viene orientato in modo che il lato che combacia con i denti sia rivolto lontano dal piatto, riceve supporti solo sul lato esterno e poggia su una base a U; vengono provate in automatico più posizioni perché ogni pezzo possa appoggiarsi a un supporto; i pezzi vengono disposti sul piatto e tagliati in file GOO con i parametri macchina DENTAL 45. Le parti aperte o invertite, e i gusci con un foro nella parete, vengono rifiutati prima del taglio, il controllo di stampa concorda con quello dell'esportazione su ciò che è un solido chiuso, e i vecchi file del piatto non restano accanto ai nuovi. Una finestra Stampa salva i file in una cartella o su una chiavetta USB (la stampa in rete non è ancora disponibile) e tiene traccia di quali allineatori sono stampati e quali mancano. Dimensioni e orientamento destra/sinistra del profilo della stampante non sono ancora controllati rispetto alla stampante: verifica prima un pezzo di prova. Non ancora verificata con stampe reali: non fare affidamento sui risultati per i pazienti. | In corso |
| **Follow-up** | Visita di controllo: confronta una nuova scansione con il piano e ripianifica a partire da un allineatore consegnato. Il controllo dente per dente non c'è ancora. | In corso |
| **Esportazione** | Esporta per la stampa: file STL di ogni stadio (allineatori e modelli), calendario dei cambi, relazione e programma per il paziente. Ogni allineatore passivo porta inciso il proprio numero, un segno P e la propria data. L'esportazione termina con un errore, che elenca i file e dice dove si trova un foro, se un file non supera il controllo di stampa. Modelli da studio ed esportazione risultano completati nell'elenco dei passaggi dopo che sono stati eseguiti. Modelli da studio, mostrati anche nella vista 3D: ciascuno è un solido pulito, costruito da qualsiasi scansione, che mantiene l'anatomia scansionata così com'è, sottosquadri compresi; due arcate che non sono in occlusione hanno ciascuna la propria base; un modello da studio che non è un solo solido pulito riceve un avviso ed è contato nella relazione. | In corso |

*(Regola: DONE in `docs/plan/PORT-GAP-MAP.md` è Esiste oggi, PARTIAL è In corso. Pianificazione e produzione non sono mai mostrate come validate. Il sito legge gli stati da `content/site.data.json`.)*

- **Microcopy dei gruppi:**
  - Caso: Si parte dalla scansione.
  - Preparazione: Scansioni pronte per la pianificazione.
  - Diagnosi: Misurare prima di muovere.
  - Pianificazione: Definire obiettivo e tappe. In sviluppo: non usare i risultati sui pazienti.
  - Occlusione: Verificare come si incontrano le arcate.
  - Produzione allineatori: Preparare il guscio e stamparlo. In sviluppo.
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
  - **Vista 3D fluida.** Fai clic su un dente, sulla gengiva o su una scansione per selezionarlo e vederlo evidenziato, poi sposta, ruota o ridimensiona nella vista. Pensata per restare fluida anche con le scansioni più dettagliate: la frequenza di aggiornamento è limitata a 60 al secondo con sincronizzazione verticale e i pannelli del menu e dei dettagli si possono ridimensionare.
  - **Un file per ogni caso.** Un file aperto e documentato, con un controllo di integrità. Si salva da solo poco dopo ogni modifica, e ogni volta che salvi. Un progetto non viene mai scritto in uno stato che non si può riaprire: se qualcosa non va, il salvataggio si ferma e il file precedente resta.
  - **Privacy fin dalla progettazione.** I dati dei pazienti sono pseudonimizzati: nessun nome nei file dei casi. La diagnostica anonima viene inviata solo se acconsenti.
  - **I casi restano da te.** Si lavora sui casi salvati sul tuo computer. L'account è previsto solo per licenze e assistenza.
  - **In due lingue.** Italiano e inglese.
  - **Comandabile da script e agenti IA.** Ogni azione è anche un comando di dentalcraft-cli e del suo server MCP: script e agenti di intelligenza artificiale possono eseguire gli stessi passaggi. La porta di controllo locale dell'applicazione in esecuzione richiede un segreto creato a ogni avvio.
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
- **Sotto le card:** I programmi e gli installer per Windows sono firmati con il certificato proprio di DentalCraft (autofirmato, impronta SHA-256 24:DD:54:2E:33:7B:CE:A9:9C:79:3D:57:DE:53:B6:D3:55:DC:01:5B:F1:27:0D:20:D1:32:1D:56:DC:F0:AA:26). Windows non conosce questo certificato, quindi SmartScreen può ancora avvisare e mostrare un editore sconosciuto. Per controllare un file, clic destro, Proprietà, poi Firme digitali, e confronta l'impronta del certificato. Scegli «Ulteriori informazioni», poi «Esegui comunque». / Gratuita con la licenza DentalCraft, così com'è e senza garanzia. Non è un dispositivo medico: non usarla sui pazienti né per decisioni cliniche. [Licenza: link alla pagina della licenza] / Tutti i checksum (file di testo)
- **Modulo di avviso:** rimosso (decisione: nessun back end, nessuna raccolta dati). Una nota sotto le card dice: Questo sito non ha moduli e non raccoglie dati. L'applicazione invia dati diagnostici anonimi solo se acconsenti. Leggi la nota sulla privacy.
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
   Sì. L'alpha si può scaricare e usare gratuitamente per scopi non commerciali, con la licenza PolyForm Noncommercial 1.0.0 (source-available). L'uso commerciale richiede una licenza dell'autore. Non è per uso clinico. I termini sono nella pagina della licenza.

5. **Che fine fanno i dati dei pazienti?**
   I casi sono pensati per restare sul tuo computer. I file dei casi sono pseudonimizzati e non contengono nomi di pazienti. Scansioni, progetti e dati dei pazienti non vengono mai inviati a noi. L'account è previsto solo per licenze e assistenza.

6. **Posso provarlo?**
   Sì. Una versione alpha per Linux e Windows si può scaricare dalla pagina iniziale, gratuitamente, per uso non clinico: valutazione, formazione, ricerca e prove di progettazione. È fornita così com'è. Non è un dispositivo medico e non è per uso clinico.

7. **Che cosa sa fare oggi?**
   Il primo ambito è Allineatori, per la pianificazione degli allineatori trasparenti. La pagina iniziale elenca ogni fase con il suo stato. Dall'importazione delle scansioni al morso funziona già nell'alpha; posizione finale, allineatori, revisione clinica, produzione ed esportazione sono ancora in sviluppo e i loro risultati non sono validati: non vanno usati sui pazienti.

8. **Quali file posso usare?**
   Puoi importare scansioni in STL, OBJ e PLY; le scansioni aperte vengono chiuse automaticamente con una base. Puoi anche scansionare con uno scanner 3D supportato (alpha iniziale), dalla schermata Nuovo progetto o più tardi nel caso, e aggiungere il risultato al progetto. «Esporta per la stampa» scrive i file STL di ogni stadio, con il calendario dei cambi e una relazione, e termina con un errore se un file non supera il controllo di stampa: questa funzione è ancora in completamento. Ogni caso si salva in un unico file aperto, in automatico poco dopo ogni modifica e ogni volta che salvi.

9. **Posso usarlo da script o con un agente di intelligenza artificiale?**
   Sì. Ogni azione dell'applicazione, scansione e piatto girevole compresi, è anche un comando dello strumento dentalcraft-cli, incluso nei download senza installazione e negli installer, e del suo server MCP: uno script o un agente di intelligenza artificiale può eseguire gli stessi passaggi.

10. **Come si aggiorna?**
    Le versioni Flatpak, Fedora e Debian/Ubuntu si aggiornano con il sistema. Tutte le altre controllano questo sito all'avvio di DentalCraft, chiedono prima di aggiornare e verificano la firma dell'aggiornamento prima di installarlo.

11. **Posso scansionare con uno scanner 3D dentro DentalCraft?**
    Sì, come alpha iniziale. Nella schermata Nuovo progetto, il pulsante Scansiona accanto a «Sfoglia i file…» apre una finestra di scansione, e la stessa finestra si apre da Importazione scansioni nel caso: colleghi uno scanner, avvii, metti in pausa e fermi l'acquisizione dal vivo, pulisci la nuvola di punti, crei la superficie e la aggiungi al progetto come arcata superiore, inferiore o morso. Con il piatto girevole, una scansione automatica ferma il piatto a ogni posizione, acquisisce da fermo e ricostruisce la superficie da tutte le viste a 0,1 mm, poi la pulisce, ne chiude i buchi e la semplifica; le viste di un pezzo che si è mosso vengono escluse, quindi fissa saldamente il modello al piatto. La finestra è condivisa da tutta l'applicazione, quindi qualunque ambito può offrirla. Funziona con il Revopoint MINI 2 via USB su Linux e, novità della versione 0.2.0-alpha.9, su Windows (ancora alpha, provato finora in una macchina virtuale Windows), senza SDK del produttore, con la calibrazione memorizzata nello scanner (letta in automatico) o, in mancanza, una approssimativa, a meno che tu non fornisca un file di calibrazione. L'SDK Revopoint 3D Camera si può usare come backend facoltativo: lo fornisci tu, con l'autorizzazione di Revopoint, e non è incluso. Uno scanner simulato integrato permette di provare il flusso senza hardware. Su Windows lo scanner viene letto tramite l'acquisizione video Media Foundation del sistema, e la luce di riempimento, l'esposizione rapida e la lettura della calibrazione memorizzata funzionano come su Linux. Il Revopoint Dual-axis Turntable funziona via Bluetooth LE (provato su Linux e Windows) e si ricollega da solo se il collegamento cade durante una scansione; se lo scanner o il piatto si sono spostati dopo la calibrazione del piatto, la scansione automatica si ferma dopo le prime viste e chiede di calibrare di nuovo. Non è un dispositivo medico: non usare le scansioni fatte così per decisioni cliniche.

12. **Posso iniziare un progetto senza scansioni?**
    Sì. Nella schermata Nuovo progetto le scansioni sono facoltative: importa file, scansiona con uno scanner 3D supportato (alpha iniziale) o crea il progetto vuoto. Nel progetto puoi aggiungere arcata superiore, inferiore e morso più tardi, importandoli o con lo scanner. Non è un dispositivo medico: non usarlo per decisioni cliniche.

13. **DentalCraft invia dati allo sviluppatore?**
    Solo se acconsenti. Al primo avvio l'applicazione chiede se può inviare dati diagnostici anonimi (segnalazioni di arresto anomalo, messaggi di errore, versione, sistema e scheda grafica, e ultime righe del registro senza i nomi delle cartelle e i numeri di serie dei dispositivi) per aiutare a correggere i difetti. La casella è non spuntata per impostazione predefinita e puoi cambiarla in qualsiasi momento dal menu dell'account. Scansioni, progetti, dati dei pazienti e dati dell'account non vengono mai inviati. La nota sulla privacy riporta l'elenco completo.
14. **Cosa sono Impostazioni e l'interfaccia semplice?**
    Impostazioni si apre dal menu in alto a destra e raccoglie le opzioni generali, l'area di lavoro, gli aggiornamenti e la privacy. L'opzione Opzioni e parametri avanzati è disattivata di default: i pannelli laterali mostrano allora solo i passaggi automatici e le correzioni più utili, e il menu segna il passo successivo (Avanti). Attivala per vedere tutti i parametri e i valori tecnici.
15. **Posso stampare gli allineatori con DentalCraft?**
    Sì, direttamente, sulla Elegoo Saturn 4 Ultra 16K. La finestra Stampa orienta ogni allineatore in modo che il lato che combacia con i denti sia rivolto lontano dal piatto, aggiunge supporti solo sul lato esterno e una base a U, dispone i pezzi sul piatto e li taglia in file GOO con i parametri macchina DENTAL 45. Salvi i file in una cartella o su una chiavetta USB e stampi dalla stampante; la stampa in rete è prevista, non ancora disponibile. DentalCraft tiene anche traccia di quali allineatori sono stampati e quali mancano. Non è ancora stata verificata con stampe reali, quindi non usare gli allineatori stampati sui pazienti. Non è un dispositivo medico.
16. **Dove sono il codice sorgente e la documentazione?**
    Il codice sorgente è pubblico su GitHub, con la PolyForm Noncommercial License 1.0.0 (source-available, non open source). La documentazione è su https://dnviti.github.io/dentalcraft-docs/.

---

## 10. Footer

- **Tagline:** CAD dentale per studio e laboratorio. Made in Italy.
- **Avviso:** In sviluppo. Non è un dispositivo medico. Non per uso clinico.
- **Etichetta contatti:** Contatti
- **Contatto:** hello@dentalcraft.app
- **Link:** Presentazione / Visione / In programma / Download / FAQ
- **Licenza:** Licenza (link alla pagina della licenza)
- **Nota privacy:** Nota sulla privacy (link alla pagina Su, sezione Privacy)
- **Documentazione:** Documentazione (link a https://dnviti.github.io/dentalcraft-docs/)
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
| `roadmap.core.items` | Struttura dell'applicazione, file unico per ogni caso (salvato in automatico), vista 3D con selezione, spostamento, rotazione e scala, scansione 3D in una finestra condivisa da tutta l'applicazione (alpha iniziale), una finestra Impostazioni con interfaccia semplice di default |
| `roadmap.m1.note` | Primo ambito. In sviluppo attivo: dalla scansione al morso funziona già nell'alpha; pianificazione e produzione sono ancora in validazione. |
| `aligners.rail` | Primo ambito |
| `aligners.legend.exists` | Funziona nell'alpha. Versione iniziale, non validata per l'uso clinico. |
| `aligners.legend.inprogress` | In parte disponibile. In lavorazione o in validazione. |
| `aligners.legend.planned` | Non ancora avviato. |
| `downloads.rail` | Alpha, da provare |
| `downloads.terms` | Gratuita con la licenza PolyForm Noncommercial 1.0.0 (source-available), così com'è e senza garanzia. Non è un dispositivo medico: non usarla sui pazienti né per decisioni cliniche. |
| `downloads.terms.link` | Licenza |
| `downloads.note` | Questo sito non ha moduli e non raccoglie dati. L'applicazione invia dati diagnostici anonimi solo se acconsenti. Leggi la nota sulla privacy. |
| `technology.rail` | Lavoro e dati |
| `regulatory.rail` | Posizione normativa |
| `faq.headline` | Domande, risposte chiare |
| `footer.links.label` | Sito |
| `footer.language.label` | Lingua |
| `privacy.label` | Privacy |
| `privacy.rail` | Nota sulla privacy |
| `privacy.headline` | Nessun tracciamento sul sito; diagnostica dell'applicazione solo se acconsenti |
| `privacy.body.1` | Questo sito non imposta cookie, non usa strumenti di analisi o tracciamento, non carica nulla da terze parti e non ha moduli. Non raccogliamo dati personali tramite il sito. La lingua scelta resta solo nel tuo browser, così il sito può aprirsi nella tua lingua la volta successiva. |
| `privacy.body.2` | Come ogni sito web, anche questo può conservare i normali registri di accesso (indirizzo IP, ora, pagina richiesta) per sicurezza e diagnosi. Se scrivi a hello@dentalcraft.app, useremo il tuo messaggio solo per risponderti. |
| `privacy.app.title` | L'applicazione: diagnostica anonima, solo se acconsenti |
| `privacy.app.1` | L'applicazione DentalCraft può inviare allo sviluppatore dati diagnostici anonimi, per trovare e correggere i difetti. È disattivata finché non acconsenti: al primo avvio una finestra te lo chiede, con la casella non spuntata, e puoi cambiare scelta in qualsiasi momento dal menu dell'account. Il consenso può darlo solo l'utente, nell'applicazione. Se non acconsenti, non viene raccolto né inviato nulla. |
| `privacy.app.2` | Cosa viene inviato: la versione dell'applicazione e come è stata installata; il sistema operativo e la lingua; la scheda grafica e il suo driver, la quantità di memoria e il numero di processori; le segnalazioni di arresto anomalo con il relativo backtrace; i codici e i messaggi di errore e di avviso; le ultime righe del registro prima di un problema, senza i nomi delle cartelle e i numeri di serie dei dispositivi; un record a ogni avvio dell'applicazione; e un identificativo di installazione casuale, generato sul tuo computer e non collegato al tuo account. |
| `privacy.app.3` | Cosa non viene mai inviato: scansioni, progetti e file dei casi, dati dei pazienti, alias o codici dei casi, nomi di file e dati dell'account (nome, email, token di accesso). Il server non conserva il tuo indirizzo IP insieme a questi dati. |
| `privacy.app.4` | Dove vanno e per quanto tempo: solo al server di DentalCraft (auth.dentalcraft.app), mai a terzi. Sono conservati per 90 giorni, poi eliminati, e sono usati solo per trovare e correggere i difetti. Se disattivi l'opzione, i dati non ancora inviati e l'identificativo di installazione vengono eliminati dal tuo computer. Domande: hello@dentalcraft.app. |
| `footer.licence` | Licenza |
| `footer.privacy` | Nota sulla privacy |
| `footer.source` | Codice sorgente (link al repository GitHub) |
| `footer.docs` | Documentazione (link a https://dnviti.github.io/dentalcraft-docs/) |
| `srclicence.label` | Licenza |
| `srclicence.rail` | Codice sorgente |
| `srclicence.headline` | Codice sorgente pubblico, gratuito per uso non commerciale |
| `srclicence.body.1` | Il codice sorgente di DentalCraft è pubblico su GitHub. È source-available, non open source: puoi leggerlo, compilarlo e usarlo per qualsiasi scopo non commerciale, con la PolyForm Noncommercial License 1.0.0. |
| `srclicence.body.2` | L'uso commerciale non è consentito senza una licenza dell'autore. Per richiederla, scrivi a hello@dentalcraft.app. |
| `srclicence.body.3` | Il server degli account è closed source e non fa parte del codice pubblico. DentalCraft non è un dispositivo medico. |
| `srclicence.github` | Codice sorgente su GitHub |
| `srclicence.docs` | Documentazione (link a https://dnviti.github.io/dentalcraft-docs/) |
| `srclicence.fonts` | Questo sito usa i caratteri Atkinson Hyperlegible Next e B612 Mono, entrambi con la SIL Open Font License 1.1: |
| `srclicence.fonts.atkinson` | Atkinson Hyperlegible Next, testo della licenza |
| `srclicence.fonts.b612` | B612 Mono, testo della licenza |

## 12. Pagina Licenza (`/it/licence/`)

La pagina rende `content/licence.md`, la PolyForm Noncommercial License 1.0.0 (stessi byte di `LICENSE.md`, solo in inglese), sotto un breve riassunto in linguaggio semplice per ogni lingua. Il riassunto non fa parte della licenza.

| Chiave | Testo |
| --- | --- |
| `meta.licence.title` | Licenza - DentalCraft, PolyForm Noncommercial 1.0.0 |
| `meta.licence.description` | DentalCraft è source-available con la PolyForm Noncommercial License 1.0.0: gratuito per uso non commerciale. L'uso commerciale richiede una licenza dell'autore. Non è un dispositivo medico. |
| `meta.licence.ogTitle` | Licenza - DentalCraft, PolyForm Noncommercial 1.0.0 |
| `meta.licence.ogDescription` | DentalCraft è source-available e gratuito per uso non commerciale. L'uso commerciale richiede una licenza dell'autore. Non è un dispositivo medico. |
| `licence.label` | Licenza |
| `licence.rail` | Licenza source-available |
| `licence.headline` | Licenza |
| `licence.summary.1` | DentalCraft è source-available con la PolyForm Noncommercial License 1.0.0. Puoi usarlo, modificarlo e condividerlo per qualsiasi scopo non commerciale, gratuitamente. |
| `licence.summary.2` | L'uso commerciale non è consentito senza una licenza dell'autore. Per richiederla, scrivi a hello@dentalcraft.app. |
| `licence.summary.3` | DentalCraft non è un dispositivo medico e non è validato per uso clinico. Viene fornito così com'è, senza garanzia. |
| `licence.note` | Questo riassunto non fa parte della licenza. Il testo qui sotto è il testo inglese ufficiale della PolyForm Noncommercial License 1.0.0 ed è l'unico testo che si applica. |

## 13. Pagina di download (`/it/download/`)

Una card per sistema operativo (Linux, Windows, macOS in seguito), ognuna con due colonne: **Installer** e **Senza installazione**. Compaiono solo i tipi presenti nella versione; una colonna vuota mostra il pulsante disattivato "Non ancora disponibile". Ogni file mostra Versione {version} · {size} · {date} · nome del file e la nota chiusa con lo SHA-256. I comandi da terminale hanno il pulsante Copia. Windows aggiunge la nota su SmartScreen (`downloads.smartscreen`). Sotto le card: le condizioni, il blocco Firme con l'impronta della chiave di rilascio e i link alle due chiavi pubbliche e al file dei checksum, poi l'avviso.

| Chiave | Testo |
| --- | --- |
| `downloads.version` | Versione {version} · {date} |
| `dl.rail` | Installer o senza installazione |
| `dl.headline` | Scarica DentalCraft |
| `dl.body` | Scegli come averlo. L'installer aggiunge DentalCraft al computer e lo tiene aggiornato. La versione senza installazione funziona da una cartella che estrai, senza installare nulla. |
| `dl.updates` | Aggiornamenti: le versioni Flatpak, Fedora e Debian/Ubuntu si aggiornano con il sistema. Tutte le altre controllano questo sito all'avvio di DentalCraft, chiedono prima di aggiornare, verificano la firma dell'aggiornamento prima di installarlo e controllano di nuovo il programma di installazione subito prima di eseguirlo. |
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

Un blocco tra l'introduzione e le schede dei sistemi operativi, con un link dalla sezione download della pagina iniziale. Elenca la release agganciata (`site.data.json` `whatsNew` = le chiavi `new.N`, in ordine), poi le release precedenti conservate in `whatsNewPrevious` (versione, data, chiavi come `new13.N`). Va riscritto a ogni release dell'app, insieme alle funzioni descritte sopra.

| Chiave | Testo |
| --- | --- |
| `new.title` | Novità della versione {version} |
| `new.meta` | Rilasciata il {date} |
| `new.link` | Novità della versione {version} |
| `new.note` | Pianificazione, produzione, esportazione e stampa sono ancora in sviluppo e la scansione 3D è un'alpha iniziale. La stampa è un'anteprima, in alpha, e non è ancora stata verificata con stampe reali. Non è un dispositivo medico. Non per uso clinico. |
| `new.1` | Il salvataggio è più sicuro. DentalCraft non scrive mai un progetto in uno stato che non si può riaprire: se qualcosa non va, il salvataggio si ferma e il file precedente resta com'era. Un problema con la copia di sicurezza ora compare come avviso e non blocca più il salvataggio. Un file di progetto danneggiato o manomesso viene rifiutato in modo pulito quando lo apri, e un progetto con la cronologia dei passaggi vuota si apre normalmente invece di essere trattato come illeggibile. Un comando che non cambia nulla non avvia più un salvataggio, e i messaggi sul salvataggio e sull'apertura dei progetti ora sono anche in italiano. |
| `new.2` | Ricerca dei denti più affidabile. L'arcata ora termina all'ultimo molare vero, anche quando la base del modello dietro di esso è alta quanto il dente, e il controllo automatico non unisce più due denti veri il cui contatto è poco profondo. Un dente del giudizio su un lato non aggiunge più un dente fantasma sull'altro. I numeri dei denti da latte vengono rifiutati con un messaggio chiaro, perché non sono ancora supportati. Un dente ricostruito è sempre un solido senza buchi: i piccoli tunnel che venivano dalla superficie della scansione sono chiusi e, se non se ne riesce a fare uno, il passaggio ti dice quale non è riuscito. |
| `new.3` | I dubbi della ricerca dei denti vengono mostrati. Appena Trova i denti termina, DentalCraft dice che cosa la numerazione ha lasciato in dubbio: la fine dell'arcata lasciata fuori, un tratto senza corona contato come spazio (come la cresta vuota di un dente mancante) o un tratto basso lasciato com'è stato trovato. Gli avvisi restano sullo schermo e tornano quando riapri il progetto, finché non cambi i segni. |
| `new.4` | Le scansioni vengono chiuse in un solido pulito quando le importi. Sotto il bordo di una scansione aperta viene messa una base piana, i piccoli buchi all'interno della scansione vengono riempiti sul posto invece di diventare camini fino alla base, e le facce ripiegate sopra la scansione vengono tolte. Se una scansione non si riesce comunque a chiudere del tutto, DentalCraft ti avvisa e l'avviso resta sullo schermo. |
| `new.5` | I modelli da studio sono solidi puliti, qualunque sia la scansione. Ora mantengono l'anatomia scansionata così com'è, sottosquadri compresi, invece di riempire tutto ciò che le corone nascondono dall'alto. Due arcate che non sono in occlusione hanno ciascuna la propria base. Se un modello da studio non è un solo solido pulito, DentalCraft ti avvisa e la relazione lo conta. L'allineatore che mostri resta accanto al modello da studio. |
| `new.6` | Una sola arcata. Quando un progetto ha una sola arcata non c'è il morso: non viene stimato nulla, il passaggio Morso mostra ‘non si applica’ e gli allineatori si fanno da quella sola arcata. Anche le impostazioni di produzione per il morso con gli allineatori e per le rampe del morso dicono ‘non si applica’, e non compare più l'avviso ‘Morso stimato’. L'elenco dei passaggi è inoltre più preciso: Modelli da studio ed esportazione risultano completati dopo che sono stati eseguiti. |
| `new.7` | I quattro interruttori della vista, colori dei denti, segni dei denti, numeri dei denti e mappa dei contatti, sono sempre nella barra degli strumenti e spenti di default: in un nuovo progetto, in uno aperto e all'avvio dell'applicazione. Mentre il pennello dei denti è aperto, colori e numeri dei denti sono attivi; quando lo lasci, ognuno torna com'era. |
| `new.8` | I limiti di movimento per allineatore ora vengono applicati su ogni percorso, automazione compresa. Un valore fuori dai limiti viene rifiutato con un messaggio. |
| `new.9` | Pianificazione automatica più stabile. Un dente non viene mai ritardato rispetto a un vicino che non si muove mai, perché così si sposta solo lo stesso contatto su un allineatore successivo. Un ritardo resta solo se abbassa la sovrapposizione peggiore di quella coppia su tutto il piano. Una rotazione oltre la tolleranza viene corretta solo per l'eccesso, e per niente sotto mezzo grado. La linea d'arcata che decide dove vanno gli incisivi prende la sua scala una volta sola, da canini e premolari, e l'asse degli ultimi molari tiene quando cambiano pochi vertici. Le collisioni sono controllate su ogni punto della corona, non su un campione. Nel complesso, qualche vertice in più o in meno nella segmentazione ora cambia meno il piano. |
| `new.10` | Le collisioni che il piano automatico non riesce a risolvere sono elencate una per una: l'allineatore, i due denti, quanto in profondità arrivano e di quanto superano il margine consentito. L'elenco è nel pannello Allineatori, anche quando riapri il progetto, e nella relazione dell'esportazione, in italiano e in inglese. |
| `new.11` | Una posizione finale che corregge davvero l'arcata. La posizione finale automatica ora allinea tutti i denti, premolari e molari compresi: i denti dietro uno spazio avanzano per chiuderlo, la linea mediana resta dov'è e gli ultimi molari non arretrano mai. Non viene prevista riduzione dello smalto su un contatto già aperto, né per raddrizzare un premolare o un molare ruotato: la loro rotazione viene corretta solo fin dove l'arcata ha posto. Con Opzioni e parametri avanzati attivi puoi consentire agli ultimi molari di arretrare fino a 0,5 mm. I progetti salvati con i vecchi valori predefiniti prendono i nuovi all'apertura. |
| `new.12` | Aderenza dell'allineatore alla gengiva. L'allineatore lascia un piccolo spazio sopra la gengiva che copre, e il suo bordo resta almeno 1 mm sopra la punta di ogni papilla e a 2 mm dal margine gengivale di ogni dente. L'aderenza ai denti non cambia. |
| `new.13` | Un allineatore dritto tra i denti. Il bordo dell'allineatore ora è dritto, all'altezza della parte più larga di ogni corona, e l'allineatore passa dritto da un dente al successivo: non entra più negli spazi tra i denti, sopra o sotto il contatto, dove era fragile e d'intralcio. I progetti salvati con questa versione si aprono nelle versioni precedenti con le impostazioni dell'allineatore in sola lettura. |
| `new.14` | L'allineatore che chiedi di vedere nella vista 3D ora viene disegnato anche sopra la scansione e sopra il modello da studio e segue il cursore degli stadi. |
| `new.15` | Gusci degli allineatori ed esportazione: è corretto un caso in cui il bordo di rifilatura poteva lasciare un piccolo foro nella parete vicino ai denti posteriori, e il controllo dell'esportazione ora dice dove si trova un foro. Ogni allineatore passivo porta inciso il proprio numero, un segno P e la propria data. |
| `new.16` | Preparazione alla stampa: le parti aperte o invertite, e i gusci con un foro nella parete, vengono rifiutati prima del taglio. Il controllo di stampa concorda con quello dell'esportazione su ciò che è un solido chiuso, e le parti vengono lette esattamente come salvate. Vengono provate in automatico più posizioni perché ogni pezzo possa appoggiarsi a un supporto; quando nessuna posizione funziona, il messaggio dice che il guscio stesso va corretto. I vecchi file del piatto non restano più accanto ai nuovi. Un avviso dice che dimensioni e orientamento destra/sinistra del profilo della stampante non sono ancora controllati rispetto alla stampante, quindi verifica prima un pezzo di prova. La stampa è ancora un'anteprima in alpha, non ancora verificata con stampe reali. |
| `new.17` | L'elenco dei passaggi segue il caso. Un passaggio risulta completato solo finché il caso ne contiene il risultato, Annulla e Ripristina riportano i passaggi com'erano, e un'esportazione o un'esecuzione di tutto restano completate finché un'impostazione o un passaggio rieseguito non le rende non aggiornate. |
| `new.18` | Accesso e aggiornamenti: un orologio del computer sbagliato non ti fa più uscire dall'account e DentalCraft mostra invece un messaggio sull'orologio. Il programma di installazione viene controllato di nuovo subito prima di essere eseguito. |
| `new.19` | Diagnostica, solo se acconsenti: i nomi delle cartelle e i numeri di serie dei dispositivi vengono rimossi in modo più accurato da ciò che viene inviato, e il consenso può darlo solo l'utente, nell'applicazione. |
| `new.20` | Automazione: la porta di controllo locale dell'applicazione in esecuzione, usata da dentalcraft-cli e dal suo server MCP, ora richiede un segreto creato a ogni avvio. Lo strumento da riga di comando lo trova da solo. |
| `new15.1` | La registrazione del morso ora funziona anche con scansioni del morso parziali o di bassa qualità. Basta una buona parte anteriore: quando il risultato è incerto, DentalCraft registra il morso e lo segna come ‘da verificare’ invece di rifiutarlo. Rifiuta ancora una scansione del morso di cui non si riesce a stabilire la posizione o che non combacia (per esempio una speculare). |
| `new15.2` | La scansione del morso serve solo a mettere in occlusione l'arcata superiore e quella inferiore e non viene più mostrata nella vista 3D. Compare solo mentre scegli a mano i tre punti. |
| `new15.3` | Le scansioni e i modelli importati si possono rimuovere dal caso. Usa il cestino su una riga dell'elenco delle scansioni o dei morsi, il pulsante Rimuovi la scansione nel pannello del componente selezionato, oppure il tasto Canc o Backspace su una scansione selezionata. DentalCraft chiede conferma, cancella ciò che era stato calcolato da quella scansione e Ctrl+Z riporta tutto com'era. |
| `new15.4` | I denti 3D sono sempre modelli chiusi: ogni dente è un solido chiuso e la gengiva è chiusa con una base di 3 mm. |
| `new15.5` | Numerazione automatica dei denti più affidabile. Un controllo ora corregge i denti trovati per errore dietro gli ultimi molari e i denti vicini uniti per errore in uno solo. |
| `new14.1` | La finestra Stampa ora ricava il lato che combacia con i denti dal modello dello stadio salvato con l'esportazione, quindi quel lato è noto e non indovinato dalla forma dell'allineatore. |
| `new14.2` | Quando il modello dello stadio non è disponibile e DentalCraft deve indovinare il lato che combacia dalla forma, la finestra Stampa lo segnala: controlla l'orientamento prima di stampare. La stampa è ancora un'anteprima in alpha, non ancora verificata con stampe reali. |
| `new13.1` | Una finestra Impostazioni, che si apre dal menu in alto a destra. Raccoglie in un posto solo le opzioni generali, l'area di lavoro, gli aggiornamenti e la privacy. |
| `new13.2` | Un'interfaccia semplice di default. Con Opzioni e parametri avanzati disattivato, come all'inizio, i pannelli laterali mostrano solo i passaggi automatici e le correzioni più utili, e il menu segna il passo successivo (Avanti). Attiva l'opzione per vedere tutti i parametri e i valori tecnici. |
| `new13.3` | Stampa diretta degli allineatori. Una nuova finestra Stampa prepara gli allineatori per la Elegoo Saturn 4 Ultra 16K: ognuno viene orientato in automatico in modo che il lato che combacia con i denti sia rivolto lontano dal piatto, i supporti sono aggiunti solo sul lato esterno e ogni pezzo poggia su una base a U. |
| `new13.4` | I pezzi vengono disposti sul piatto e tagliati in file GOO con i parametri macchina DENTAL 45 della stampante. Salvi i file in una cartella o su una chiavetta USB e stampi dalla stampante. La stampa in rete non è ancora disponibile. |
| `new13.5` | DentalCraft tiene traccia di ogni allineatore: stampato o ancora mancante. Il registro si salva insieme al caso. La stampa è un'anteprima in alpha: non è ancora stata verificata con stampe reali, quindi gli allineatori stampati non sono validati. |
| `new13.6` | Il codice è pubblico su GitHub (source-available, con la PolyForm Noncommercial License 1.0.0) e la documentazione è online su https://dnviti.github.io/dentalcraft-docs/. Entrambi sono collegati dal piè di pagina e dalla pagina «Su DentalCraft». |
