import "uno.css";
import "@unocss/reset/tailwind.css";
import InvoiceVO from "./src/mvc/model/VO/InvoiceVO.js";
import WorkItemVO from "./src/mvc/model/VO/WorkItemVO.js";
import DOM from "./src/constants/dom";
import { maskForNum } from "./src/utils/maskNumber";

const KEY_LOCAL_INVOICE = "invoice";

const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTemplateWorkItems = getDOM(DOM.Template.ITEMS);
const domTableWorkItems = domTemplateWorkItems.parentNode;
domTemplateWorkItems.removeAttribute("id");
domTemplateWorkItems.remove();

const rawInvoice = localStorage.getItem(KEY_LOCAL_INVOICE);

const domInvoiceId = getDOM(DOM.INVOICE_INPUT.NUMBER);

const invoiceIdMask = [/\D/, /\D/, /\D/, /\D/];
const invoicePercentMask = [/\D/, /\D/];

const invoice = JSON.parse(rawInvoice);

if (invoice) {
  domInvoiceId.value = invoice.id;
}

console.log("> invoice:", invoice, typeof invoice);

domInvoiceId.addEventListener("input", (e) => maskForNum(e, invoiceIdMask));
domInvoiceId.addEventListener("blur", (e) => {
  if (domInvoiceId.value) {
    const invoiceId = domInvoiceId.value;
    console.log("invoiceId = ", invoiceId);
    const invoiceVO = new InvoiceVO(invoiceId);
    saveInvoice(invoiceVO);
  } else {
    window.alert("Enter the invoice number");
  }
});

function saveInvoice(x) {
  localStorage.setItem(KEY_LOCAL_INVOICE, JSON.stringify(x));
  console.log("Invoice written to localStorage ", x);
}
