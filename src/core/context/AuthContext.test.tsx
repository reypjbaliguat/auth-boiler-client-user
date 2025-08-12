import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider, useAuth } from './AuthContext';

const TestComponent = () => {
    const { isAuthenticated, login, logout } = useAuth();

    return (
        <div>
            <p>{isAuthenticated ? 'Logged In' : 'Logged Out'}</p>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

describe('AuthContext', () => {
    it('toggles authentication state', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>,
        );

        expect(screen.getByText('Logged Out')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Login'));
        await waitFor(() =>
            expect(screen.getByText('Logged In')).toBeInTheDocument(),
        );

        await userEvent.click(screen.getByText('Logout'));
        await waitFor(() =>
            expect(screen.getByText('Logged Out')).toBeInTheDocument(),
        );
    });
});
