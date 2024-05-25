import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

const adapter = new PrismaD1(import.meta.env.DB);

// globalにprismaが既に定義されていればnewする
export const prisma = global.prisma ?? new PrismaClient({ adapter });
global.prisma = prisma;
