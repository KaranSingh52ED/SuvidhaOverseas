
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => (
    <div className="w-screen h-screen z-50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col">

        <div className="bg-gray-100 opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
        <RotatingLines
            strokeColor="#85ba51"
            strokeWidth="5"
            animationDuration="0.5"
            width="96"
            visible={true}
        />
        <p className='flex p-5 items-center justify-center  text-gray-900 font-serif text-3xl font-bold'>Loading... </p>
    </div>
);

export default Loading;
