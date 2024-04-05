import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="relative w-full py-12 mt-10">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
            />

            <div className="mx-auto text-center  items-center justify-center">
                <h2 className="font-raleway font-bold text-green text-center items-center md:text-5xl text-4xl mt-16">Recent Events</h2>
                <nav>
                    <p className="font-quicksand mt-4 text-white md:text-xl font-medium cursor-pointer mb-16 text-lg">
                        <Link to="/" >Home</Link> // <span className="text-green">Events</span>
                    </p>
                </nav>
            </div>
        </div>
    );
};

export default Header;
