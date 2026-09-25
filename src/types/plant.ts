export type Environment = {
  key: string;
  name: string;
};

export type Plant = {
  id: string;
  name: string;
  about: string;
  water_tip: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: "day" | "week";
  };
};