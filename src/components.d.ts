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
    interface ProgressBar {
        "type": string;
    }
    interface RadioItem {
        "checked": boolean;
        "label": string;
    }
    interface SelectProgressbar {
    }
}
declare global {
    interface HTMLAnveshmekalaRadioGroupElement extends Components.AnveshmekalaRadioGroup, HTMLStencilElement {
    }
    var HTMLAnveshmekalaRadioGroupElement: {
        prototype: HTMLAnveshmekalaRadioGroupElement;
        new (): HTMLAnveshmekalaRadioGroupElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLProgressBarElement extends Components.ProgressBar, HTMLStencilElement {
    }
    var HTMLProgressBarElement: {
        prototype: HTMLProgressBarElement;
        new (): HTMLProgressBarElement;
    };
    interface HTMLRadioItemElement extends Components.RadioItem, HTMLStencilElement {
    }
    var HTMLRadioItemElement: {
        prototype: HTMLRadioItemElement;
        new (): HTMLRadioItemElement;
    };
    interface HTMLSelectProgressbarElement extends Components.SelectProgressbar, HTMLStencilElement {
    }
    var HTMLSelectProgressbarElement: {
        prototype: HTMLSelectProgressbarElement;
        new (): HTMLSelectProgressbarElement;
    };
    interface HTMLElementTagNameMap {
        "anveshmekala-radio-group": HTMLAnveshmekalaRadioGroupElement;
        "my-component": HTMLMyComponentElement;
        "progress-bar": HTMLProgressBarElement;
        "radio-item": HTMLRadioItemElement;
        "select-progressbar": HTMLSelectProgressbarElement;
    }
}
declare namespace LocalJSX {
    interface AnveshmekalaRadioGroup {
        "onOptionChanged"?: (event: CustomEvent<{ selectedRadioItem: string }>) => void;
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
    interface ProgressBar {
        "type"?: string;
    }
    interface RadioItem {
        "checked"?: boolean;
        "label"?: string;
        "onOptionSelected"?: (event: CustomEvent<{ name: string }>) => void;
    }
    interface SelectProgressbar {
    }
    interface IntrinsicElements {
        "anveshmekala-radio-group": AnveshmekalaRadioGroup;
        "my-component": MyComponent;
        "progress-bar": ProgressBar;
        "radio-item": RadioItem;
        "select-progressbar": SelectProgressbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anveshmekala-radio-group": LocalJSX.AnveshmekalaRadioGroup & JSXBase.HTMLAttributes<HTMLAnveshmekalaRadioGroupElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "progress-bar": LocalJSX.ProgressBar & JSXBase.HTMLAttributes<HTMLProgressBarElement>;
            "radio-item": LocalJSX.RadioItem & JSXBase.HTMLAttributes<HTMLRadioItemElement>;
            "select-progressbar": LocalJSX.SelectProgressbar & JSXBase.HTMLAttributes<HTMLSelectProgressbarElement>;
        }
    }
}
