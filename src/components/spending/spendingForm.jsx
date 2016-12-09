var SpendingForm = (props) => (
  <form className='form-inline' onSubmit={props.submit}>
    <h3>Add Transaction</h3>
    <div className='form-group'>
      <select className="custom-select">
        <option selected>Category</option>
        <option value="Restaraunt">Restaraunt</option>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Transportation">Transportation</option>
      </select>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Spending"/>
    </div>
    <div className="input-group">
      <div className="input-group-addon">$</div>
      <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

SpendingForm.prototypes = {
  list: React.PropTypes.object.isRequired
};

window.SpendingForm = SpendingForm;