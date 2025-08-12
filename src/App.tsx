import { Provider } from 'react-redux';
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { AuthProvider } from './core/context/AuthContext';
import AuthRoute from './core/routes/AuthRoute';
import ProtectedRoute from './core/routes/ProtectedRoute';
import { store } from './core/store/store';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                <AuthRoute>
                                    <Login />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <AuthRoute>
                                    <Register />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/"
                            element={<Navigate to="/dashboard" />}
                        />
                    </Routes>
                </Router>
            </AuthProvider>
        </Provider>
    );
};

export default App;
