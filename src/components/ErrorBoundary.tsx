import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-red-900/20 border-2 border-red-500 rounded-lg p-8 text-center">
                        <div className="text-6xl mb-4">⚠️</div>
                        <h1 className="text-3xl font-bold text-red-400 mb-4">
                            Oops! Something went wrong
                        </h1>
                        <p className="text-gray-300 mb-6">
                            Detective Finch encountered an unexpected error while investigating.
                            Don't worry, your progress is saved!
                        </p>
                        <div className="bg-gray-900/50 rounded p-4 mb-6 text-left">
                            <p className="text-sm text-red-300 font-mono break-all">
                                {this.state.error?.message || 'Unknown error'}
                            </p>
                        </div>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Return to Home
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
