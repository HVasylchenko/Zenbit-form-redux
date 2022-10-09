import { useDispatch, useSelector } from "react-redux";

function ProfilePage () {
  const state = useSelector((state) => state.auth);

  return (
    <div >
      <h1>ProfilePage</h1>
      <div>{state.login}</div>
      <div>{state.password}</div>
    </div>
  );
}

export default ProfilePage;