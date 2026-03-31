import { prisma } from '../lib/prisma';
import type { AdapterUpdate } from '../types';

export const findAdapter = async ({
  userId,
  id,
}: {
  userId: string;
  id: string;
}) => {
  return await prisma.adapter.findUnique({
    where: {
      id,
      userId,
    },
  });
};

export const updateAdapter = async ({
  id,
  data,
}: {
  id: string;
  data: AdapterUpdate;
}) => {
  await prisma.adapter.update({
    where: {
      id,
    },
    data: {
      access_token: data!.access_token,
      expires_in: new Date(Date.now() + data!.expires_in * 1000),
      ...(data!.refresh_token && {
        refresh_token: data!.refresh_token,
      }),
    },
  });
};
