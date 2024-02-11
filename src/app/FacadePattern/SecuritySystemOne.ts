import { ISecuritySystem } from "./ISecuritySystem";

export class SecuritySystemOne implements ISecuritySystem {
  arm() {
    console.log("Security system armed");

  }

  disarm() {
    console.log("Security system disarmed");

  }
}
