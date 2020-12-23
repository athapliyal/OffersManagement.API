import React from 'react';
import { render, screen } from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Offers } from '../../components/Offers/index';

describe('Offers page', () => {
    test('renders preloader when the offers are being retrieved', () => {
        const { container } = render(<Offers />);

        expect(container.firstChild).toHaveClass('preloader__wrapper');
    });

    test('Shows the list of offers when offers are retrived', async () => {
        
    })
});