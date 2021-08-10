class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class MobileCar extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const myCar = new MobileCar(4, 'red');
myCar.startDrivingProcess();
