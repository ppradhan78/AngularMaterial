import { ILightSystem } from "./ILightSystem";
import { ISecuritySystem } from "./ISecuritySystem";

export class HomeAutomationFacade {
  constructor(
    private lightSystem: ILightSystem,
    private securitySystem: ISecuritySystem
  ) { }

  goodMorning() {
    // Turn on the lights and disarm the security system
    this.lightSystem.turnOn();
    this.securitySystem.disarm();
  }

  goodNight() {
    // Turn off the lights and arm the security system
    this.lightSystem.turnOff();
    this.securitySystem.arm();
  }
}
