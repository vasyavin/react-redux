import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='http://userava.ru/diary/wp-content/uploads/2012/03/Smiley_Face_Black-400x300.jpg' />
        { props.message }
          <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;