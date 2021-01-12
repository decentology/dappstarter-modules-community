///(page-post-content
import "../components/page-panel.js";
import "../../../components/action-card.js";
import "../components/page-body.js";
import "../../../components/switch-widget.js";
import DappLib from "@decentology/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("example-1-page")
export default class Example1Page extends LitElement {
  @property()
  title;
  @property()
  category;
  @property()
  description;

  createRenderRoot() {
    return this;
  }

  constructor(args) {
    super(args);

  }

  render() {
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLES: EXAMPLE 1  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
    return html`
      <page-body
        title="${this.title}"
        category="${this.category}"
        description="${this.description}"
      >
        <action-card
          title="Is Example 1 Enabled"
          description="Check if example 1 is enabled"
          action="isExample1Enabled"
          method="get"
        >
        </action-card>

        <action-card
          title="Enable Example 1"
          description="Set example 1 state to enabled"
          action="enableExample1"
          method="post"
          fields="mode"
        >
          <switch-widget field="mode" label="Set Example 1 State" placeholder="">
          </switch-widget>
        </action-card>
      </page-body>
      <page-panel id="resultPanel"></page-panel>
    `;
  }
}
///)