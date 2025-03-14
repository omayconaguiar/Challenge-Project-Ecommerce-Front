import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../App';
import { MemoryRouter } from 'react-router-dom';

describe('App tests', () => {
  it('renders Home link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
