// ─── formConfig.js ───────────────────────────────────────────────────────────
// Yahan sirf data hai — koi JSX nahi
// Edit karna ho to sirf is file ko touch karo

export const SERVICES = [
  {
    id: 'whatsapp',
    label: 'WhatsApp Business API',
    color: '#25D366',
    bg: '#e8faf0',
  },
  {
    id: 'rcs',
    label: 'RCS Messaging',
    color: '#0D66BA',
    bg: '#e6f0fb',
  },
  {
    id: 'dlt',
    label: 'DLT Registration',
    color: '#E87722',
    bg: '#fef3e8',
  },
];

const COMMON_BUSINESS_FIELDS = [
  { name: 'businessName',      label: 'Business / Company Name',   type: 'text',     required: true },
  { name: 'registeredAddress', label: 'Registered Address',         type: 'textarea', required: true },
  { name: 'businessCategory',  label: 'Business Category',          type: 'text',     required: true },
  { name: 'websiteUrl',        label: 'Website URL',                type: 'url',      required: true },
  { name: 'companyEmail',      label: 'Company Email Address',      type: 'email',    required: true },
  { name: 'contactPerson',     label: 'Contact Person Name',        type: 'text',     required: true },
  { name: 'mobileNumber',      label: 'Mobile Number',              type: 'tel',      required: true },
];

const COMMON_DOC_FIELDS = [
  { name: 'businessCert', label: 'Business Registration Certificate (Udyam/MSME/Shop Licence/GST)', type: 'file', required: true },
  { name: 'idProof',      label: 'Owner/Director ID Proof (Aadhar / PAN)',                           type: 'file', required: true },
  { name: 'additionalDocs', label: 'Additional Documents (optional)',                                 type: 'file', required: false },
];

export const SERVICE_SECTIONS = {
  whatsapp: [
    {
      section: 'Business Information',
      desc: 'Basic business details for account verification.',
      fields: COMMON_BUSINESS_FIELDS,
    },
    {
      section: 'WhatsApp Branding',
      desc: 'Branding details for your official WhatsApp Business profile.',
      fields: [
        { name: 'brandName',            label: 'Brand Name / Legal Business Name', type: 'text',     required: true },
        { name: 'displayName',          label: 'WhatsApp Display Name',            type: 'text',     required: true },
        { name: 'businessDescription',  label: 'Business Description',             type: 'textarea', required: true },
      ],
    },
    {
      section: 'API Usage Details',
      desc: 'Tell us how your business will use WhatsApp API.',
      fields: [
        { name: 'useCase',          label: 'Intended Use Case',    type: 'textarea', required: true },
        { name: 'industryType',     label: 'Industry Type',        type: 'text',     required: true },
        { name: 'chatbotRequired',  label: 'Chatbot Requirement',  type: 'select',   required: false,
          options: ['Yes', 'No', 'Maybe Later'] },
      ],
    },
    {
      section: 'Phone Number Details',
      desc: 'Provide the number you want to activate for WhatsApp API.',
      fields: [
        { name: 'currentlyOnWhatsApp', label: 'Is this number currently on WhatsApp?', type: 'select', required: true,  options: ['Yes', 'No'] },
        { name: 'canReceiveOtp',       label: 'Can you receive OTP on this number?',   type: 'select', required: true,  options: ['Yes', 'No'] },
        { name: 'callForwarding',      label: 'Call Forwarding Enabled?',              type: 'select', required: true,  options: ['Yes', 'No'] },
        { name: 'phoneType',           label: 'Phone Type',                            type: 'select', required: true,  options: ['Mobile', 'Landline', 'VoIP'] },
      ],
    },
    {
      section: 'Document Upload',
      desc: 'Upload necessary business documents for verification.',
      fields: COMMON_DOC_FIELDS,
    },
  ],

  rcs: [
    {
      section: 'Business Information',
      desc: 'Basic business details for RCS activation.',
      fields: COMMON_BUSINESS_FIELDS,
    },
    {
      section: 'RCS Branding',
      desc: 'Your brand identity for RCS messaging profile.',
      fields: [
        { name: 'brandName',           label: 'Brand / Display Name',    type: 'text',     required: true },
        { name: 'businessDescription', label: 'Business Description',    type: 'textarea', required: true },
        { name: 'logoUrl',             label: 'Brand Logo URL',          type: 'url',      required: false },
        { name: 'brandColor',          label: 'Brand Color (Hex Code)',  type: 'text',     required: false, placeholder: '#0D66BA' },
      ],
    },
    {
      section: 'RCS Usage Details',
      desc: 'How will you use RCS messaging?',
      fields: [
        { name: 'useCase',           label: 'Intended Use Case',                  type: 'textarea', required: true },
        { name: 'industryType',      label: 'Industry Type',                      type: 'text',     required: true },
        { name: 'monthlyVolume',     label: 'Expected Monthly Message Volume',    type: 'select',   required: true,
          options: ['< 10,000', '10,000 – 50,000', '50,000 – 1,00,000', '1,00,000+'] },
        { name: 'richCardRequired',  label: 'Rich Cards / Carousel Required?',   type: 'select',   required: false,
          options: ['Yes', 'No', 'Maybe Later'] },
      ],
    },
    {
      section: 'Document Upload',
      desc: 'Upload documents for RCS verification.',
      fields: COMMON_DOC_FIELDS,
    },
  ],

  dlt: [
    {
      section: 'Business Information',
      desc: 'Basic business details for DLT registration.',
      fields: COMMON_BUSINESS_FIELDS,
    },
    {
      section: 'DLT Entity Details',
      desc: 'Your entity details for TRAI DLT portal registration.',
      fields: [
        { name: 'entityName', label: 'Entity Name (as per GST/PAN)', type: 'text',   required: true },
        { name: 'entityType', label: 'Entity Type',                   type: 'select', required: true,
          options: ['Private Limited', 'Public Limited', 'LLP', 'Proprietorship', 'Partnership', 'Government', 'NGO'] },
        { name: 'gstNumber',  label: 'GST Number',                   type: 'text',   required: true },
        { name: 'panNumber',  label: 'PAN Number',                   type: 'text',   required: true },
        { name: 'cin',        label: 'CIN (if applicable)',           type: 'text',   required: false },
      ],
    },
    {
      section: 'Sender ID & Template',
      desc: 'Details for your SMS Sender ID and message templates.',
      fields: [
        { name: 'preferredSenderId', label: 'Preferred Sender ID (6 chars)',       type: 'text',     required: true, placeholder: 'DIGIDR' },
        { name: 'smsCategory',       label: 'SMS Category',                        type: 'select',   required: true,
          options: ['Transactional', 'Promotional', 'Service Implicit', 'Service Explicit'] },
        { name: 'sampleTemplate',    label: 'Sample Message Template',             type: 'textarea', required: true },
        { name: 'monthlyVolume',     label: 'Expected Monthly SMS Volume',         type: 'select',   required: true,
          options: ['< 10,000', '10,000 – 50,000', '50,000 – 1,00,000', '1,00,000+'] },
      ],
    },
    {
      section: 'Document Upload',
      desc: 'Upload documents for DLT registration.',
      fields: [
        { name: 'gstCert',      label: 'GST Certificate',                    type: 'file', required: true },
        { name: 'panCard',      label: 'PAN Card (Business)',                type: 'file', required: true },
        { name: 'idProof',      label: 'Owner/Director ID Proof (Aadhar / PAN)', type: 'file', required: true },
        { name: 'businessCert', label: 'Business Registration Certificate',  type: 'file', required: false },
      ],
    },
  ],
};