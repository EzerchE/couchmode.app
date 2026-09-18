import type { ReleaseEditorialOverlay } from "../../release-editorial";

export const italianReleaseEditorialOverlay: ReleaseEditorialOverlay = {
  entries: [
    {
      version: "0.6.0-rc.10",
      summary:
        "Migliorati l'avvio di Xbox a schermo intero, il rilevamento delle console portatili, la compatibilità con Playnite e l'affidabilità degli aggiornamenti.",
      notes: [
        "Avvio dell'esperienza Xbox a schermo intero più affidabile sulle console portatili Windows.",
        "Migliorato il rilevamento di controller e console portatili su diversi dispositivi Windows.",
        "Più affidabili l'accesso alla sessione Xbox a schermo intero, l'attivazione della finestra e il ritorno al desktop.",
        "Playnite ora supporta in modo più affidabile i percorsi di installazione personalizzati e le installazioni portabili.",
        "Migliorato il controllo degli aggiornamenti, con messaggi più chiari.",
        "Unificata la verifica del supporto Xbox a schermo intero in Settings.",
        "Miglioramenti generali dell'affidabilità.",
      ],
      knownIssues: [],
    },
    {
      version: "0.6.0-rc.9",
      summary:
        "Passaggio a Pro più semplice, gestione dell'account più affidabile e migliore accessibilità.",
      notes: [
        "Il passaggio a Pro è più chiaro: un'unica azione ben visibile per ottenere Pro e opzioni coerenti con lo stato dell'account.",
        "Se hai già un abbonamento, CouchMode propone di aggiornarne lo stato invece di chiederti di collegarlo di nuovo.",
        "La gestione dell'abbonamento è più completa. Puoi passare a un altro account o rimuovere l'attivazione di questo PC in qualsiasi momento; prima di rimuoverla viene ora richiesta una conferma.",
        "L'accesso viene ora completato in modo affidabile anche se chiudi la finestra di CouchMode mentre è ancora in corso.",
        "CouchMode ora rispetta l'impostazione di Windows per la riduzione delle animazioni in tutta l'app.",
        "Corretto il badge Pro dell'opzione per launcher personalizzati: ora apre correttamente la richiesta di passaggio a Pro.",
      ],
      knownIssues: [
        "La disponibilità della modalità Xbox dipende dalla versione di Windows, dal supporto del dispositivo e dell'app Xbox, dall'area geografica e dallo stato della distribuzione di Microsoft.",
        "Al momento i controller PlayStation non possono avviare o terminare le sessioni CouchMode con una connessione nativa, perché Windows non ne espone lo stato di connessione tramite XInput.",
        "Su alcune console portatili e alcuni portatili, il controller integrato viene intenzionalmente ignorato come segnale di avvio della sessione; potrebbe quindi servire un controller esterno.",
      ],
    },
    {
      version: "0.6.0-rc.8",
      summary:
        "Steam Big Picture e Playnite Fullscreen sono ora gratuiti, insieme all'esperienza Xbox a schermo intero. Launcher personalizzati, Resource Control e Session Tweaks restano funzioni Pro.",
      notes: [
        "Steam Big Picture e Playnite Fullscreen sono ora disponibili senza Pro, insieme all'esperienza Xbox a schermo intero.",
        "Launcher personalizzati, Resource Control e Session Tweaks restano funzioni Pro.",
        "Le sessioni Steam Big Picture già aperte vengono mantenute quando termina la sessione CouchMode.",
        "Gestione di Playnite più affidabile: se è già aperto, anche con una finestra ridotta a icona, viene riconosciuto e utilizzato senza avviarne una seconda copia e rimane aperto al termine della sessione CouchMode.",
        "Launcher personalizzati più affidabili: migliore gestione della finestra attiva, distinzione più chiara dei processi gestiti da CouchMode e chiusura più ordinata.",
        "I launcher personalizzati ora si avviano nella propria cartella, così quelli che richiedono l'esecuzione dalla directory di installazione funzionano correttamente.",
        "Un launcher viene considerato pronto solo quando una delle sue finestre effettive è in primo piano, in modo che il controller possa davvero comandarlo.",
        "Migliorato il rilevamento di Xbox a schermo intero sui PC desktop e sulle console portatili Windows.",
        "Corretti i casi in cui dispositivi supportati potevano risultare non supportati o richiedere ripetutamente una verifica.",
        "Rilevamento più preciso dei controller integrati ed esterni, basato sul tipo di connessione anziché sul produttore.",
        "Messaggi più chiari quando Windows non riconosce un controller come controller Xbox (XInput).",
        "Resource Control più affidabile: migliore rilevamento delle app selezionate, chiusura e riapertura più sicure e indicazioni più precise sulle app effettivamente chiuse.",
        "Maggiore affidabilità di Launch on Enter, Close on Exit, Launch on Exit e Display on Exit.",
        "Ritorno al desktop più sicuro al termine di una sessione.",
        "Migliorate la diagnostica e la segnalazione dei problemi.",
        "Miglioramenti generali dell'affidabilità delle sessioni e degli aggiornamenti.",
      ],
      knownIssues: [
        "L'attivazione di un dispositivo può essere rimossa solo dal PC interessato; l'app non offre un'opzione per disconnettersi da tutti i dispositivi.",
        "Funzione sperimentale: Xbox Full-Screen Experience dipende dal comportamento di Windows. Su alcuni dispositivi, la navigazione con il controller potrebbe non ricevere automaticamente il focus e potrebbe essere necessario premere una volta il pulsante Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.191",
      summary:
        "Collega un controller per aprire Steam Big Picture, Playnite o l'app scelta a schermo intero. Se l'uscita alla disconnessione è configurata, scollegarlo avvia la chiusura della sessione dopo il ritardo previsto e il ritorno al desktop.",
      notes: [
        "Migliorato il rilevamento di Xbox a schermo intero sui PC desktop e sulle console portatili Windows.",
        "Corretti i casi in cui dispositivi supportati potevano risultare erroneamente non supportati o richiedere verifiche ripetute.",
        "Migliorata l'affidabilità dell'ingresso, dell'uscita e del ritorno dalle sessioni Xbox a schermo intero.",
        "Migliorato il rilevamento dei controller integrati ed esterni, inclusi quelli esterni che potevano essere scambiati per controller integrati delle console portatili.",
        "Migliorato il ripristino del desktop dopo una sessione di gioco: CouchMode ora evita di modificare inutilmente le finestre già accessibili.",
        "Migliorate le informazioni diagnostiche disponibili nelle segnalazioni di bug.",
        "Migliorate la gestione dello stato degli aggiornamenti e l'affidabilità generale.",
      ],
      knownIssues: [
        "L'attivazione di un dispositivo può essere rimossa solo dal PC interessato; l'app non offre un'opzione per disconnettersi da tutti i dispositivi.",
        "Funzione sperimentale: Xbox Full-Screen Experience dipende dal comportamento di Windows. Su alcuni dispositivi, la navigazione con il controller potrebbe non ricevere automaticamente il focus e potrebbe essere necessario premere una volta il pulsante Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.190",
      summary:
        "Collega un controller per aprire Steam Big Picture, Playnite o l'app scelta a schermo intero. Se l'uscita alla disconnessione è configurata, scollegarlo avvia la chiusura della sessione dopo il ritardo previsto e il ritorno al desktop.",
      notes: [
        "Corretto un problema che poteva impedire al comando Exit del menu nell'area di notifica di rispondere.",
        "Maggiore affidabilità nel mantenere le applicazioni aperte in esecuzione e accessibili dopo l'uscita dalla modalità Xbox.",
        "Migliorato il recupero sicuro delle finestre che altrimenti potevano rimanere fuori schermo o inutilizzabili.",
        "Migliorato il rilevamento dei controller integrati ed esterni sulle console portatili.",
        "Migliorate la verifica del ritorno al desktop e la stabilità complessiva della sessione.",
        "Miglioramenti generali dell'affidabilità.",
      ],
      knownIssues: [
        "L'attivazione di un dispositivo può essere rimossa solo dal PC interessato; l'app non offre un'opzione per disconnettersi da tutti i dispositivi.",
        "Funzione sperimentale: Xbox Full-Screen Experience dipende dal comportamento di Windows. Su alcuni dispositivi, la navigazione con il controller potrebbe non ricevere automaticamente il focus e potrebbe essere necessario premere una volta il pulsante Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.183",
      summary:
        "Collega un controller per aprire Steam Big Picture, Playnite o l'app scelta a schermo intero. Se l'uscita alla disconnessione è configurata, scollegarlo avvia la chiusura della sessione dopo il ritardo previsto e il ritorno al desktop.",
      notes: [
        "Le sessioni di Steam Big Picture, Playnite a schermo intero e dell'app personalizzata che CouchMode avvia e gestisce si chiudono in modo affidabile alla disconnessione del controller, se l'uscita è configurata e dopo il ritardo previsto, riportando al desktop.",
        "Il ritorno al desktop viene verificato a ogni uscita, non dato per scontato.",
        "Resource Control, se attivato, chiude le app selezionate per la sessione e le riapre in seguito. Usa un elenco fissato prima dell'inizio della sessione, quindi non interviene sulle app aperte successivamente.",
        "Miglioramenti generali dell'affidabilità dell'accesso Pro, delle verifiche dell'abbonamento e della verifica della licenza all'avvio.",
        "Prezzi, prova di 7 giorni, periodo di tolleranza offline, piani e limiti sui dispositivi restano invariati.",
      ],
      knownIssues: [
        "L'attivazione di un dispositivo può essere rimossa solo dal PC interessato; l'app non offre un'opzione per disconnettersi da tutti i dispositivi.",
        "Funzione sperimentale: Xbox Full-Screen Experience dipende dal comportamento di Windows. Su alcuni dispositivi, la navigazione con il controller potrebbe non ricevere automaticamente il focus e potrebbe essere necessario premere una volta il pulsante Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.45",
      summary:
        "Invio delle segnalazioni, controllo degli aggiornamenti, indicazione meno invasiva dell'indisponibilità di Xbox a schermo intero e aggiornamento dell'identità visiva di CouchMode.",
      notes: [
        "Report a problem permette di inviare segnalazioni approvate dall'utente.",
        "Aggiunto il controllo degli aggiornamenti.",
        "L'indicazione dell'indisponibilità di Xbox a schermo intero è meno invasiva e persistente.",
        "Il programma di installazione e l'identità dell'app utilizzano il marchio CouchMode.",
      ],
      knownIssues: ["Il download pubblico non era abilitato per questa versione."],
    },
  ],
};
