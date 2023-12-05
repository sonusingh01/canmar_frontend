import Image from 'next/image';
import style from './EducationPortal.module.scss';

const EduactionPortal = () => {
  return (
    <div className={style.main_wrapper}>
      <div className="container">
        <div className={style.box}>
          <div className={style.flexbox}>
            <div className={style.content_box}>
              <div className={style.contentflex}>
                <div className={style.logo}>
                  <img src="/icons.png" alt="ggf" />
                </div>
                <div className={style.para}>
                  <h5>Education portal</h5>
                  <p>
                    Whether you’re a seasoned budtender looking to expand your
                    skill set or an aspiring professional eager to enter the
                    cannabis industry, Level UP is designed to elevate your
                    skills and empower you with the latest industry insights.
                  </p>
                  <button>Apply for education grant</button>
                </div>
              </div>
              <div className={style.contentflex}>
                <div className={style.logo}>
                  <img src="/icons.png" alt="ggf" />
                </div>
                <div className={style.para}>
                  <h5>Education portal</h5>
                  <p>
                    Whether you’re a seasoned budtender looking to expand your
                    skill set or an aspiring professional eager to enter the
                    cannabis industry, Level UP is designed to elevate your
                    skills and empower you with the latest industry insights.
                  </p>
                  <button>Apply for education grant</button>
                </div>
              </div>
            </div>
            <div className={style.image_box}>
              <img src="/content.png" alt="hello" height={500} width={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduactionPortal;
