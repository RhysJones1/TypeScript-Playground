export const fuelTypeCodes = [
  { code: 'P', description: 'Petrol' },
  { code: 'D', description: 'Diesel' },
  { code: 'E', description: 'Electric' },
  { code: 'H', description: 'Hybrid' },
  { code: 'G', description: 'Gas' },
  { code: 'O', description: 'Other' }
];

export const sampleFuelData: any = [
  { vehicleId: 'V001', fuelType: 'P', consumption: 45.2, tankCapacity: 60 },
  { vehicleId: 'V002', fuelType: 'D', consumption: 52.1, tankCapacity: 70 },
  { vehicleId: 'V003', fuelType: 'E', consumption: 0, batteryCapacity: 75 },
  { vehicleId: 'V004', fuelType: 'H', consumption: 65.8, tankCapacity: 45 }
];