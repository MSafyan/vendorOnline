import { useFormik } from 'formik';
import * as yup from 'yup';
import CategoryDisclosure from './CategoryDisclosure';
import { CameraIcon } from '@heroicons/react/outline';
import { useMutation, useQueryClient } from 'react-query';
import { JobAPI } from '../../api';
import LoaderIcon from '../../assets/icons/LoaderIcon';

const MAX_IMAGES = 4;

const initialValues = {
  title: '',
  company: '',
  location: '',
  budget: '',
  description: '',
  category: '',
  images: [],
};

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  company: yup.string().required('Company is required'),
  location: yup.string().required('Location is required'),
  budget: yup.string().required('Budget is required'),
  description: yup
    .string()
    .required('Description is required')
    .min(100, 'Description must be at least 100 characters'), // also have a check in model
  category: yup.string().required('Category is required'),
  images: yup
    .array()
    .of(yup.mixed())
    .min(1, 'Please select at least one image')
    .max(MAX_IMAGES)
    .required('Images is required'),
});

const PostJobForm = () => {
  const queryClient = useQueryClient();

  const { mutate: createJob, isLoading } = useMutation(
    'createJob',
    JobAPI.createJob,
    {
      onSuccess: (newJob) => {
        queryClient.setQueryData('jobs', (old) => {
          if (!old) return [newJob];

          return [...old, newJob];
        });

        formik.resetForm();
      },
    }
  );

  const onSubmit = (values) => {
    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('company', values.company);
    formData.append('location', values.location);
    formData.append('budget', values.budget);
    formData.append('description', values.description);
    formData.append('category', values.category);

    if (values.images.length > 0) {
      values.images.forEach((image) => {
        formData.append('images', image);
      });
    }

    createJob(formData);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-6 grid grid-cols-12 gap-x-14 gap-y-4 "
    >
      <div className="col-span-5 space-y-4">
        <div>
          <label htmlFor="title" className="font-medium">
            Job Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Add title"
            className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.title}
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
          <label htmlFor="location" className="font-medium">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Eg San Francisco, CA"
            className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            {...formik.getFieldProps('location')}
          />
          {formik.touched.location && formik.errors.location && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.location}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="font-medium">
            Budget
          </label>
          <input
            id="companyWebsiteLink"
            type="number"
            min={0}
            placeholder="$0.00"
            className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            {...formik.getFieldProps('budget')}
          />
          {formik.touched.budget && formik.errors.budget && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.budget}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Type the description here"
            rows={6}
            className="mt-0.5 w-full resize-none rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-600"
            {...formik.getFieldProps('description')}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.description}
            </div>
          )}
        </div>
      </div>
      <div className="col-span-7">
        <h4 className="font-medium">Category</h4>
        <CategoryDisclosure
          selected={formik.values.category}
          setSelected={(value) => formik.setFieldValue('category', value)}
          error={formik.touched.category && formik.errors.category}
        />
        <h4 className="mt-4 font-medium">Attached Images</h4>
        <div className="mt-6 flex flex-wrap gap-2">
          {[...new Array(MAX_IMAGES)].map((_, index) => (
            <div
              key={index}
              className="relative flex cursor-pointer flex-col items-center justify-center overflow-hidden border-2 border-gray-300 px-3 py-6 text-gray-500"
            >
              <CameraIcon className="h-10 w-10" />
              <span className="text-center text-xs font-bold">Add Photo</span>
              {formik.values.images[index] && (
                <img
                  src={URL.createObjectURL(formik.values.images[index])}
                  alt=""
                  className="absolute inset-0 h-full w-full bg-white object-cover"
                />
              )}
              <input
                type="file"
                name="profilePic"
                id=""
                className="absolute inset-0 cursor-pointer opacity-0"
                onChange={(e) => {
                  const tempImages = [...formik.values.images];
                  tempImages[index] = e.target.files[0];

                  formik.setFieldValue('images', tempImages);
                }}
              />
            </div>
          ))}
          {formik.errors.images && formik.errors.images.length > 0 && (
            <div className="mt-1 text-xs text-red-600">
              * {formik.errors.images}
            </div>
          )}
        </div>
      </div>

      <div className="col-span-12">
        <button
          className="rounded-xl bg-primary-500 py-1 px-8 font-semibold text-white transition hover:bg-primary-600 disabled:bg-gray-400"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <LoaderIcon /> : 'Publish Job'}
        </button>

        {/* <button className="ml-4 rounded-xl border border-primary-500 py-1 px-8 font-semibold text-primary-500 transition hover:border-primary-600 hover:text-primary-600">
          Save Draft
        </button> */}
      </div>
    </form>
  );
};

export default PostJobForm;
