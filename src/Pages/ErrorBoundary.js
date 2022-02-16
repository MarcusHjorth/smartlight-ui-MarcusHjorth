import React from 'react'
import Error from '../Components/Error'

class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError(error) {
        return { hasError: true };    
    }
    render() {
        if( this.state.hasError == true){
            return <Error />

        }
        return this.props.children;
    }  
}

export default ErrorBoundary;