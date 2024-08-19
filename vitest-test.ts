import { server } from './mocks/node';
import { after, afterEach, before } from 'node:test';

before(() => server.listen());
afterEach(() => server.resetHandlers());
after(() => server.close());
