import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
// import FacebookIcon from '../../assets/icons/FacebookIcon';
// import GoogleIcon from '../../assets/icons/GoogleIcon';

const initialValues = {
  userId: '',
  password: '',
};

const validationSchema = yup.object().shape({
  userId: yup.string().email().required('User id/Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginModal = ({ isOpen, setIsOpen, openSignUp }) => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    localStorage.setItem('user', JSON.stringify(values));
    setIsOpen(false);
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={isOpen} afterLeave={formik.resetForm}>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center"
      >
        <Transition.Child
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-primary-900/30" />
        </Transition.Child>

        <Transition.Child
          enter="transition-opacity duration-150"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition-opacity duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="relative max-w-md space-y-3 rounded-md bg-white px-16 py-12 shadow-lg">
            <button
              className="absolute top-0 right-0 my-3 mr-4 text-gray-600 transition hover:text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="h-6 w-6" />
            </button>

            <Dialog.Title className="text-xl font-medium text-gray-900">
              Sign In to Gigwaiting
            </Dialog.Title>

            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="userId/email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="userId/email"
                  type="email"
                  placeholder="Email"
                  className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 ring-primary-600 focus:outline-none focus:ring-1"
                  {...formik.getFieldProps('userId')}
                />
                {formik.touched.userId && formik.errors.userId && (
                  <div className="mt-1 text-xs text-red-600">
                    * {formik.errors.userId}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="mt-0.5 w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-800 ring-primary-600 focus:outline-none focus:ring-1"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="mt-1 text-xs text-red-600">
                    * {formik.errors.password}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded bg-primary-600 px-6 py-1.5 text-center text-white transition hover:bg-primary-500"
              >
                Sign in
              </button>
            </form>

            <div className="text-center text-sm">
              <Link to="/">Forget Password?</Link>
            </div>

            {/* <div className="relative flex h-px w-full justify-center bg-gray-400">
              <span className="absolute -translate-y-2.5 bg-white px-1  text-sm font-medium">
                Or
              </span>
            </div> */}

            {/* <button className="relative w-full rounded-md bg-[#385995] px-6 py-1 font-medium text-white">
              <FacebookIcon className="absolute top-0 left-0 ml-4 mt-2 h-4 w-4" />{' '}
              Sign up with Facebook
            </button>
            <button className="relative w-full rounded-md border border-gray-600 px-6 py-1 font-medium text-gray-800">
              <GoogleIcon className="absolute top-0 left-0 ml-4 mt-1 h-6 w-6" />
              Sign up with Google
            </button> */}
            {/* <div>
              <button
                className="relative mt-2 w-full rounded-md border border-gray-400 px-6 py-1 font-medium text-gray-700 transition hover:bg-gray-100"
                onClick={() => {
                  setIsOpen(false);
                  openSignUp();
                }}
                type="button"
              >
                Sign up
              </button>
            </div> */}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default LoginModal;