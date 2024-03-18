import { Component, Host, h, EventEmitter, Event } from '@stencil/core';


@Component({
  tag: 'xmelisek-ambulance-menu',
  styleUrl: 'xmelisek-ambulance-menu.css',
  shadow: true,
})
// SOURCE: https://github.com/milung/ufe-controller/blob/master/web-ui/src/components/ufe-application-cards/ufe-application-cards.tsx
export class XmelisekAmbulanceMenu {
  @Event({ eventName: "card-clicked" }) cardClicked: EventEmitter<string>

  cards = [
    {
      title: "Objednávky",
      icon: "shopping_cart",
      details: "Vytvorené objednávky a ich správa",
      path: "./list/"
    },
    {
      title: "Stav vybavenia",
      icon: "build",
      details: "Zoznam vybavenia a jeho stav",
      path: "./equipment/"
    },
    {
      title: "Nová objednávka",
      icon: "add",
      details: "Vytvorenie novej objednávky",
      path: "./entry/@new/"
    },
    {
      title: "Nové vybavenie",
      icon: "add",
      details: "Pridanie nového vybavenia.",
      path: null
    }
  ]
  render() {
    return (
      <Host>
        {this.cards.map(card =>
          <div class="card"><div class="card-wrapper">
            <div class="title-section">
              {card.icon?.length
                ? <md-icon>{card.icon}</md-icon>
                : <noop></noop>
              }
              <div class="title">{card.title}</div>
            </div>
            <div class="text">{card.details}</div>
            <div class="fill-1"></div>
            <div class="actions">
              <md-filled-button 
                disabled={card.path === null}
              onClick={() => this.cardClicked.emit(card.path)}>
                {card.path === null ? "Out of scope" : "Otvoriť"}
                </md-filled-button>
            </div>
          </div>
          </div>
        )}
      </Host>
    );
  }

}
