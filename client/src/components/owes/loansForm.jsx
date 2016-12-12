var LoansForm = (props) => (
  <form className='form-inline' onSubmit={props.submitOwesLoans}>
    <h3>Add Loans</h3>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Name"/>
    </div>
    <div id="descBox" className="form-group">
      <input type="text" className="form-control" placeholder="Description"/>
    </div>
    <div className="input-group">
      <div className="input-group-addon">$</div>
      <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

LoansForm.prototypes = {
  list: React.PropTypes.object.isRequired
};

window.LoansForm = LoansForm;