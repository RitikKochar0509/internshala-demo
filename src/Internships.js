import {  ArrowRightAlt } from '@material-ui/icons'
import React from 'react'
import Cities from './Cities'
import './Internships.css'
function Internships() {
    return (
        <div className = 'internships'>
            <div className="intern__header">
                <div className="internheader__top">
                    <h1>Internships</h1>
                </div>
                <div className="internheader__bottom">
                    <div className="bottom__left">
                        <h3>Apply to 10,000+ internships for free</h3>
                    </div>
                    <div className="bottom__right">
                        <h3>View all Internships</h3>
                        <ArrowRightAlt/>
                    </div>
                </div>
            </div>

            <h3 className = 'ab'>Popular Cities</h3>
            
            <div className="intern__citites">
                
                
                <div className="city">
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/work_from_home.svg'
                    title = 'Work from home'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg'
                    title = 'Delhi/NCR'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/bangalore.svg'
                    title = 'Banglore'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/mumbai.svg'
                    title = 'Mumbai'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/hyderabad.svg'
                    title = 'Hydrabad'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/chennai.svg'
                    title = 'Chennai'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/kolkata.svg'
                    title = 'Kolkata'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/international.svg'
                    title = 'International'
                />
                
</div>
            </div>
            <h3 className = 'ab'>Popular Categories</h3>

                
            <div className="intern__category">
                
                <div className="city">
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/part_time.svg'
                    title = 'Part-time'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/engineering.svg'
                    title = 'Engeering'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/ngo.svg'
                    title = 'NGO'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/mba.svg'
                    title = 'MBA'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/design.svg'
                    title = 'Design'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/science.svg'
                    title = 'Science'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/media.svg'
                    title = 'Media'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/internships/categories/humanities.svg'
                    title = 'Humanitites'
                />
                
</div>
            </div>

            <div className="intern__header">
                <div className="internheader__top">
                    <h1>Internshala Trainings</h1>
                </div>
                <div className="internheader__bottom">
                    <div className="bottom__left">
                        <h3>Learn new-age skills on the go</h3>
                    </div>
                    <div className="bottom__right">
                        <h3>View all trainings</h3>
                        <ArrowRightAlt/>
                    </div>
                </div>
            </div>

            
             <div className="intern__category">
                
                <div className="city">
                <Cities
                    source = 'https://internshala.com/static/images/home/trainings/icons/programming_with_python.svg'
                    title = 'Python'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/trainings/icons/digital_marketing.svg'
                    title = 'Digital-Marketing'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/trainings/icons/web_development.svg'
                    title = 'Web-Dev'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/trainings/icons/machine_learning.svg'
                    title = 'ML'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/trainings/icons/advanced_excel.svg'
                    title = 'Excel'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/trainings/icons/ethical_hacking.svg'
                    title = 'Hacking'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/trainings/icons/autocad.svg'
                    title = 'Autocad'
                />
                <Cities
                    source = 'https://internshala.com/static/images/home/trainings/icons/creative_writing.svg'
                    title = 'Content-Writing'
                />
                
</div>
</div>
            <p className='extra'> &52 more.....</p>

            <div className="intern__header">
                <div className="internheader__top">
                    <h1>Freshers Jobs</h1>
                    
                </div>
                <div className="internheader__bottom">
                    <div className="bottom__left">
                        <h3>Premium fresher jobs on your fingertips</h3>
                    </div>
                    <div className="bottom__right">
                        <h3>View all jobs</h3>
                        <ArrowRightAlt/>
                    </div>
                </div>
            </div>

            <div className="intern__category1">
                
                
                <div className="m">
                <Cities
                    source = 'https://internshala.com/static/images/home/jobs/perks/ctc.svg'
                    title = 'Minimum CTC of 3 LPA'
                />
                </div>
                <div className="m">
                <Cities
                    source = 'https://internshala.com/static/images/home/jobs/perks/dream.svg'
                    title = 'Dream Companies'
                />
                </div>
                <div className="m">
                <Cities
                    source = 'https://internshala.com/static/images/home/jobs/perks/verified.svg'
                    title = '100% Verified - Jobs'
                />
                </div>
                
                

</div>


        </div>
    )
}

export default Internships
