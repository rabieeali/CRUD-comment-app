import { useEffect, useState } from "react";
import FormComponent from "./components/FormComponent";
import Loading from "./components/Loading";
import RecentComments from "./components/RecentComments";
import { getAllComments } from "./httpServices/getAllComments";

const App = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">write your comment</h1>
      <FormComponent comments={comments} fetchData={fetchData} />
      {loading ? (
        <Loading />
      ) : (
        <RecentComments
          loading={loading}
          comments={comments}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default App;
