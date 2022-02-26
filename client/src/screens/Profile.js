import ProfileForm from '../components/Profile/ProfileForm';

const Profile = () => {
  return (
    <main className="mx-auto max-w-3xl flex-1 py-12 px-8">
      <h2 className="text-center text-2xl font-medium text-gray-900">
        Profile
      </h2>

      <ProfileForm />
    </main>
  );
};

export default Profile;
