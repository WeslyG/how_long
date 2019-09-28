import express from 'express';
import { createEvent } from '../controllers/Events/createEvent';
import { getEvents } from '../controllers/Events/getEvents';
import { updateEvent } from '../controllers/Events/updateEvent';
import { deleteEvent } from '../controllers/Events/deleteEvent';
const router = express.Router();

router.route('/events')
  .get(getEvents)
  .post(createEvent)
  .put(updateEvent)
  .delete(deleteEvent);

router.route('/events/:id')
  .get(async (req, res) => {
    res.send(await getEvents(req.params.id));
  })
  .put(async (req, res) => {
    res.send(await updateEvent(req.params.id, req.body));
  })
  .delete(async (req, res) => {
    res.send(await deleteEvent(req.params.id, req.body));
  });

export default router;
