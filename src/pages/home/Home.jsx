import { useLoaderData } from "react-router-dom";
import BreakingNews from "../../shared/breakingNews/BreakingNews";
import Header from "../../shared/header/Header";
import LeftSideNav from "../../shared/leftSideNav/LeftSideNav";
import Navbar from "../../shared/navbar/Navbar";
import RightSideNav from "../../shared/rightSideNav/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();

    return (
        <div className=" mb-20">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-20">

            <div>
                <LeftSideNav></LeftSideNav>
            </div>

            <div className="col-span-2">
            <h1 className="text-xl font-semibold mb-5">Dragon News Home</h1>
            {
                news.map(aNews=> <NewsCard 
                    key={aNews._id}
                    aNews={aNews}
                    ></NewsCard>)
            }
            </div>

            <div>
                <RightSideNav></RightSideNav>
            </div>

        </div>

        </div>
    );
};

export default Home;