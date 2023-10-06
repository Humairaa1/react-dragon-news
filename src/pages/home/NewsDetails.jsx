import { useParams } from "react-router-dom";
import Header from "../../shared/header/Header";
import Navbar from "../../shared/navbar/Navbar";
import RightSideNav from "../../shared/rightSideNav/RightSideNav";

const NewsDetails = () => {

    const {id} = useParams();
    console.log(id)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="col-span-3">
                <h1 className="text-4xl">News details</h1>
                <p>{id} </p>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;