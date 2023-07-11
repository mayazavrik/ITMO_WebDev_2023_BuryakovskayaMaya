import WorkItemVO from "./WorkItemVO.js";

class InvoiceVO {
  // static fromJSON(json) {
  //   return new InvoiceVO(
  //     json.id,
  //     this.deserializeItem(json.items),
  //     json.discount,
  //     json.taxes,
  //     json.total,
  //     json.iban,
  //   );
  // }

  constructor(id, items, discount, taxes, total, iban) {
    this.id = id;
    this.items = items;
    this.discount = discount;
    this.taxes = taxes;
    this.total = total;
    this.iban = iban;
  }

  // static deserializeItem(jsonItems) {
  //   if (jsonItems) {
  //     return jsonItems.map(item => WorkItemVO.fromJSON(item))
  //   }
  //
  //   return null
  // }
}

export default InvoiceVO;
