import React from 'react';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import Table from './components/Table';
import Dropdown from './components/Dropdown';
import RadioButton from './components/Radio';
import Img from './components/Image';
import HeroImage from './components/Hero Image';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>This is a custom React component!</p>

      <Button label="Click Me!" />
      <Label text="This is a label" />
      <Text content="Here is some text" />c

      {/* Simple table example */}
      <Table>
        <thead>
          <tr><th>Header</th></tr>
        </thead>
        <tbody>
          <tr><td>Data cell</td></tr>
        </tbody>
      </Table>

      {/* Dropdown with options */}
      <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />

      {/* Radio buttons */}
      <RadioButton
        name="group1"
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' }
        ]}
      />

      {/* Image component */}
      <Img src="https://via.placeholder.com/150" alt="Placeholder" />

      {/* Hero image component */}
      <HeroImage
    src="https://via.placeholder.com/600x200"
    alt="Hero Image"
    height="200px"
    disabled={false}  // Now valid
/>



      {/* Card component */}
      <Card title="Card Title" content="Content of the card" />
    </div>
  );
}

export default App;
