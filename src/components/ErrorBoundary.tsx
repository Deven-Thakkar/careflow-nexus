type Props = { children: React.ReactNode }
type State = { hasError: boolean }
class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(error: any, info: any) { console.error(error, info) }
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-6 m-6 rounded-lg bg-red-50 text-red-800">
          <h2 className="text-lg font-semibold">Something went wrong</h2>
          <p className="text-sm mt-2">Try refreshing or contact support.</p>
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
