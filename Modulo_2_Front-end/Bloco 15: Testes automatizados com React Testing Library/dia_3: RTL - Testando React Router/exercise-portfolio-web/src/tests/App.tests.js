import React from 'react';
import renderWithRouter from './renderWithRouter';
import { fireEvent, cleanup } from '@testing-library/react';

import App from '../App';
import { About, Contact, Home, Projects } from '../pages';
