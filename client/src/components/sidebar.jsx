var Sidebar = (props) => (
  <ul className="sidebar-nav">
    <li className="sidebar-brand">
      <a href="#">Money.io</a>
    </li>
    <li>
    <img className='profilepic' src='https://dyn0.media.forbiddenplanet.com/products/102701.jpg.square-true_maxheight-285_size-285.jpg'></img>
    </li>
    <li>
     <p className='username'>DJ Chrismaid</p>
    </li>
    <li>
      <a onClick={props.click}href="#">Transactions</a>
    </li>
    <li>
      <a onClick={props.click}href="#">Owes/Debts</a>
    </li>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <li>
      <a href='#'>Sign Out</a>
    </li>
  </ul>
);

window.Sidebar = Sidebar;