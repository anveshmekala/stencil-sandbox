/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AnveshmekalaRadioGroup {
    }
    interface AnveshmekalaRadioItem {
        /**
          * The checked value of the radio item.
         */
        "checked": boolean;
        /**
          * label of the radio item.
         */
        "label": string;
    }
    interface AnveshmekalaProgressBar {
        /**
          * type of progress bar. Default value is set to Inderterminate
         */
        "type": string;
    }
    interface AnveshmekalaSelectProgressbar {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLAnveshmekalaRadioGroupElement extends Components.AnveshmekalaRadioGroup, HTMLStencilElement {
    }
    var HTMLAnveshmekalaRadioGroupElement: {
        prototype: HTMLAnveshmekalaRadioGroupElement;
        new (): HTMLAnveshmekalaRadioGroupElement;
    };
    interface HTMLAnveshmekalaRadioItemElement extends Components.AnveshmekalaRadioItem, HTMLStencilElement {
    }
    var HTMLAnveshmekalaRadioItemElement: {
        prototype: HTMLAnveshmekalaRadioItemElement;
        new (): HTMLAnveshmekalaRadioItemElement;
    };
    interface HTMLAnveshmekalaProgressBarElement extends Components.AnveshmekalaProgressBar, HTMLStencilElement {
    }
    var HTMLAnveshmekalaProgressBarElement: {
        prototype: HTMLAnveshmekalaProgressBarElement;
        new (): HTMLAnveshmekalaProgressBarElement;
    };
    interface HTMLAnveshmekalaSelectProgressbarElement extends Components.AnveshmekalaSelectProgressbar, HTMLStencilElement {
    }
    var HTMLAnveshmekalaSelectProgressbarElement: {
        prototype: HTMLAnveshmekalaSelectProgressbarElement;
        new (): HTMLAnveshmekalaSelectProgressbarElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "anveshmekala-radio-group": HTMLAnveshmekalaRadioGroupElement;
        "anveshmekala-radio-item": HTMLAnveshmekalaRadioItemElement;
        "anveshmekala-progress-bar": HTMLAnveshmekalaProgressBarElement;
        "anveshmekala-select-progressbar": HTMLAnveshmekalaSelectProgressbarElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AnveshmekalaRadioGroup {
        /**
          * Fires in when there is a change in selection of radioitem. It is recommended to attach the listener directly to radio-group component.
         */
        "onOptionChanged"?: (event: CustomEvent<{ selectedRadioItem: string }>) => void;
    }
    interface AnveshmekalaRadioItem {
        /**
          * The checked value of the radio item.
         */
        "checked"?: boolean;
        /**
          * label of the radio item.
         */
        "label"?: string;
        /**
          * Event is emitted when the radio is checked. It is not recommended to listen to this event when radio-item is grouped with radio-group
         */
        "onOptionSelected"?: (event: CustomEvent<{ name: string }>) => void;
    }
    interface AnveshmekalaProgressBar {
        /**
          * type of progress bar. Default value is set to Inderterminate
         */
        "type"?: string;
    }
    interface AnveshmekalaSelectProgressbar {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "anveshmekala-radio-group": AnveshmekalaRadioGroup;
        "anveshmekala-radio-item": AnveshmekalaRadioItem;
        "anveshmekala-progress-bar": AnveshmekalaProgressBar;
        "anveshmekala-select-progressbar": AnveshmekalaSelectProgressbar;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anveshmekala-radio-group": LocalJSX.AnveshmekalaRadioGroup & JSXBase.HTMLAttributes<HTMLAnveshmekalaRadioGroupElement>;
            "anveshmekala-radio-item": LocalJSX.AnveshmekalaRadioItem & JSXBase.HTMLAttributes<HTMLAnveshmekalaRadioItemElement>;
            "anveshmekala-progress-bar": LocalJSX.AnveshmekalaProgressBar & JSXBase.HTMLAttributes<HTMLAnveshmekalaProgressBarElement>;
            "anveshmekala-select-progressbar": LocalJSX.AnveshmekalaSelectProgressbar & JSXBase.HTMLAttributes<HTMLAnveshmekalaSelectProgressbarElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
