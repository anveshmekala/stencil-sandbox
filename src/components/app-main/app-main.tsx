import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "app-main",
  styleUrl: "app-main.css",
  shadow: true,
})
export class AppMain {
  render() {
    return (
      <Host>
        <stencil-router id="router">
          <stencil-route
            url="/"
            component="app-main"
            router="#router"
            exact={true}
          > Main</stencil-route>
          <stencil-route
            url="/progressbar"
            component="anveshmekala-select-progressbar"
            router="#router"
          > ProgressBar</stencil-route>
        </stencil-router>
      </Host>
    );
  }
}
