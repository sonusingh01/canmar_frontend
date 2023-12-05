import style from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={style.main_wrapper}>
      <div className="container">
        <div className={style.text_section}>
          <h5>Education</h5>
          <h2>
            At CanMar, we believe knowledge <br />
            is the key to success in the rapidly <br />
            evolving cannabis industry.
          </h2>
          <h4>
            That's why we’re proud to present Level UP, our comprehensive
            <br />
            budtender education program.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
