import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import { 
  MyFormButton, 
  MyFormInput, 
  MyFormContainer,
  MyFormHeader,
  MyFormText
} from './layout/Form';
import { AppContainer } from './layout/Page';

const App = () => {

  return (
    <AppContainer>
      <Form />
    </AppContainer>
  )
}
// export default App;
export default App;
