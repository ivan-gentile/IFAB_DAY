import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Quali sono le principali differenze tra GRI ed ESRS?",
    prompt: "Spiegami le differenze chiave tra gli standard GRI e i nuovi standard ESRS per il reporting di sostenibilità, con focus sui cambiamenti principali per le aziende europee",
    icon: "book-open",
  },
  {
    label: "Come funziona la doppia materialità nel CSRD?",
    prompt: "Vorrei capire il concetto di doppia materialità (double materiality) richiesto dalla CSRD e come si differenzia dall'approccio tradizionale della materialità singola",
    icon: "atom",
  },
  {
    label: "Quali sono i requisiti ESRS per il climate reporting?",
    prompt: "Mostrami i requisiti specifici degli standard ESRS E1 per la rendicontazione delle informazioni sul clima, inclusi KPI e metriche obbligatorie",
    icon: "notebook-pencil",
  },
  {
    label: "Come il progetto estrae dati dai report di sostenibilità?",
    prompt: "Spiegami come il progetto utilizza gli LLM per estrarre automaticamente informazioni dai report di sostenibilità e quali sono i vantaggi di questo approccio",
    icon: "star-filled",
  },
  {
    label: "Timeline di implementazione CSRD per le aziende",
    prompt: "Qual è la timeline di implementazione della CSRD per i diversi tipi di aziende? Chi deve iniziare a reportare e quando?",
    icon: "circle-question",
  },
  {
    label: "Mappatura da GRI a ESRS: guida pratica",
    prompt: "Ho già un report GRI. Come posso mappare i miei attuali disclosure GRI ai nuovi requisiti ESRS? Esistono tabelle di corrispondenza?",
    icon: "maps",
  },
  {
    label: "random",
    prompt: "Che innovazione porterebbe IFAB se fossimo nel paleolitico? e cosa diceva Eco riguardo l'inizio dei Promessi Sposi?",
    icon: "bug",
  },
];

export const PLACEHOLDER_INPUT = "Come posso prepararmi alla transizione da GRI a ESRS?";

export const GREETING = "Bella chicca/o! Sono qui per aiutarti a navigare il mondo del sustainability reporting. Posso rispondere a domande su ESRS, CSRD, GRI, e su come il nostro progetto utilizza l'AI per analizzare i report di sostenibilità. Come posso aiutarti?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 150, // Verde-grigio più naturale
      tint: 8,
      shade: theme === "dark" ? -2 : -5,
    },
    accent: {
      primary: theme === "dark" ? "#34d399" : "#059669", // Verde smeraldo più brillante
      level: 1,
    },
  },
  radius: "round",
});