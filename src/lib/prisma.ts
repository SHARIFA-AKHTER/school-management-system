
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default prisma;

// import { PrismaClient } from '@prisma/client';
// import { Pool } from 'pg';
// import { PrismaPg } from '@prisma/adapter-pg';
// import { env } from './env.js';

// const pool = new Pool({
//   connectionString: env.database_url,
// });

// const adapter = new PrismaPg(pool);

// export const prisma = new PrismaClient({
//   adapter,
// });

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };