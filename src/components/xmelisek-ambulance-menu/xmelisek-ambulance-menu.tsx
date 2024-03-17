import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'xmelisek-ambulance-menu',
  styleUrl: 'xmelisek-ambulance-menu.css',
  shadow: true,
})
export class XmelisekAmbulanceMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
