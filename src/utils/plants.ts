import { Plant } from "@/types/plant";

export const plants: Plant[] = [
  {
    id: "1",
    name: "Imbé",
    about: "Ideal para deixar em ambientes com pouca luz e pouca água.",
    water_tip: "A rega deve ser feita a cada 3 dias.",
    environments: ["sala", "quarto"],
    frequency: { times: 1, repeat_every: "day" },
  },
  {
    id: "2",
    name: "Peperomia",
    about:
      "Não pode pegar sol e deve ficar em temperatura ambiente, dentro de casa.",
    water_tip: "A rega deve ser feita com 400ml a cada dois dias.",
    environments: ["quarto"],
    frequency: { times: 1, repeat_every: "day" },
  },
  {
    id: "3",
    name: "Aningapara",
    about: "Gosta de ambientes úmidos e com boa luminosidade indireta.",
    water_tip: "A rega deve ser feita a cada 2 dias.",
    environments: ["sala", "banheiro"],
    frequency: { times: 1, repeat_every: "day" },
  },
  {
    id: "4",
    name: "Yucca",
    about: "Resistente, precisa de pouca água e bastante luz.",
    water_tip: "A rega deve ser feita a cada 7 dias.",
    environments: ["sala", "varanda"],
    frequency: { times: 1, repeat_every: "week" },
  },
  {
    id: "5",
    name: "Zamioculca",
    about: "Ótima para quem esquece de regar, sobrevive com pouca água.",
    water_tip: "A rega deve ser feita a cada 7 dias.",
    environments: ["quarto", "cozinha"],
    frequency: { times: 1, repeat_every: "week" },
  },
];