import Lottie from 'react-lottie';
import loader from '@lotties/loader.json';
import { Space } from 'antd';
import './loader.less';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export const Loader: React.FC = () => {
    const { loading } = useAppSelector((state) => state.loader);

    if (!loading) return <></>;

    return (
        <Space className='loader__container' data-test-id='loader'>
            <Space className='loader__animation'>
                <Lottie options={defaultOptions} width={150} height={150} />
            </Space>
        </Space>
    );
};
