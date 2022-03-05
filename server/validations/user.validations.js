const yup = require('yup');

class UserValidations {
  static updateProfile() {
    return yup.object().shape({
      body: yup.object().shape({
        name: yup.string(),
        profileImage: yup.string(),
        bio: yup.string(),
        company: yup.string(),
        companyLicense: yup.string(),
        website: yup.string().url(),
      }),
    });
  }
}

module.exports = UserValidations;
