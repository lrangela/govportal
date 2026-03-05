import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { faker } from '@faker-js/faker';

faker.seed(123);

type Citizen = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  region: string;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
  updatedAt: string;
};

type Permit = {
  id: string;
  citizenId: string;
  type: 'TRANSPORT' | 'BUSINESS' | 'CONSTRUCTION';
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  region: string;
  createdAt: string;
  updatedAt: string;
};

type Application = {
  id: string;
  citizenId: string;
  permitId?: string;
  status: 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'COMPLETED';
  region: string;
  createdAt: string;
  updatedAt: string;
};

const baseDate = new Date('2026-01-01T00:00:00.000Z');

let offset = 0;

const nextDate = () => {
  const d = new Date(baseDate);
  d.setMinutes(offset++);
  return d.toISOString();
};;

const regions = ['LIMA', 'CUSCO', 'AREQUIPA', 'PIURA'];

const citizens: Citizen[] = Array.from({ length: 50 }).map(() => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  region: faker.helpers.arrayElement(regions),
  status: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE']),
  createdAt: nextDate(),
  updatedAt: nextDate(),
}));

const permits: Permit[] = Array.from({ length: 50 }).map(() => {
  const citizen = faker.helpers.arrayElement(citizens);

  return {
    id: faker.string.uuid(),
    citizenId: citizen.id,
    type: faker.helpers.arrayElement(['TRANSPORT', 'BUSINESS', 'CONSTRUCTION']),
    status: faker.helpers.arrayElement(['PENDING', 'APPROVED', 'REJECTED']),
    region: citizen.region,
    createdAt: nextDate(),
    updatedAt: nextDate(),
  };
});

const applications: Application[] = Array.from({ length: 50 }).map(() => {
  const citizen = faker.helpers.arrayElement(citizens);
  const maybePermit =
    faker.number.int({ min: 0, max: 1 }) === 1
      ? faker.helpers.arrayElement(permits)
      : undefined;

  return {
    id: faker.string.uuid(),
    citizenId: citizen.id,
    permitId: maybePermit?.id,
    status: faker.helpers.arrayElement([
      'DRAFT',
      'SUBMITTED',
      'UNDER_REVIEW',
      'COMPLETED',
    ]),
    region: citizen.region,
    createdAt: nextDate(),
    updatedAt: nextDate(),
  };
});

const db = {
  citizens,
  permits,
  applications,
};

const outputPath = resolve(process.cwd(), 'tools/mock-api/db.json');

writeFileSync(outputPath, JSON.stringify(db, null, 2));

console.log('Mock DB generated at:', outputPath);
