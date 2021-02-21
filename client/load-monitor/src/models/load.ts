// kan väl kallas modeller, men om denna mapp bara ska innehålla
// typer så borde den kanske heta det?

export interface Load {
  normalized: Array<number>;
  timestamp: number;
  cpus: Array<Array<number>>;
}
