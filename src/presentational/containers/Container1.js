import React, { Component } from 'react';
import styled from 'styled-components';
import parseStyles from '../../helpers/parseStyles';

const Container = styled.section.attrs()`
  color: red;
  ${props => parseStyles(props.settings.styles)}
`

class Container1 extends Component {
  render () {
    return (
      <Container id="x" {...this.props}>
        C1
      </Container>
    )
  }
}

export default Container1;
