import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
    //const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({ mode, detail: detail === 'true' ? false: true});
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({ mode: nextMode, detail });
    }

    return (
        <div>
            <h1>소개</h1>
            <p>리엑트 라우터를 사용해 보는 페이지입니다.</p>
            {/* <p>쿼리스트링: {location.search}</p> */}
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;