import React, { Component } from 'react';
import Container1 from './presentational/containers/Container1';
import Container2 from './presentational/containers/Container2';

class App extends Component {
  constructor (props) {
    super (props);
    this.modules = this.props.airlineData.modules;
    this.containers = {
      Container1,
      Container2
    };
  }

  render () {
    return (
      <>
        {
          this.modules.map(module => {
            const containerName = module.config.container;
            const ContainerInstance = this.containers[containerName];
            return (
              <ContainerInstance 
                key={module.id}
                {...module.config}
              />
            )
          })
        }
      </>
    )
  }
}

export default App;
