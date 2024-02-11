import { ILightSystem } from "./ILightSystem";

export class LightSystemOne implements ILightSystem {
  turnOn() {
    console.log("Lights turned on");

  }

  turnOff() {
    console.log("Lights turned off");

  }
}
