import Lottie from 'react-lottie';
import loader from '@lotties/loader.json';
import { Space } from 'antd';
import './loader.less';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export const Loader: React.FC = () => {
    return (
        <Space className='loader__container'>
            <Space className='loader__animation'>
                <Lottie options={defaultOptions} width={150} height={150} />
            </Space>
        </Space>
    );
};
