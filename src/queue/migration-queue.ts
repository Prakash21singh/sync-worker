import 'dotenv/config';
import { Queue } from 'bullmq';
import { redis } from '../lib/redis';

export const migrationQueue = new Queue(process.env.MIGRATION_QUEUE_NAME!, {
  connection: redis,
});
