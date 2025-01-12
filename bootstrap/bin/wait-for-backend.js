#!/usr/bin/env node

import { checkBackend } from '../wait-for-backend.js';

const backendUrl = (process.env.MEDUSA_BACKEND_URL || 'http://localhost:9000') + '/key-exchange';
checkBackend(backendUrl)
  .then(() => console.log('Backend is ready'))
  .catch((error) => {
    console.error('Error waiting for backend:', error);
    process.exit(1);
  });