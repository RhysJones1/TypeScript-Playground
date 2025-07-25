# TypeScript-Playground

A hands-on TypeScript learning environment using DVLA vehicle data.

## Getting Started

```bash
npm install
npm run dev
```

## Structure

- `src/types/` - TypeScript type definitions
- `src/data/` - Sample data for practice
- `src/utils/` - Service classes and utilities
- `src/index.ts` - Main entry point

## Practice Tasks

### Beginner
1. Create union types for vehicle colours, fuel types, and MOT statuses
2. Define interfaces for Vehicle, FuelData, and MotTest
3. Create enums for TaxBand and VehicleClass

### Intermediate  
4. Build service methods to filter vehicles by fuel type, class, or MOT status
5. Create utility functions to calculate tax based on CO2 emissions
6. Implement type guards for data validation

### Advanced
7. Create generic functions for data filtering and sorting
8. Build a vehicle registry system with CRUD operations
9. Add conditional types for different vehicle properties based on class