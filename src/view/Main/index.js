import { Link } from 'react-router-dom'
import BigButton from '../../components/Bigbutton'

export default function MainView() {
  return <div>
    <div className='container'>
      <div className='left'>
        <Link to='../Review/Create'>
          <BigButton name='리뷰 작성하기' />
        </Link>
      </div>
      <div className='mid'>
        <Link to='../Near'>
          <BigButton name='주변 맛집 찾기' />
        </Link>
      </div>
      <div className='right'>
        <Link to='../Search'>
          <BigButton name='식당 검색' />
        </Link>
      </div>
    </div>
  </div>
}