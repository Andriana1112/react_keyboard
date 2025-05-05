import React from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  // Initialize state as a class property instead of in constructor
  state: AppState = {
    pressedKey: null,
  };

  // Use arrow function to automatically bind 'this'
  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    // Add the keyup event listener when component mounts
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    // Remove the event listener when component unmounts to prevent memory leaks
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}

export default App;
