import axios from "axios";
import { useEffect } from "react";
import { useUserStore } from "../store/store";

const useFetchProfile = (query: string) => {
  const { user, setUser, isLoading, setIsLoading } = useUserStore();
  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(query);

        if (response.data.role === "student") {
          // const outStatus = await axios.get("/student/outing-status");
          // if (outStatus.data === "outside") {
          //   setUser({ ...response.data, isOutside: true });
          // } else {
            // setUser({ ...response.data, isOutside: false });
          // }
          // setUser({ ...response.data, isOutside: false });
          // console.log(111)
          setUser({...response.data});
          console.log(response.data);
        } else {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return { user, isLoading };
};

export default useFetchProfile;
