import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <div className="NavBar">
      <div className="NavBar-content">
        {props.children}
        </div>
    </div>
  );
};

export default NavBar;
