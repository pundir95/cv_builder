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
    // {
    //   label: "Resume",
    //   fieldName: "resume",
    //   type: "upload",
    //   placeholder: "Upload Resume",
    //   columnWidth: 12,
    // },
    // {
    //   label: "Certificate",
    //   fieldName: "certificate",
    //   type: "upload",
    //   placeholder: "Upload Certificate",
    //   columnWidth: 12,
    // },
    // {
    //   label: "Intro Video",
    //   fieldName: "intro_video_url",
    //   type: "upload",
    //   placeholder: "Upload Intro Video",
    //   columnWidth: 12,
    // },
    // {
    //   label: "LinkedIn",
    //   fieldName: "linkedin_url",
    //   type: "text",
    //   placeholder: "e.g. www.linkedin.com/profile/12345",
    //   rules: {
    //     // required: "Linked in is required",
    //     pattern: {
    //       value:
    //         /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/,
    //       message: "Please enter a valid URL",
    //     },
    //   },
    //   columnWidth: 6,
    //   isRequired: false,
    // },
    // {
    //   label: "Github",
    //   fieldName: "github_url",
    //   type: "text",
    //   placeholder: "e.g. www.github.com/profile/12345",
    //   rules: {
    //     // required: "GitHub link is required",
    //     pattern: {
    //       value:
    //         /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/,
    //       message: "Please enter a valid URL",
    //     },
    //   },
    //   columnWidth: 6,
    //   isRequired: false,
    // },
  ];
  