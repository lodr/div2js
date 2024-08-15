import Fpg from "./wgl2idx/fpg";
import Palette from "./wgl2idx/palette";

interface Div2VideoSystem {
  putPixel(x: number, y: number, colorIndex: number): void;
  putScreen(fpgId: number, mapId: number): number;
  setPalette(palette: Palette): void;
  loadFpg(fpg: Fpg): number;
  xput(fpgId: number, mapId: number, x: number, y: number, angle: number, size: number, flags: number, region: number): void;
}

export { Div2VideoSystem };
