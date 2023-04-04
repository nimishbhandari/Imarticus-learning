import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);

  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        IMARTICUS <br /> <span className="sidebar_logo_txt">LEARNING </span>
      </div>

      <div
        className={`sidebar_item ${active === 1 && `sidebar_active`}`}
        onClick={() => {
          navigate("/");
          setActive(1);
        }}
      >
        My Course
      </div>
      <div
        className={`sidebar_item ${active === 2 && `sidebar_active`}`}
        onClick={() => {
          navigate("/groups");
          setActive(2);
        }}
      >
        My Groups
      </div>
      <div
        className={`sidebar_item ${active === 3 && `sidebar_active`}`}
        onClick={() => {
          navigate("/explore");
          setActive(3);
        }}
      >
        Explore
      </div>
    </div>
  );
};

export default Sidebar;
