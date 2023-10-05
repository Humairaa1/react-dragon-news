import Header from "../../shared/header/Header";
import LeftSideNav from "../../shared/leftSideNav/LeftSideNav";
import Navbar from "../../shared/navbar/Navbar";
import RightSideNav from "../../shared/rightSideNav/RightSideNav";

const Home = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="col-span-2">
                data is coming soon......!
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>

        </div>
    );
};

export default Home;