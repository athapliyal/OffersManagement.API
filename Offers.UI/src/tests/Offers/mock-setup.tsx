import { rest, setupWorker } from 'msw';
import { Offer } from '../../models';

const offers: Offer[] = [
 {
  id: "1",
  title: "Offer number 1",
  description: "This offer is for a restaurant",
  category: 1,
  startDate: new Date(2020, 11, 24, 10, 33, 30, 0),
  endDate: new Date(2020, 12, 25, 10, 33, 30, 0),
  status: 2
 }
];

const worker = setupWorker(
  rest.get('/api/recipes', (req, res, ctx) => {
    return res(ctx.json({ offers: offers }));
  })
);

worker.start();