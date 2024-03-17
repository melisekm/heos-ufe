import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'xmelisek-ambulance-equip-list',
  styleUrl: 'xmelisek-ambulance-equip-list.css',
  shadow: true,
})
export class XmelisekAmbulanceEquipList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
