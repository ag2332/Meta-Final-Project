import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm.js';
import Header from './components/Header.js';

test('renders learn react link', () => {
  render(<BrowserRouter> <App /> </BrowserRouter>);
  const linkElement = screen.getByText("Reserve Table");
  expect(linkElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();

});

test('Initialize/Update Times', () => {
  render(<BrowserRouter> <App /> </BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
  userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  expect(screen.getByRole('option', { name: testTime }).selected).toBe(true);

});
