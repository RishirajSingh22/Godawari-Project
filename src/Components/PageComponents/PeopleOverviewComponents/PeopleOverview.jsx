import React from 'react';
import style from "../PeopleOverviewComponents/Styles/PeopleOverview.module.css"

const PeopleOverview = () => {
    return (
        <>
            <section className={style.peopleoverviewsection1}>
  
                    {/* <!-- Carousel --> */}
                    <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="container mx-auto carousel-inner">
  <div class="carousel-item active">
    <div className='d-flex justify-content-center align-items-center'>
        A Workplace Thats <br />Empowers
    </div>
  
     </div>

</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
         
            </section>
        </>
    )
}

export default PeopleOverview