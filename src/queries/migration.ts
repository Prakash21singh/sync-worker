import type { MigrationFileStatus } from '../../prisma/generated/prisma/enums';
import { prisma } from '../lib/prisma';

export const findMigration = async ({
  userId,
  migrationId,
}: {
  userId: string;
  migrationId: string;
}) => {
  return await prisma.migration.findUnique({
    where: {
      id: migrationId,
      userId,
    },
  });
};

export const findMigrationSelections = async ({
  migrationId,
}: {
  migrationId: string;
}) => {
  return await prisma.migrationSelection.findMany({
    where: {
      migrationId,
    },
  });
};

export const updateMigration = async (
  id: string,
  data: Record<string, any>,
) => {
  return await prisma.migration.update({
    where: {
      id,
    },
    data,
  });
};

export const createMigrationFiles = async (data: any[]) => {
  return await prisma.migrationFile.createMany({
    data: data,
  });
};

export const findMigrationFiles = async (migrationId: string) => {
  return await prisma.migrationFile.findMany({
    where: {
      migrationId,
    },
  });
};

export const updateMigrationFile = async (
  id: string,
  status: MigrationFileStatus,
) => {
  return await prisma.migrationFile.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
};
