import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about-section">
                <Container>
                    <div className="about-content">
                        <h3 className="about-item">About us</h3>
                        <p className="lead fs-6">E- School BD is  a first growing online education platform in Bangladesh. Mainly we are working on creating quality contents for Students who are seeking the fundamentals to advanced topics in different subjects i.e. Mathematics, English, Bangla etc. Our target is to reach our contents to across all areas in our country. In connection with this, we are working towards creating quality contents day by day. We are here to emphasize to enhance learning capacity of our students. In the near future we are contemplating to launch Academic courses from class 6 to Master's  degree covering the entire syllabus. Our journey was started through making mathematics videos for Competitive exam. There are 500+ free videos in our You tube Channel so that all can get benefits. Over the last couple of years, we have helped more than 800k students with free of cost. We believe mutual respect, inter-personal relationship, crave for learning new things, sharing knowledge with each other play a vital role to build a good nation. Besides our free videos, we have already launched some paid courses i.e. Applied Math Online Course, Sentence Correction for Beginner, Calculas etc. Within 2021, we are going to launch more than 8 (Eight) paid courses with a view to strengthening the skill so that a job seeker can be prepared for the competitive exam. We are looking forward to kind support of our students.</p>
                    </div>
                </Container>
            </div>
            {/* <Container>

            </Container> */}
        </div>
    );
};

export default About;