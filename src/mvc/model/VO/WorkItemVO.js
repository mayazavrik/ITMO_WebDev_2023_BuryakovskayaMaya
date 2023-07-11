class WorkItemVO {
    // static fromJSON(json) {
    //   return new WorkItemVO(
    //     json.id,
    //     json.title,
    //     json.description,
    //     json.qty,
    //     json.cost,
    //   );
    // }
  
    constructor(id, title, description, qty, cost) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.qty = qty;
      this.cost = cost;
    }
  }
  
  export default WorkItemVO;
  