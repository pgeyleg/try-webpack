console.log("Hello from index.js!");
import address from './address';
import billing from './billing';
import markdownPreviewer from "./markdownPreviewer";
import "../css/styles.css";
import "tachyons";

address.announce();
billing.announce();

window.onload = function() {
  document.getElementById("editor").addEventListener(
    "submit",
    markdownPreviewer.attachPreviewer(
      document,    // pass in document
      "source",    // id of source textarea
      "preview")); // id of preview DOM element
};
