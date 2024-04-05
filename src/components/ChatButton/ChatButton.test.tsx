import { buildUrl } from '@/lib/utils/build-url';
import { urls } from '@/urls';
import { render, screen } from '@testing-library/react';
import ChatButton from './ChatButton';

describe('ChatButton Component', () => {
  it('renders correctly as an anchor element', () => {
    render(<ChatButton />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });

  it('displays the correct link when memberId is provided', () => {
    const memberId = 123;
    const hrefExpected = buildUrl(urls.chats.private, { path: { memberId: memberId } });

    render(<ChatButton memberId={memberId} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', expect.stringContaining(hrefExpected));
  });

  it('displays the signin link when no memberId is provided', () => {
    const hrefExpected = urls.auth.signin;

    render(<ChatButton />);

    expect(screen.getByRole('link')).toHaveAttribute('href', hrefExpected);
  });

  it('displays default children text when no children is provided', () => {
    render(<ChatButton />);
    expect(screen.getByText('Chat')).toBeInTheDocument();
  });

  it('displays custom children text when provided', () => {
    const customText = 'Custom Chat';

    render(<ChatButton>{customText}</ChatButton>);

    expect(screen.getByText(customText)).toBeInTheDocument();
  });
});
