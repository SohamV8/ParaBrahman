import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null, componentStack: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ componentStack: errorInfo.componentStack });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.toString()}</p>
          <pre>{this.state.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;