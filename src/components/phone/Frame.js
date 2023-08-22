import "./Frame.css";
const Frame = ({ onClose }) => {
  return (
    <div className="frame-root">
      <div className="frame-parent63">
        <div className="menu-parent">
          <div className="menu">Menu</div>
          <img className="cut-icon" alt="" src="/cut.svg" />
        </div>
        <div className="frame-wrapper10">
          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/dashboard.svg" />
            <div className="menu">Dashboard</div>
          </div>
        </div>
        <div className="frame-parent64">
          <div className="note-alt-parent">
            <img className="note-alt-icon" alt="" src="/note-alt.svg" />
            <div className="assessment2">Assessment</div>
          </div>
          <div className="rectangle-div" />
        </div>
        <div className="frame-wrapper10">
          <div className="dashboard-parent">
            <img className="note-alt-icon" alt="" src="/quiz.svg" />
            <div className="menu">My Library</div>
          </div>
        </div>
      </div>
      <img className="frame-child20" alt="" src="/vector-267.svg" />
      <div className="frame-wrapper12">
        <div className="frame-parent65">
          <div className="dashboard-parent">
            <img className="note-alt-icon" alt="" src="/admin-meds.svg" />
            <div className="menu">Round Status</div>
          </div>
          <div className="admin-wrapper">
            <div className="admin">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
