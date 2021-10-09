import { Link } from 'react-router-dom'
import Button from '../../components/Bigbutton'

export default function MainView() {
    return <div>
        <div className='container'>
            <div className='left'>
                <Link to='../Review/Create'>
                    <button>리뷰 작성하기</button>
                </Link>
            </div>
            <div className='mid'>
                <Link to='../Near'>
                    <button>주변 맛집 찾기</button>
                </Link>
            </div>
            <div className='right'>
                <Link to='../Search'>
                    <button>식당 검색</button>
                </Link>
            </div>
        </div>
    </div>
}