import { render, screen } from '@testing-library/react';
import NotificationsButton from './NotificationsButton';

describe('NotificationsButton Component', () => {
  it('renders correctly as an button', () => {
    render(<NotificationsButton />);

    const expectedElement = screen.getByRole('button');

    expect(expectedElement).toBeInTheDocument();
  });
});
