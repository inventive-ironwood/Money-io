var DuesForm = (props) => (
  <form className='form-inline'>
    <h3>Add Dues</h3>
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
      <input type="text" className="form-control" placeholder="Name"/>
    </div>
    <div id="descBox" className="form-group">
      <input type="text" className="form-control" placeholder="Description"/>
    </div>
    <div className="input-group">
      <div className="input-group-addon">$</div>
      <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
    </div>
    <br />
    <br />
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

DuesForm.prototypes = {
  list: React.PropTypes.object.isRequired
};

window.DuesForm = DuesForm;