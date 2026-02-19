import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout maxWidth="4xl">
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-300 mb-2">Page not found</h1>
        <p className="text-gray-500 mb-6">That case file doesn’t exist. Head back to base.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}
