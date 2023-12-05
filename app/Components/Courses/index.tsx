import Course from '@/app/Components/Course';
import React from 'react';
import style from './Courses.module.scss';
const Courses = () => {
  return (
    <>
      <div className={style.main_wrapper}>
        <div className="container">
          <div className={style.flexContainer}>
            <div className={style.box}>
              <div className={style.img_section}>
                <img src="/cor1.png" />
              </div>
              <div className={style.content_sec}>
                <h5>$248 CAD</h5>
                <h4>Cannabis 201</h4>
                <p>
                  Cannabis 201 takes budtenders beyond the basics of cannabis,
                  covering the cannabis plant...
                </p>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.img_section}>
                <img src="/cor1.png" />
              </div>
              <div className={style.content_sec}>
                <h5>$248 CAD</h5>
                <h4>Cannabis 201</h4>
                <p>
                  Cannabis 201 takes budtenders beyond the basics of cannabis,
                  covering the cannabis plant...
                </p>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.img_section}>
                <img src="/cor1.png" />
              </div>
              <div className={style.content_sec}>
                <h5>$248 CAD</h5>
                <h4>Cannabis 201</h4>
                <p>
                  Cannabis 201 takes budtenders beyond the basics of cannabis,
                  covering the cannabis plant...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
