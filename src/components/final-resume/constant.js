import img from "../../assets/images/demo-img.jpg"

export let RESUME_DATA={
    image: {
      profile_pic: img,
    },
    resumeData: [

        {
        id:1,
          section_name: "Contact Information",
          side: "left",
          content: `
            <div class="info">
              <p><strong>Address:</strong> New Delhi, India, 110034</p>
              <p><strong>Phone:</strong> +91 22 1234 5677</p>
              <p><strong>Email:</strong> saanvipatel@sample.in</p>
            </div>
          `,
        },
        {
            id:2,
          section_name: "Skills",
          side: "left",
          content: `
            <div class="skills">
              <h3>Skills</h3>
              <ul>
                <li>Store opening and closing</li>
                <li>Sales expertise</li>
                <li>Accurate Money Handling</li>
                <li>Store Merchandising</li>
                <li>Loss prevention</li>
                <li>Product promotions</li>
                <li>Guest Services</li>
                <li>Point of Sale Systems</li>
              </ul>
            </div>
          `,
        },
        {
            id:3,
          section_name: "Languages",
          side: "left",
          content: `
            <div class="languages">
              <h3>Languages</h3>
              <ul>
                <li>Hindi: Native Language</li>
              </ul>
            </div>
          `,
        },
        {
            id:4,
          section_name: "Summary",
          side: "right",
          content: `
            <h3>Motivated Sales Associate</h3>
            <p>With 5 years of experience boosting sales and customer loyalty through individualized service...</p>
          `,
        },
        {
            id:5,
          section_name: "Work History",
          side: "right",
          content: `
            <h3>Work History</h3>
            <div class="work-item">
              <h4>Retail Sales Associate</h4>
              <p><strong>H&M, New Delhi</strong> (2016-05 - Current)</p>
              <ul>
                <li>Effectively upsold products...</li>
                <li>Generated brand awareness...</li>
                <li>Used consultative sales approach...</li>
              </ul>
            </div>
            <div class="work-item">
              <h4>Barista</h4>
              <p><strong>Starbucks, New Delhi</strong> (2015-01 - 2016-03)</p>
              <ul>
                <li>Created over 60 drinks per hour...</li>
                <li>Learned every menu preparation...</li>
                <li>Upsold baked goods...</li>
              </ul>
            </div>
          `,
        },
        {
            id:6,
          section_name: "Education",
          side: "right",
          content: `
            <h3>Education</h3>
            <p><strong>Diploma: Financial Accounting</strong></p>
            <p>Oxford Software Institute & Oxford School of English - New Delhi, India</p>
          `,
        },
      ]
  }