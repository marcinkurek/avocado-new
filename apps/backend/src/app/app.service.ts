import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '@avocado/database-api';

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

@Injectable()
export class AppService {
  async getData(): Promise<{ message: string }> {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });

    return { message: `${users.length}` };
  }
}
