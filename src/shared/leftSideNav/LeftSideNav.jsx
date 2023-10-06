
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="text-xl font-semibold mb-8">All Category</h1>
            <div className="space-y-4">
                {
                    categories.map(category =>
                        <li key={category.id}
                            className="list-none text-xl text-slate-400 font-medium pl-8 hover:bg-slate-100 hover:text-black p-3 rounded-md">
                            <Link>{category.name}</Link>
                        </li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;