import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center flex-col h-full gap-1">
          <span className="text-4xl">Oops... Something went wrong :(</span>
          <span className="text-xl text-grey-darker">Try <span className="text-grey-darker cursor-pointer border-b-2 border-dashed" onClick={() => window.location.reload()}>reloading</span> the page</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
