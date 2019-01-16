import React, { Component } from 'react';
import styled from 'styled-components';
import parseStyles from '../../helpers/parseStyles';

const Container = styled.section.attrs({})`${props => parseStyles(props.settings.styles)}`

class Container2 extends Component {
  render () {
    return (
      <Container {...this.props}>
        C1
      </Container>
    )
  }
}

export default Container2;
