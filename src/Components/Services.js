import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div>
      <main id='main'>
        {/* ======= Breadcrumbs ======= */}
        <div
          className='breadcrumbs d-flex align-items-center'
          style={{ backgroundImage: 'url("assets/img/breadcrumbs-bg.jpg")' }}
        >
          <div
            className='container position-relative d-flex flex-column align-items-center'
            data-aos='fade'
          >
            <h2>Services</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Services</li>
            </ol>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= Services Section ======= */}
        <section id='services' className='services section-bg'>
          <div className='container' data-aos='fade-up'>
            <div className='row gy-4'>
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='service-item  position-relative'>
                  <div className='icon'>
                    <i className='fa-solid fa-mountain-city' />
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <Link
                    to='/service-details'
                    className='readmore stretched-link'
                  >
                    Learn more <i className='bi bi-arrow-right' />
                  </Link>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={200}
              >
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <i className='fa-solid fa-arrow-up-from-ground-water' />
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <Link
                    to='/service-details'
                    className='readmore stretched-link'
                  >
                    Learn more <i className='bi bi-arrow-right' />
                  </Link>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={300}
              >
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <i className='fa-solid fa-compass-drafting' />
                  </div>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <Link
                    to='/service-details'
                    className='readmore stretched-link'
                  >
                    Learn more <i className='bi bi-arrow-right' />
                  </Link>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={400}
              >
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <i className='fa-solid fa-trowel-bricks' />
                  </div>
                  <h3>Asperiores Commodit</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <Link
                    to='/service-details'
                    className='readmore stretched-link'
                  >
                    Learn more <i className='bi bi-arrow-right' />
                  </Link>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={500}
              >
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <i className='fa-solid fa-helmet-safety' />
                  </div>
                  <h3>Velit Doloremque</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <Link
                    to='/service-details'
                    className='readmore stretched-link'
                  >
                    Learn more <i className='bi bi-arrow-right' />
                  </Link>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={600}
              >
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <i className='fa-solid fa-arrow-up-from-ground-water' />
                  </div>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <Link
                    to='/service-details'
                    className='readmore stretched-link'
                  >
                    Learn more <i className='bi bi-arrow-right' />
                  </Link>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Servie Cards Section ======= */}
        <section id='services-cards' className='services-cards'>
          <div className='container' data-aos='fade-up'>
            <div className='row gy-4'>
              <div
                className='col-lg-3 col-md-6'
                data-aos='zoom-in'
                data-aos-delay={100}
              >
                <h3>Quasi eaque omnis</h3>
                <p>
                  Eius non minus autem soluta ut ui labore omnis quisquam
                  corrupti autem odit voluptas quos commodi magnam occaecati.
                </p>
                <ul className='list-unstyled'>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Ullamco laboris nisi ut aliquip</span>
                  </li>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Duis aute irure dolor in reprehenderit</span>
                  </li>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Ullamco laboris nisi ut aliquip ex ea</span>
                  </li>
                </ul>
              </div>
              {/* End feature item*/}
              <div
                className='col-lg-3 col-md-6'
                data-aos='zoom-in'
                data-aos-delay={200}
              >
                <h3>Et nemo dolores consectetur</h3>
                <p>
                  Ducimus ea quam et occaecati est. Temporibus in soluta labore
                  voluptates aut. Et sit soluta non repellat sed quia dire
                  plovers tradoria
                </p>
                <ul className='list-unstyled'>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Enim temporibus maiores eligendi</span>
                  </li>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Ut maxime ut quibusdam quam qui</span>
                  </li>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Officiis aspernatur in officiis</span>
                  </li>
                </ul>
              </div>
              {/* End feature item*/}
              <div
                className='col-lg-3 col-md-6'
                data-aos='zoom-in'
                data-aos-delay={300}
              >
                <h3>Staque laboriosam modi</h3>
                <p>
                  Velit eos error et dolor omnis voluptates nobis tenetur sed
                  enim nihil vero qui suscipit ipsum at magni. Ipsa architecto
                  consequatur aliquam
                </p>
                <ul className='list-unstyled'>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Quis voluptates laboriosam numquam</span>
                  </li>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Treva libero sunt quis veniam ut</span>
                  </li>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Debitis eos est est corrupti</span>
                  </li>
                </ul>
              </div>
              {/* End feature item*/}
              <div
                className='col-lg-3 col-md-6'
                data-aos='zoom-in'
                data-aos-delay={400}
              >
                <h3>Dignissimos suscipit iste</h3>
                <p>
                  Molestiae occaecati assumenda quia saepe nobis recusandae at
                  dicta ducimus sequi numquam commodi est in consequatur ea
                  magnam quia itaque
                </p>
                <ul className='list-unstyled'>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Veritatis qui reprehenderit quis</span>
                  </li>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Accusantium vel numquam sunt minus</span>
                  </li>
                  <li>
                    <i className='bi bi-check2' />{' '}
                    <span>Voluptatem pariatur est sationem</span>
                  </li>
                </ul>
              </div>
              {/* End feature item*/}
            </div>
          </div>
        </section>
        {/* End Servie Cards Section */}
        {/* ======= Alt Services Section 2 ======= */}
        <section id='alt-services-2' className='alt-services section-bg'>
          <div className='container' data-aos='fade-up'>
            <div className='row justify-content-around gy-4'>
              <div className='col-lg-5 d-flex flex-column justify-content-center'>
                <h3>
                  Non quasi officia eum nobis et rerum epudiandae rem voluptatem
                </h3>
                <p>
                  Maxime quia dolorum alias perspiciatis. Earum voluptatem sint
                  at non. Ducimus maxime minima iste magni sit praesentium
                  assumenda minus. Amet rerum saepe tempora vero.
                </p>
                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay={100}
                >
                  <i className='bi bi-easel flex-shrink-0' />
                  <div>
                    <h4>
                      <a href className='stretched-link'>
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay={200}
                >
                  <i className='bi bi-patch-check flex-shrink-0' />
                  <div>
                    <h4>
                      <a href className='stretched-link'>
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay={300}
                >
                  <i className='bi bi-brightness-high flex-shrink-0' />
                  <div>
                    <h4>
                      <a href className='stretched-link'>
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay={400}
                >
                  <i className='bi bi-brightness-high flex-shrink-0' />
                  <div>
                    <h4>
                      <a href className='stretched-link'>
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
              <div
                className='col-lg-6 img-bg'
                style={{
                  backgroundImage: 'url(assets/img/alt-services-2.jpg)',
                }}
                data-aos='zoom-in'
                data-aos-delay={100}
              />
            </div>
          </div>
        </section>
        {/* End Alt Services Section 2 */}
        {/* ======= Alt Services Section ======= */}
        <section id='alt-services' className='alt-services'>
          <div className='container' data-aos='fade-up'>
            <div className='row justify-content-around gy-4'>
              <div
                className='col-lg-6 img-bg'
                style={{ backgroundImage: 'url(assets/img/alt-services.jpg)' }}
                data-aos='zoom-in'
                data-aos-delay={100}
              />
              <div className='col-lg-5 d-flex flex-column justify-content-center'>
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic
                  accusamus. Non ipsam et sed minima temporibus laudantium.
                  Soluta voluptate sed facere corporis dolores excepturi
                </p>
                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay={100}
                >
                  <i className='bi bi-easel flex-shrink-0' />
                  <div>
                    <h4>
                      <a href className='stretched-link'>
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay={200}
                >
                  <i className='bi bi-patch-check flex-shrink-0' />
                  <div>
                    <h4>
                      <a href className='stretched-link'>
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay={300}
                >
                  <i className='bi bi-brightness-high flex-shrink-0' />
                  <div>
                    <h4>
                      <a href className='stretched-link'>
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay={400}
                >
                  <i className='bi bi-brightness-high flex-shrink-0' />
                  <div>
                    <h4>
                      <a href className='stretched-link'>
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
          </div>
        </section>
        {/* End Alt Services Section */}
        {/* ======= Testimonials Section ======= */}
        <section id='testimonials' className='testimonials section-bg'>
          <div className='container' data-aos='fade-up'>
            <div className='section-header'>
              <h2>Testimonials</h2>
              <p>
                Quam sed id excepturi ccusantium dolorem ut quis dolores nisi
                llum nostrum enim velit qui ut et autem uia reprehenderit sunt
                deleniti
              </p>
            </div>
            <div className='slides-2 swiper'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='testimonial-wrap'>
                    <div className='testimonial-item'>
                      <img
                        src='assets/img/testimonials/testimonials-1.jpg'
                        className='testimonial-img'
                        alt=''
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className='stars'>
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                      </div>
                      <p>
                        <i className='bi bi-quote quote-icon-left' />
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className='bi bi-quote quote-icon-right' />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className='swiper-slide'>
                  <div className='testimonial-wrap'>
                    <div className='testimonial-item'>
                      <img
                        src='assets/img/testimonials/testimonials-2.jpg'
                        className='testimonial-img'
                        alt=''
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className='stars'>
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                      </div>
                      <p>
                        <i className='bi bi-quote quote-icon-left' />
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className='bi bi-quote quote-icon-right' />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className='swiper-slide'>
                  <div className='testimonial-wrap'>
                    <div className='testimonial-item'>
                      <img
                        src='assets/img/testimonials/testimonials-3.jpg'
                        className='testimonial-img'
                        alt=''
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className='stars'>
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                      </div>
                      <p>
                        <i className='bi bi-quote quote-icon-left' />
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className='bi bi-quote quote-icon-right' />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className='swiper-slide'>
                  <div className='testimonial-wrap'>
                    <div className='testimonial-item'>
                      <img
                        src='assets/img/testimonials/testimonials-4.jpg'
                        className='testimonial-img'
                        alt=''
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div className='stars'>
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                      </div>
                      <p>
                        <i className='bi bi-quote quote-icon-left' />
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className='bi bi-quote quote-icon-right' />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className='swiper-slide'>
                  <div className='testimonial-wrap'>
                    <div className='testimonial-item'>
                      <img
                        src='assets/img/testimonials/testimonials-5.jpg'
                        className='testimonial-img'
                        alt=''
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div className='stars'>
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                        <i className='bi bi-star-fill' />
                      </div>
                      <p>
                        <i className='bi bi-quote quote-icon-left' />
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i className='bi bi-quote quote-icon-right' />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className='swiper-pagination' />
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}
      </main>
    </div>
  );
}

export default Services;
