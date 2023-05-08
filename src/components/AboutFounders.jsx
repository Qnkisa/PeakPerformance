import React from 'react'

export default function AboutFounders() {
  return (
    <div className="about-founders">
        <h3>Meet the <span> founders</span></h3>
        <div className="about-founders-helper">
            <div className="founder-div">
                <div className="founder-div-image">
                    <img src="/founder1-real.png" alt="" />
                </div>
                <div className="founder-div-content">
                    <p>Jason Smith</p>
                    <span>Jason Smith is a former professional athlete turned fitness coach. After a successful career in sports, he found a new calling in life: helping others achieve their fitness goals. With over a decade of experience in the industry, Jason has a deep understanding of what it takes to transform your body and improve your health. He's seen firsthand how a combination of customized training plans and nutritional guidance can make a huge difference in people's lives, and he's committed to helping as many people as possible achieve their goals. </span>
                </div>
            </div>
            <div className="founder-div">
                <div className="founder-div-image">
                    <img src="/founder2-real.png" alt="" />
                </div>
                <div className="founder-div-content">
                    <p>Aaron Pinkman</p>
                    <span>Aaron Pinkman is a fitness entrepreneur with a passion for innovation. After working in the industry for several years, he saw a need for a more personalized approach to fitness coaching. He realized that every individual has unique needs and goals, and that a one-size-fits-all approach simply doesn't work. That's why he teamed up with Jason Smith to create PeakPerformance, with the mission of helping people achieve their fitness goals through customized training and nutrition plans.</span>
                </div>
            </div>
        </div>
    </div>
  )
}
