import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { deleteComment } from "../httpServices/deleteComment";

const RecentComments = ({ comments, fetchData, loading }) => {
  const deleteHandler = async (id) => {
    Swal.fire({
      position: "middle",
      icon: "error",
      title: "Comment Is Deleted!",
      showConfirmButton: false,
      timer: 1500,
    });
    try {
      await deleteComment(id);
    } catch (error) {
      console.log(error);
    }
    fetchData();
  };

  const style = {
    borderRadius: "1rem",
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 m-auto">
          {comments.length === 0 && !loading ? (
            <h5 className="text-center text-info">please add a comment!</h5>
          ) : (
            comments.map((c) => (
              <div key={c.id} style={style} className="row shadow my-3 p-3">
                <div className="d-flex justify-content-between">
                  <h3>{c.name}</h3>
                  <span className="fs-6">{c.email}</span>
                </div>
                <p className="my-2 text-capitalize">{c.comment}</p>
                <div>
                  <BsFillTrashFill
                    onClick={() => deleteHandler(c.id)}
                    className="text-danger d-block mt-3 ms-auto"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentComments;
