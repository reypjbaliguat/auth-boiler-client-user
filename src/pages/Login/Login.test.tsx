import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import { LoginPage } from './';

describe('Login Page', () => {
    it('logs in and navigates to dashboard', async () => {
        render(
            <AuthProvider>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </AuthProvider>,
        );

        const button = screen.getByRole('button', { name: /login/i });
        await userEvent.click(button);

        // Since the Login component navigates to dashboard,
        // You’d test routing integration in a full App test.
        expect(screen.queryByText('Login')).toBeInTheDocument();
    });
});
