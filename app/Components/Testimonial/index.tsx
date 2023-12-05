import React from 'react';
import style from './Testimonial.module.scss';
const Testimonial = () => {
  return (
    <>
      <div className={style.main_wrapper}>
        <div className="container">
          <h5>Featured reviews</h5>
          <h2>Real results from students like you</h2>
          <div className={style.main_box}>
            <div className={style.box}>
              <div className={style.icon_flexbox}>
                <div className={style.iconcontent}>
                  <img src="/test1.png" alt="" />
                </div>
                <div className={style.text_content}>Vanessa L., Farmhouse</div>
              </div>
              <img src="/Frame.png" alt="" />
              <p>
                Phenomenal training session. One of the best I've been involved
                with. Tabitha has an amazing way of explaining the process of
                cannabis. Awesome for someone with ADHD. Thank you for your
                enthusiasm and dry humour.
              </p>
            </div>
            <div className={style.box}>
              <div className={style.icon_flexbox}>
                <div className={style.iconcontent}>
                  <img src="/test1.png" alt="" />
                </div>
                <div className={style.text_content}>Vanessa L., Farmhouse</div>
              </div>
              <img src="/Frame.png" alt="" />
              <p>
                Phenomenal training session. One of the best I've been involved
                with. Tabitha has an amazing way of explaining the process of
                cannabis. Awesome for someone with ADHD. Thank you for your
                enthusiasm and dry humour.
              </p>
            </div>
            <div className={style.box}>
              <div className={style.icon_flexbox}>
                <div className={style.iconcontent}>
                  <img src="/test1.png" alt="" />
                </div>
                <div className={style.text_content}>Vanessa L., Farmhouse</div>
              </div>
              <img src="/Frame.png" alt="" />
              <p>
                Phenomenal training session. One of the best I've been involved
                with. Tabitha has an amazing way of explaining the process of
                cannabis. Awesome for someone with ADHD. Thank you for your
                enthusiasm and dry humour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
