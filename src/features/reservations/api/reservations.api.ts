import { createServerFn } from '@tanstack/react-start';
import { prisma } from '@/shared/lib/prisma';

export const getReservationsFn = createServerFn({ method: 'GET' }).handler(async () =>
  prisma.reservation.findMany({
    include: {
      user: { select: { id: true, name: true, email: true, nim: true } },
      room: { select: { id: true, name: true, location: true } },
    },
    orderBy: { createdAt: 'desc' },
  }),
);

export const getReservationStatsFn = createServerFn({ method: 'GET' }).handler(
  async () => {
    const [total, pending, approved, rejected] = await Promise.all([
      prisma.reservation.count(),
      prisma.reservation.count({ where: { status: 'PENDING' } }),
      prisma.reservation.count({ where: { status: 'APPROVED' } }),
      prisma.reservation.count({ where: { status: 'REJECTED' } }),
    ]);
    return { total, pending, approved, rejected };
  },
);

export const updateReservationStatusFn = createServerFn({ method: 'POST' })
  .inputValidator(
    (data: { id: string; status: 'APPROVED' | 'REJECTED' | 'CANCELLED' }) => data,
  )
  .handler(async ({ data }) =>
    prisma.reservation.update({
      where: { id: data.id },
      data: { status: data.status },
    }),
  );

export const createReservationFn = createServerFn({ method: 'POST' })
  .inputValidator(
    (data: {
      userId: string;
      roomId: string;
      startTime: string;
      endTime: string;
      purpose: string;
    }) => data,
  )
  .handler(async ({ data }) => {
    const startTime = new Date(data.startTime);
    const endTime = new Date(data.endTime);

    const conflicting = await prisma.reservation.findFirst({
      where: {
        roomId: data.roomId,
        status: { in: ['PENDING', 'APPROVED'] },
        OR: [
          { startTime: { lte: startTime }, endTime: { gt: startTime } },
          { startTime: { lt: endTime }, endTime: { gte: endTime } },
          { startTime: { gte: startTime }, endTime: { lte: endTime } },
        ],
      },
    });

    if (conflicting) {
      return {
        success: false,
        error: 'This time slot conflicts with an existing reservation',
      };
    }

    const reservation = await prisma.reservation.create({
      data: {
        userId: data.userId,
        roomId: data.roomId,
        startTime,
        endTime,
        purpose: data.purpose,
        status: 'PENDING',
      },
    });

    return { success: true, reservation };
  });
