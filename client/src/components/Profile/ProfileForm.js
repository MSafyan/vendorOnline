import { useFormik } from 'formik';
import * as yup from 'yup';
import { CameraIcon } from '@heroicons/react/outline';
import Rating from '../Utils/Rating';

const initialValues = {
  profilePic: null,
  name: '',
  company: '',
  companyLicense: '',
  companyWebsiteLink: '',
  bio: '',
};

const validationSchema = yup.object().shape({
  profilePic: yup.mixed(),
  name: yup.string().required('Name is required'),
  company: yup.string(),
  companyLicense: yup.string(),
  companyWebsiteLink: yup.string().url('Company website link is not valid'),
  bio: yup.string(),
});

const ProfileForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log(formik.values);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-6 grid grid-cols-2 gap-x-16 gap-y-4 "
    >
      <div className="col-span-2 flex items-center justify-center gap-4">
        {/* profile pic */}
        <div className="relative flex h-28 w-28 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-full border-2 border-gray-700 text-gray-500">
          <CameraIcon className="h-12 w-12" />
          <span className="text-xs font-bold">Add Photo</span>
          {formik.values.profilePic && (
            <img
              src={URL.createObjectURL(formik.values.profilePic)}
              alt="profile"
              className="absolute inset-0 h-full w-full bg-white object-cover"
            />
          )}
          <input
            type="file"
            className="absolute inset-0 cursor-pointer opacity-0"
            onChange={(e) => {
              formik.setFieldValue('profilePic', e.target.files[0]);
            }}
          />
        </div>
        {/* details */}
        <div>
          <h4 className="text-xl font-medium">Name</h4>
          <div className="flex items-center gap-1 text-xs font-medium">
            Reviews
            <Rating reviews={[{ rating: 3 }]} showLength />
          </div>
          <p className="text-xs font-medium">Member since Mar 2021</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Write your name"
            className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.name}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="company" className="font-medium">
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Company Name"
            className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            {...formik.getFieldProps('company')}
          />
          {formik.touched.company && formik.errors.company && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.company}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="companyLicense" className="font-medium">
            Company License
          </label>
          <input
            id="companyLicense"
            type="text"
            placeholder="License number"
            className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            {...formik.getFieldProps('companyLicense')}
          />
          {formik.touched.companyLicense && formik.errors.companyLicense && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.companyLicense}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="companyWebsiteLink" className="font-medium">
            Company Website Link
          </label>
          <input
            id="companyWebsiteLink"
            type="url"
            placeholder="Website Link"
            className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            {...formik.getFieldProps('companyWebsiteLink')}
          />
          {formik.touched.companyWebsiteLink &&
            formik.errors.companyWebsiteLink && (
              <div className="mt-1 text-xs text-red-600">
                * {formik.errors.companyWebsiteLink}
              </div>
            )}
        </div>
      </div>
      <div>
        <div className="flex h-full flex-col">
          <label htmlFor="bio" className="text-sm font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            placeholder="Write your bio"
            className="mt-0.5 w-full flex-1 resize-none rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 ring-primary-600 focus:outline-none focus:ring-1"
            {...formik.getFieldProps('bio')}
          />
          {formik.touched.bio && formik.errors.bio && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.bio}
            </div>
          )}
        </div>
      </div>

      <div className="col-span-2 mt-2 text-center">
        <button
          className=" rounded-xl bg-primary-500 py-1 px-8 font-semibold text-white transition hover:bg-primary-600"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
