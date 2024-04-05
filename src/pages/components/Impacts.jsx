import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Impacts = () => {
    const [hasAnimated] = useState(false);
    const [countries, setCountries] = useState(0);
    const [volunteers, setVolunteers] = useState(0);
    const [goal, setGoal] = useState(0);
    const [raised, setRaised] = useState(0);

    const [countriesRef, CountriesInView] = useInView({ triggerOnce: true });
    const [volunteersRef, VolunteersInView] = useInView({ triggerOnce: true });
    const [goalRef, GoalInView] = useInView({ triggerOnce: true });
    const [raisedRef, RaisedInView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (CountriesInView) {
            setCountries(10);
        }
    }, [CountriesInView]);


    useEffect(() => {
        if (VolunteersInView) {
            setVolunteers(35);
        }
    }, [VolunteersInView]);

    useEffect(() => {
        if (GoalInView) {
            setGoal(10);
        }
    }, [GoalInView]);

    useEffect(() => {
        if (RaisedInView) {
            setRaised(1000);
        }
    }, [RaisedInView]);

    const CounterInline = ({ end }) => {
        return <CountUp start={0} end={end} duration={2.0} separator="," />;
    };

    return (
        <section className='flex justify-center p-2 mt-14 md:mb-14 md:mt-0 relative'>
            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-8 ">
                <div
                    ref={countriesRef}
                    className={`counter-item p-6 w-72 bg-white shadow-lg  border border-b-4 border-green items-center text-center rounded ${hasAnimated && CountriesInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-6xl text-green font-aclonica font-bold mt-8 md:mt-4 mb-6 " >
                        <CounterInline end={countries} /><span>+</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-quicksand font-medium" >Countries</span>
                </div>

                <div
                    ref={volunteersRef}
                    className={`counter-item p-6 w-72 bg-white shadow-lg  border border-b-4 border-green items-center text-center rounded ${hasAnimated && VolunteersInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-6xl text-green font-aclonica font-bold mt-8 md:mt-4 mb-6 " >
                        <CounterInline end={volunteers} /><span>+</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-quicksand font-medium" >Hard Working Employees</span>
                </div>

                <div
                    ref={goalRef}
                    className={`counter-item p-6 w-72  shadow-lg bg-white border border-b-4 border-green items-center text-center rounded ${hasAnimated && GoalInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-6xl text-green font-aclonica font-bold mt-8 md:mt-4 mb-6 " >
                        <CounterInline end={goal} /><span>M</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-quicksand font-medium" >Our Goal</span>
                </div>

                <div
                    ref={raisedRef}
                    className={`counter-item p-6 w-72  shadow-lg bg-white border border-b-4 border-green items-center text-center rounded ${hasAnimated && RaisedInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-6xl text-green font-aclonica font-bold mt-8 md:mt-4 mb-6 " >
                        <CounterInline end={raised} /><span>+</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-quicksand font-medium" >Raised</span>
                </div>
            </div>
        </section>


    );
};

Impacts.propTypes = {
    end: PropTypes.number.isRequired, // Change the prop type to number
};

export default Impacts;
