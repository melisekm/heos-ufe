import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceOrderEditor } from '../xmelisek-ambulance-order-editor';

describe('xmelisek-ambulance-order-editor', () => {
  it('text-fields shall be of different type', async () => {
    const page = await newSpecPage({
      components: [XmelisekAmbulanceOrderEditor],
      html: `<xmelisek-ambulance-order-editor></xmelisek-ambulance-order-editor>`,
    });
   // md text fields type should be 1. text 2. number 3. date 4. textarea 5. number
   // name, id, date, description, price
    const textFields = page.root.shadowRoot.querySelectorAll('md-filled-text-field');
    const toFind = ['text', 'number', 'date', 'textarea', 'number']
    let found = [];
    expect(textFields.length).toEqual(toFind.length);
    textFields.forEach((textField) => {
      console.log(textField.getAttribute('type'));
      found.push(textField.getAttribute('type'));
    });
    expect(toFind).toEqual(found);
  });
});
