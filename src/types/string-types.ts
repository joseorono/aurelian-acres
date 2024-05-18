import { z } from 'zod';

export const nonEmptyString = z.string().min(1).brand('NonEmptyString');
export type NonEmptyString = z.infer<typeof nonEmptyString>;

export const dateTimeString = z.string().datetime().brand('DateTimeString');
export type DateTimeString = z.infer<typeof dateTimeString>;
