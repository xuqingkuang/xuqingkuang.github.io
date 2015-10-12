React     = require 'react'
Section   = require '../components/section'
styles    = require '../styles'

module.exports = React.createClass
  render: ->
    return (
      <div>
        <Section title="About Me">
          <p>
            I have a passion for web development and architecture, from 
            application design, frontend prototype to database design, I have 
            experience and enjoyed every piece of it. I'm especially picky about 
            user experience, performance and security in web development.
          </p>
          <p>
            Specialties: Web development. LNMN stack (Linux, Nginx, MySQL, 
            NodeJS), HTML5, CSS3, Javascript, Bootstrap, Amaze UI, jQuery, 
            Backbone, React, Reflux, CoffeeScript, Stylus and software testing 
            process.
          </p>
          <p>
            Interestings: Cutting Edge Technology, Business Strategy, Web 
            Development, Badminton, Reading, and the most favourite is watching 
            Movie.
          </p>
        </Section>

        <Section title="Working Experience">
           <section>
            <p>Senior Frontend Engineer @ <a href="http://www.admaster.com.cn" style={styles.textLink}>AdMaster</a> 2013/12 - Now</p>
            <i>Develop the analysis tools for advertise and web site with Backbone/Chaplin framework.</i>
           </section>
           <section>
            <p>Full Stack Engineer @ <a href="http://www.thundersoft.com" style={styles.textLink}>ThunderSoft</a> 2011/03 - 2013/11</p>
            <i>Create the photo cloud app, company page, and technology demos.</i>
           </section>
           <section>
            <p>Full Stack Engineer @ <a href="http://www.redhat.com" style={styles.textLink}>Red Hat</a> 2008/10 - 2011/01</p>
            <i>Develop the automatic testing and manually testing tools for QA department, use Django/Python framework.</i>
           </section>
        </Section>

        <Section title="Certifications">
          <section>
            <p><a href="https://www.scrumalliance.org/community/profile/xkuang" style={styles.textLink}>Certified Scrum Master</a> 2010/11 - 2012/11</p>
            <i>No. 000112271</i>
          </section>
          <section>
            <p><a href="https://www.redhat.com/rhtapps/verify/?certId=805010331148847" style={styles.textLink}>Red Hat Certified Engineer</a> 2010/04 - 2013/04</p>
            <i>No. 805010331148847</i>
          </section>
        </Section>
      </div>
    )
