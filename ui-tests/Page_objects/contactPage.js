module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
    elements: {
      emailInput: '#email',
      messageInput: '#message',
      submitButton: '#submitMessage > span',
      // Add other elements as needed
    },
    commands: [
      {
        fillContactForm(type, email, message) {
          return this.click(`#uniform-id_contact option:nth-child(${type})`)
            .setValue('@emailInput', email)
            .setValue('@messageInput', message);
        },
        submitContactForm() {
          return this.click('@submitButton');
        },
        
      },
    ],
  };
  