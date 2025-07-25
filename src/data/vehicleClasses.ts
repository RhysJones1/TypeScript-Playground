export const vehicleClasses = [
  'M1', // Passenger cars
  'M2', // Buses/coaches ≤ 5 tonnes
  'M3', // Buses/coaches > 5 tonnes
  'N1', // Light commercial ≤ 3.5 tonnes
  'N2', // Medium commercial 3.5-12 tonnes
  'N3', // Heavy commercial > 12 tonnes
  'L1', // Mopeds ≤ 50cc
  'L3', // Motorcycles > 50cc
  'T',  // Agricultural tractors
  'O1', // Light trailers ≤ 0.75 tonnes
  'O2', // Medium trailers 0.75-3.5 tonnes
  'O3', // Heavy trailers 3.5-10 tonnes
  'O4'  // Very heavy trailers > 10 tonnes
];

export const sampleClassData: any = [
  { vehicleId: 'V001', class: 'M1', maxWeight: 2500, seats: 5 },
  { vehicleId: 'V002', class: 'N1', maxWeight: 3200, loadCapacity: 1000 },
  { vehicleId: 'V003', class: 'L3', maxWeight: 180, engineSize: 600 },
  { vehicleId: 'V004', class: 'M2', maxWeight: 4800, seats: 16 }
];