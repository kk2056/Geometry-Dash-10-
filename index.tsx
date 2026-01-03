
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// Fix: Explicitly extend React.Component to ensure 'props' is correctly typed and available on the class instance
class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-6xl font-black text-red-600 mb-4 font-mono">CRITICAL ERROR</h1>
          <p className="text-xl text-gray-300 mb-8">The game engine encountered a fatal exception.</p>
          <div className="bg-black p-4 rounded border border-red-900 max-w-2xl overflow-auto text-left">
            <code className="text-red-400 text-sm whitespace-pre-wrap">
              {this.state.error?.toString()}
            </code>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-transform active:scale-95"
          >
            REBOOT SYSTEM
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
