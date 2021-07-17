import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const history = useHistory();

  const googleSuccess = async (res: any) => {
    const result = await res?.profileObj;
    const token = await res?.tokenId;

    try {
      console.log(result);

      localStorage.setItem("userData", JSON.stringify(result));
      localStorage.setItem("token", token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => console.log("Google Sign in was unsuccessful.");

  return (
    <div className=" flex justify-center items-center h-96">
      <GoogleLogin
        clientId="780385843073-js6m99ad957ddbsg7heug47pf5l7j564.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="flex items-center"
          >
            <FcGoogle size={60} />
            <h4 className="text-xl pl-2">Google Sign In</h4>
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Auth;
