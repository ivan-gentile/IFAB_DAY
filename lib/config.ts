import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Vuoi provare a chiedere informazioni sul report di sostenibilità di RyanAir 2023?",
    prompt: "Vorrei sapere quali sono i principali indicatori di performance ambientale e sociale di RyanAir per il 2023, come energia, emissioni di CO2, ecc.",
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
    label: "random",
    prompt: "Che innovazione porterebbe IFAB se fossimo nel paleolitico? e cosa diceva Eco riguardo l'inizio dei Promessi Sposi?",
    icon: "bug",
  },
];

export const PLACEHOLDER_INPUT = "Chiedi qui info su Progetto, CSRD E GRI o specifiche su report sostenibilità RyanAir";

export const GREETING = "Benvenuto Umarell! Come posso aiutarti?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 150, 
      tint: 8,
      shade: theme === "dark" ? -2 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#34d399" : "#059669",
      level: 1,
    },
  },
  radius: "round",
});