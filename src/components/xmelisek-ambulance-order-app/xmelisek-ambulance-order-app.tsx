import { Component, Host, Prop, State, h } from '@stencil/core';

declare global {
  interface Window { navigation: any; }
}

@Component({
  tag: 'xmelisek-ambulance-order-app',
  styleUrl: 'xmelisek-ambulance-order-app.css',
  shadow: true,
})
export class XmelisekAmbulanceOrderApp {
  @State() private relativePath = "";

  @Prop() basePath: string = "";

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || "/").pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) {
        this.relativePath = path.slice(baseUri.length)
      } else {
        this.relativePath = ""
      }
    }

    window.navigation?.addEventListener("navigate", (ev: Event) => {
      if ((ev as any).canIntercept) { (ev as any).intercept(); }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname)
  }

  render() {
    let element = "list"
    let entryId = "@new"
    console.log(element)

    if (this.relativePath.startsWith("entry/")) {
      element = "editor";
      entryId = this.relativePath.split("/")[1]
    }
    if (this.relativePath.startsWith("equipment")) {
      element = "equipment";
    }

    const navigate = (path: string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute)
    }

    const elementSelector = (element: string) => {
      switch (element) {
        case "editor": return <xmelisek-ambulance-order-editor entry-id={entryId}
          oneditor-closed={() => navigate("./list")} >
        </xmelisek-ambulance-order-editor>
        case "list": return <xmelisek-ambulance-order-list
          onentry-clicked={(ev: CustomEvent<string>) => navigate("./entry/" + ev.detail)} >
        </xmelisek-ambulance-order-list>
        case "equipment": return <xmelisek-ambulance-equip-list></xmelisek-ambulance-equip-list>
        default: return <div><h1>{"404"}</h1></div>
      }
    }

    return (
      <Host>
        <h1>{"Evidencia a objednávanie vybavenia "}</h1>
        {elementSelector(element)}

      </Host>
    );
  }
  


}
