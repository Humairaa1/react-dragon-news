import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex gap-3 bg-slate-200 p-3 rounded-md mt-8">
                <button className="btn btn-secondary">Latest</button>
                <Marquee pauseOnHover={true} speed={50}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain !  Match Highlights: Germany vs Spain — as it happened   ! 
                </Marquee>
            </div>
    );
};

export default BreakingNews;