export const motStatuses = ['PASS', 'FAIL', 'ADVISORY', 'NOT_TESTED'];

export const sampleMotData: any = [
  {
    vehicleId: 'V001',
    testDate: '2023-08-15',
    expiryDate: '2024-08-14',
    status: 'PASS',
    mileage: 45230,
    defects: []
  },
  {
    vehicleId: 'V002', 
    testDate: '2023-09-22',
    expiryDate: '2024-09-21',
    status: 'FAIL',
    mileage: 67890,
    defects: [
      { severity: 'DANGEROUS', description: 'Brake pad worn' },
      { severity: 'MAJOR', description: 'Tyre tread depth' }
    ]
  },
  {
    vehicleId: 'V003',
    testDate: '2023-07-10',
    expiryDate: '2024-07-09', 
    status: 'ADVISORY',
    mileage: 23450,
    defects: [
      { severity: 'MINOR', description: 'Windscreen chip' }
    ]
  }
];