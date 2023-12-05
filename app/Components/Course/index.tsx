import React from 'react';
import style from './Course.module.scss';
const Course = () => {
  return (
    <div className={style.main_wrapper}>
      <div className="container">
        <h2>Latest Courses</h2>
        <p>
          Tool and strategies modern teams need to help their companies grow.
        </p>
        <div className={style.main_box}>
          <div className={style.flex_box}>
            <div className={style.contentBox}>
              <ul>
                <li>
                  <img src="/star.png" />
                </li>
                <li>Featured Course Bundle</li>
              </ul>
              <h5 >$688 CAD</h5>
              <h3>LEVEL UP BUDTENDER EDUCATION BUNDLE.</h3>
              <p>
                Level UP is an e-Learning program written especially for
                Canadian budtenders who want to learn more: more about cannabis,
                the plant itself, and how it works with our bodies, how it's
                grown, how cannabis products are made, and more about all the
                different ways of consuming cannabis. The Level UP program is
                divided into two courses: Cannabis 201 and LPs, Cannabis
                Products, & Cannabis Consumption. Either course ...
              </p>
            </div>
            <div className={style.image_sec}>
              <img src="/courseb.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
