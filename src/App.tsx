import { Provider } from 'react-redux';
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthRoute from './routes/AuthRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import { store } from './store/store';

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
