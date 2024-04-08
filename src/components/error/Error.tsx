import errorImage from "../../assets/error.svg";

export default function Error() {
  return (
    <div className="grid grid-flow-row">
      <img className="m-auto mt-44" src={errorImage} alt="" />
      <h6 className="text-4xl text-center">
        404
        <br />
        Page Not Found!
      </h6>
    </div>
  );
}
