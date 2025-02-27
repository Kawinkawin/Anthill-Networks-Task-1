import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, UserCheck, Building2 } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'customer' | 'admin'>('customer');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Mock login logic (replace with your actual authentication)
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      // Simulating an API call to verify login credentials and user role
      const userData = { id: '123', email, role: 'customer' }; // Mock user data
      const roleFromBackend = 'customer'; // Mock role from backend

      if (userData.role !== role) {
        throw new Error(`You don't have ${role} privileges. Please select the correct role.`);
      }

      // Set user (you can replace this with your state management solution)
      const currentUser = {
        id: userData.id,
        email: userData.email,
        role: roleFromBackend,
      };

      // Redirect based on role
      navigate(role === 'admin' ? '/admin' : '/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Select Role
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('customer')}
                  className={`flex items-center justify-center space-x-2 p-3 rounded-lg border ${
                    role === 'customer'
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <UserCheck className="h-5 w-5" />
                  <span>Customer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  className={`flex items-center justify-center space-x-2 p-3 rounded-lg border ${
                    role === 'admin'
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Building2 className="h-5 w-5" />
                  <span>Admin</span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register/admin" className="font-medium text-blue-600 hover:text-blue-500">
              Register as Admin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
