/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EtlNode {
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
    interface HTMLEtlNodeElement extends Components.EtlNode, HTMLStencilElement {
    }
    var HTMLEtlNodeElement: {
        prototype: HTMLEtlNodeElement;
        new (): HTMLEtlNodeElement;
    };
    interface HTMLElementTagNameMap {
        "etl-node": HTMLEtlNodeElement;
    }
}
declare namespace LocalJSX {
    interface EtlNode {
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
        "etl-node": EtlNode;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "etl-node": LocalJSX.EtlNode & JSXBase.HTMLAttributes<HTMLEtlNodeElement>;
        }
    }
}
