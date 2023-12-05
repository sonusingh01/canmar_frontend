import Banner from './Components/Banner';
import Course from './Components/Course';
import Courses from './Components/Courses';
import EduactionPortal from './Components/EductionPortalSection';
import Testimonial from './Components/Testimonial';

export default function Home() {
  return (
    <>
      <Banner />
      <EduactionPortal />
      <Course />
      <Courses />
      <Testimonial />
    </>
  );
}
