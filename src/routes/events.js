import express from 'express';
import { createEvent } from '../controllers/Events/createEvent';
import { getEvents } from '../controllers/Events/getEvents';
const router = express.Router();

router.route('/events')
  .get(async (req, res) => {
    res.send(await getEvents(req.body));
  })
  .post(async (req, res) => {
    res.send(await createEvent(req.body));
  });
// .put(async (req, res) => {
//   res.send(await updateEvent(req.body));
// })
// .delete( async (req, res) => {
//   res.send(await deleteEvent(req.body));
// });

export default router;

