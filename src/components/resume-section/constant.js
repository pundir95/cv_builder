const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const RESUME_SIDE_LIST = [
    { stepNumber: 1, label: "Heading" },
    { stepNumber: 2, label: "Work History" },
    { stepNumber: 3, label: "Education" },
    { stepNumber: 4, label: "Skills" },
    { stepNumber: 5, label: "Summary" },
    { stepNumber: 6, label: "Finalize" },
]


export const SIDEBAR_PERCENTAGE = [0, 0, 30, 50, 70, 100]


export const BUILDER_STEP_1_FIELDS = [
    {
      label: "First Name",
      fieldName: "first_name",
      type: "text",
      placeholder: "e.g. John",
      rules: { 
        required: "First name is required" ,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "First Name must contain only letters and spaces"
        }
      },
  
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "SURNAME",
      fieldName: "sur_name",
      type: "text",
      placeholder: "e.g. Doe",
      rules: { 
        required: "Sur Name is required" ,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "Last Name must contain only letters and spaces"
        }
      },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Profession",
      fieldName: "profession",
      type: "text",
      placeholder: "e.g. Software Engineer",
      rules: { 
        required: "Profession name is required" ,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "Profession Name must contain only letters and spaces"
        }
      },
      columnWidth: 12,
      isRequired: true,
    },
  
    {
      label: "phoneNumber",
      fieldName: "phone_number",
      type: "phone",
      placeholder: "e.g. +46766921023",
      rules: { required: "Phone number is required" },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "email",
      fieldName: "email",
      type: "email",
      placeholder: "e.g. johndoe123@gmail.com",
      rules: {
        required: "Email is required",
        pattern: {
          value: EMAIL_REGEX,
          message: "Invalid Email",
        },
      },
      columnWidth: 6,
      isRequired: true,
      readOnly: false,
    },
    {
      isPasswordSection: true,
    },
    {
      label: "address",
      fieldName: "address",
      type: "select",
      placeholder: "e.g. Street 1341,New area,CA,USA",
      rules: { required: "Address is required" },
      columnWidth: 12,
      isRequired: true,
      isAutocomplete: true,
      defaultOption: "Select",
    },
    {
      isLocation: true,
    },
  
    {
      label: "Driving License",
      fieldName: "driving_license",
      type: "text",
      placeholder: "Driving license Intro Video",
      columnWidth: 6,
      isRequired: false,
    },
    {
      label: "LinkedIn",
      fieldName: "linkedin_url",
      type: "text",
      placeholder: "e.g. www.linkedin.com/profile/12345",
      rules: {
        // required: "Linked in is required",
        pattern: {
          value:
            /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/,
          message: "Please enter a valid URL",
        },
      },
      columnWidth: 6,
      isRequired: false,
    },
    {
      label: "Website",
      fieldName: "website",
      type: "text",
      placeholder: "e.g. www.github.com/profile/12345",
      rules: {
        // required: "GitHub link is required",
        pattern: {
          value:
            /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/,
          message: "Please enter a valid URL",
        },
      },
      columnWidth: 6,
      isRequired: false,
    },
  ];
  
  export const BUILDER_STEP_2_FIELDS = [
    {
      label: "Date of Birth",
      fieldName: "d_o_b",
      type: "date",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Nationality",
      fieldName: "nationality",
      type: "text",
      placeholder: "e.g. Doe",
      rules: { 
        required: "Sur Name is required" ,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "Last Name must contain only letters and spaces"
        }
      },
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Marital status",
      fieldName: "martial_status",
      type: "text",
      placeholder: "e.g. Software Engineer",
      rules: { 
        required: "Profession name is required" ,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "Profession Name must contain only letters and spaces"
        }
      },
      columnWidth: 6,
      isRequired: true,
    },
  
    {
      label: "Visa Status",
      fieldName: "visa_status",
      type: "phone",
      placeholder: "e.g. +46766921023",
      rules: { required: "Phone number is required" },
      columnWidth: 6,
      isRequired: true,
    },

  ]


  export const EXPERIENCE_FIELDS = [
    {
      label: "What was your title?",
      fieldName: "title",
      type: "text",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Who did you do this for",
      fieldName: "who_did",
      type: "text",
      placeholder: "Person,organization,company,or family, business you worked for",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Location",
      fieldName: "location",
      type: "text",
      placeholder: "e.g. New York, USA",
      columnWidth: 6,
      isRequired: true,
    },
  
    {
      label: "Start Date",
      fieldName: "start_date",
      type: "date",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "",
      fieldName: "year",
      type: "date",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "End Date",
      fieldName: "start_date",
      type: "date",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "",
      fieldName: "year",
      type: "date",
      columnWidth: 6,
      isRequired: true,
    },

  ]




  
  export const EDUCATION_FIELDS = [
    {
      label: "School Name",
      fieldName: "school_name",
      type: "text",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "School Location",
      fieldName: "school_location",
      type: "text",
      placeholder: "Person,organization,company,or family, business you worked for",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Degree",
      fieldName: "degree",
      type: "select2",
      placeholder: "Select",
      columnWidth: 6,
      isRequired: true,
    },
  
    {
      label: "Field of study",
      fieldName: "field_of_study",
      type: "text",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "Graduation Date (or expected Graduation Date)",
      fieldName: "month",
      type: "normal-select",
      columnWidth: 6,
      isRequired: true,
    },
    {
      label: "",
      fieldName: "year",
      type: "normal-select",
      columnWidth: 6,
      isRequired: true,
    },
    

  ]

