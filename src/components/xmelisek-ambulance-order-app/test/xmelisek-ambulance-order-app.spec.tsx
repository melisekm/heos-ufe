import { newSpecPage } from '@stencil/core/testing';
import { XmelisekAmbulanceOrderApp } from '../xmelisek-ambulance-order-app';

describe('xmelisek-ambulance-order-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XmelisekAmbulanceOrderApp],
      html: `<xmelisek-ambulance-order-app base-path="/"></xmelisek-ambulance-order-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.querySelector("xmelisek-ambulance-order-editor");
    expect(child.tagName.toLocaleLowerCase()).toEqual("xmelisek-ambulance-order-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/list`,
      components: [XmelisekAmbulanceOrderApp],
      html: `<xmelisek-ambulance-order-app base-path="/"></xmelisek-ambulance-order-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.querySelector("xmelisek-ambulance-order-list");
    expect(child.tagName.toLocaleLowerCase()).toEqual("xmelisek-ambulance-order-list");
  });

  it('renders equip', async () => {
    const page = await newSpecPage({
      url: `http://localhost/equipment`,
      components: [XmelisekAmbulanceOrderApp],
      html: `<xmelisek-ambulance-order-app base-path="/"></xmelisek-ambulance-order-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.querySelector("xmelisek-ambulance-equip-list");
    expect(child.tagName.toLocaleLowerCase()).toEqual("xmelisek-ambulance-equip-list");
  });


});
