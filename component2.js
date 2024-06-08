  // Create a class for the element
class MyCustomTextarea extends HTMLTextAreaElement {
  
    constructor() {
      // Always call super first in constructor
      super();
    }
  
    connectedCallback() {
      console.log("Custom textarea added to page.");
    }
  
    disconnectedCallback() {
      console.log("Custom textarea removed from page.");
    }
  
    adoptedCallback() {
      console.log("Custom textarea moved to new page.");
    }

    static observedAttributes = ["color", "text","value","innerText","style"];
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed.`);
      console.log("old: "+oldValue);
      console.log("new: "+newValue);


    }
  }
  
  customElements.define("custom-textarea",MyCustomTextarea,{extends:"textarea"});