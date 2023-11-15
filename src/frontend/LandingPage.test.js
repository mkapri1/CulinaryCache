// LandingPage.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter provides a way to test routing components
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  test('Clicking Seller Registration button navigates to /seller', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const sellerButton = screen.getByText(/Seller Registration/i);
    fireEvent.click(sellerButton);

    // Assuming useNavigate changes the URL to /seller
    expect(window.location.pathname).toBe('/seller');
  });

  test('Clicking User Login button navigates to /user', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const userButton = screen.getByText(/User Login/i);
    fireEvent.click(userButton);

    // Assuming useNavigate changes the URL to /user
    expect(window.location.pathname).toBe('/user');
  });

  test('Clicking Seller Login button navigates to /sell', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const sellerLoginButton = screen.getByText(/Seller Login/i);
    fireEvent.click(sellerLoginButton);

    // Assuming useNavigate changes the URL to /sell
    expect(window.location.pathname).toBe('/sell');
  });

  test('Clicking Homepage button navigates to /homepage', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const homepageButton = screen.getByText(/Homepage/i);
    fireEvent.click(homepageButton);

    // Assuming useNavigate changes the URL to /homepage
    expect(window.location.pathname).toBe('/homepage');
  });
});
