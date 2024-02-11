import { Bike } from "./Bike";
import { Car } from "./Car";
import { IProduct } from "./IProduct";

export class ProductFactory {

  static createProduct(type: string): IProduct {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        throw new Error("Unknown product type.");
    }
  }
}
