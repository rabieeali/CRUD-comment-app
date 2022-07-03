import { useState } from "react";
import Swal from "sweetalert2";
import { postComment } from "../httpServices/postComment";

const FormComponent = ({ fetchData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const canPost =
    Boolean(form.name) && Boolean(form.email) && Boolean(form.comment);

  const changeHandler = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const submitHandler = async (e) => {
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "New Comment Is Posted",
      showConfirmButton: false,
      timer: 1500,
    });

    e.preventDefault();
    try {
      await postComment(form);
    } catch (error) {
      console.log(error);
    }
    setForm({
      name: "",
      email: "",
      comment: "",
    });
    fetchData();
  };

  return (
    <div className="container">
      <div className="col-md-5 m-auto">
        <form className="shadow-lg p-3" onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={changeHandler}
              value={form.name}
              name="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange={changeHandler}
              value={form.email}
              name="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Comment</label>
            <textarea
              onChange={changeHandler}
              value={form.comment}
              className="form-control"
              name="comment"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <button
            disabled={!canPost}
            className="btn btn-success w-100"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
