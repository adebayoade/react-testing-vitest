import Greet from '../src/components/greet';
import { render, screen } from '@testing-library/react';

describe('Greet', () => {
  it('should render hello when name is provided', () => {
    render(<Greet name="Ade" />);
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });
});
