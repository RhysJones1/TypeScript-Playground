import { vehicleColours } from './data/colours';
import { sampleVehicleData } from './data/vehicle';
import { fuelTypeCodes, sampleFuelData } from './data/fuelTypes';
import { vehicleClasses, sampleClassData } from './data/vehicleClasses';
import { motStatuses, sampleMotData } from './data/motHistory';
import { taxBands, sampleTaxData } from './data/taxBands';

console.log('=== DVLA TypeScript Playground ===');
console.log('Vehicle colours:', vehicleColours);
console.log('Fuel types:', fuelTypeCodes);
console.log('Vehicle classes:', vehicleClasses);
console.log('MOT statuses:', motStatuses);
console.log('Tax bands:', taxBands);
console.log('\n=== Sample Data ===');
console.log('Vehicles:', sampleVehicleData);
console.log('Fuel data:', sampleFuelData);
console.log('Class data:', sampleClassData);
console.log('MOT data:', sampleMotData);
console.log('Tax data:', sampleTaxData);