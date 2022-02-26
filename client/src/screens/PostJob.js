import PostJobForm from '../components/PostJob/PostJobForm';

const PostJob = () => {
  return (
    <main className="mx-auto max-w-3xl flex-1 py-12 px-8">
      <h1 className="text-center text-2xl font-medium text-gray-900">
        Post Your Job
      </h1>

      <PostJobForm />
    </main>
  );
};

export default PostJob;
