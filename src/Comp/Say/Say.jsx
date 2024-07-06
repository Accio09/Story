import React, { useRef } from 'react'
import './Say.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Say = () => {

const slider = useRef ();
let tx =0; 

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials' id ='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
       <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src = {user_1} alt="" />
                        <div>
                        <h3>Daily Dose of Sunshine</h3>
                            <p>Rating: 9/10</p>
                            <p>Country: South Korea</p>
                            <p>Episodes: 12</p>
                            <p>Aired: Nov 3, 2023</p>
                            <p>Duration: 1hr. 10 min.</p>
                            <p>Content Rating: 15+ - Teens 15 or older</p>
                        </div>
                    </div>
                    <p>Jung Da Eun, a nurse who switches to neuropsychiatry, navigates new challenges. She finds support from Chief Nurse, her friend Song Yoo Chan, who conceals his own pain and others. Along the way, she meets Proctologist Dong Go Yoon, who is uplifted by her sincerity.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Amanza</h3>
                            <p>Rating: 9/10</p>
                            <p>Country: South Korea</p>
                            <p>Episodes: 10</p>
                            <p>Aired: Sep 1, 2020 - Nov 3, 2020</p>
                            <p>Duration: 15 min.</p>
                            <p>Content Rating: 15+ - Teens 15 or older</p>
                        </div>
                    </div>
                    <p>A 26-year-old man’s life is turned upside down when he is diagnosed with terminal stomach cancer. As he struggles with the pain of his treatment and the realization that he never truly lived, he retreats into his imagination, to a magical forest where answers and miracles can be found.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                        <h3>Would You Like a Cup of Coffee?</h3>
                            <p>Rating: 8.5/10</p>
                            <p>Country: South Korea</p>
                            <p>Episodes: 12</p>
                            <p>Aired: Oct 24, 2021 - Dec 2, 2021</p>
                            <p>Duration: 30 min.</p>
                            <p>Content Rating: G - All Ages</p>
                        </div>
                    </div>
                <p>Park Seok, owner of the beloved Café 2Dae, works tirelessly alone. A passionate young man, Kang Go Bi, convinces him to be a part-time worker. Their bond deepens as they navigate life lessons together, bringing warmth to their customers. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                        <h3>Unmet: Aru Nogekai no Nikki</h3>
                            <p>Rating: 9/10</p>
                            <p>Country: Japan</p>
                            <p>Episodes: 11</p>
                            <p>Aired: Apr 15, 2024 - Jun 24, 2024</p>
                            <p>Duration: 54 min.</p>
                            <p>Content Rating: 15+ - Teens 15 or older</p>
                        </div>
                    </div>
                    <p>Miyabi, once a promising neurosurgeon, suffers brain damage and loses recent memories, giving up on her creer. Neurosurgeon Sanpei guides her, as she grows both as a doctor and patient. The mystery behind her missing memories gradually unfolds.</p>
                </div>
            </li>
        </ul>
        </div> 

    </div>
  )
}

export default Say
