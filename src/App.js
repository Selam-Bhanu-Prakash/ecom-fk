import "./App.css";
import TopNav from "./components/topNav";
import Categories from "./components/categories";

function App() {
  return (
    <div>
      <div className="stickyNav">
        <div className="container">
          <TopNav />
        </div>
      </div>
      {/* <div className="stickyNav">
        <div className="container categories">
          <Categories />
        </div>
      </div> */}
      <div className="catg-container categories">
        <Categories />
      </div>
    </div>
  );
}

export default App;
