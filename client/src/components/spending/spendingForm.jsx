var SpendingForm = (props) => (
  <form className='form-inline' onSubmit={props.submit}>
    <h3>Add Transaction</h3>
    <div className='form-group'>
      <select className="custom-select">
        <option selected value="Restaurant">Restaurant</option>
        <option value="Groceries">Groceries</option>
        <option value="Transportation">Transportation</option>
        <option value="Shopping">Shopping</option>
        <option value="Utilities">Utilities</option>
        <option value="Nightlife">Nightlife</option>
        <option value="Cash">Cash</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Spending"/>
    </div>
    <div className="input-group">
      <div className="input-group-addon">$</div>
      <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
  </form>
);

SpendingForm.prototypes = {
  list: React.PropTypes.object.isRequired
};

window.SpendingForm = SpendingForm;